export enum Regions {
  AKL = "AKL",
  CHC = "CHC",
  WLG = "WLG",
  TAS = "TAS",
  WAI = "WAI",
}

export type CostRequest = {
  region: Regions;
  quantity: number;
  price: number;
};
