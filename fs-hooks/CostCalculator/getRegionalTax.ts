import { Regions } from ".";

export const getRegionalTax = (region: Regions, price: number): number => {
    if (region === Regions.AKL) {
        // 6.85% tax
        return price * 0.0685;
    }
    if (region === Regions.CHC) {
        // 4% tax
        return price * 0.04;
    }
    if (region === Regions.WLG) {
        // 8% tax
        return price * 0.08;
    }
    if (region === Regions.TAS) {
        // 8.25% tax
        return price * 0.0825;
    }
    if (region === Regions.WAI) {
        // 6.25% tax
        return price * 0.0625;
    }
    return 0;
}