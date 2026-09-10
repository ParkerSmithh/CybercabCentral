/* Cybercab Central — pure calculation functions (no DOM). */
const CCC_CALC = (() => {
  function dispatchETA({ areaSqMi, fleetSize, demandFactor, k = 8 }) {
    if (fleetSize <= 0) return Infinity;
    const eta = k * Math.sqrt(areaSqMi / fleetSize) * demandFactor;
    return Math.round(eta * 10) / 10;
  }

  function arrivalOdds(fleetA, fleetB) {
    const total = fleetA + fleetB;
    if (total <= 0) return { oddsA: 50, oddsB: 50 };
    const oddsA = Math.round((fleetA / total) * 1000) / 10;
    return { oddsA, oddsB: Math.round((100 - oddsA) * 10) / 10 };
  }

  function fleetFinancials({
    fleetSize, electricityRate, dailyMiles, fare,
    inductiveLossFactor, networkCutPct, costPerCab,
    kwhPerMile = 0.25
  }) {
    const dailyRevenuePerCab = dailyMiles * fare;
    const grossRevenue = dailyRevenuePerCab * fleetSize * 30;
    const teslaCut = grossRevenue * (networkCutPct / 100);
    const monthlyEnergyOverhead =
      dailyMiles * kwhPerMile * electricityRate * fleetSize * 30 * (1 + inductiveLossFactor);
    const netOperatingIncome = grossRevenue - teslaCut - monthlyEnergyOverhead;
    const totalCapital = fleetSize * costPerCab;
    const breakevenMonths = netOperatingIncome > 0
      ? Math.round((totalCapital / netOperatingIncome) * 10) / 10
      : Infinity;
    return { grossRevenue, teslaCut, monthlyEnergyOverhead, netOperatingIncome, breakevenMonths };
  }

  return { dispatchETA, arrivalOdds, fleetFinancials };
})();

if (typeof module !== 'undefined' && module.exports) module.exports = CCC_CALC;
