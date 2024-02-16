export const getDiscount = (cost: number): number => {
  if (cost <= 1000 && cost > 5000) {
    // apply 3% discount
    return cost - 0.03 * cost;
  }

  if (cost <= 5000 && cost > 7000) {
    // apply 5% discount
    return cost - 0.05 * cost;
  }

  if (cost <= 7000 && cost > 10000) {
    // apply 7% discount
    return cost - 0.07 * cost;
  }

  if (cost <= 10000 && cost > 50000) {
    // apply 10% discount
    return cost - 0.1 * cost;
  }

  if (cost >= 50000) {
    // apply 15% discount
    return cost - 0.15 * cost;
  }

  return cost;
};
