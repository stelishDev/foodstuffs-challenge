import { getRegionalTax } from './getRegionalTax';

import { Regions } from './types';

describe('getRegionalTax', () => {
  it('should return the correct tax for region AKL and price 100', () => {
    expect(getRegionalTax(Regions.AKL, 100)).toBeCloseTo(6.85);
  });

  it('should return the correct tax for region CHC and price 200', () => {
    expect(getRegionalTax(Regions.CHC, 200)).toBeCloseTo(8);
  });

  it('should return the correct tax for region WLG and price 150', () => {
    expect(getRegionalTax(Regions.WLG, 150)).toBeCloseTo(12);
  });

  it('should return the correct tax for region TAS and price 80', () => {
    expect(getRegionalTax(Regions.TAS, 80)).toBeCloseTo(6.6);
  });

  it('should return the correct tax for region WAI and price 120', () => {
    expect(getRegionalTax(Regions.WAI, 120)).toBeCloseTo(7.5);
  });
});