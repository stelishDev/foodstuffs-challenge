export enum Regions {
  AKL = "Akl",
  CHC = "Chc",
  WLG = "Wlg",
  TAS = "Tas",
  WAI = "Wai",
}

export type CostRequest = {
  region: Regions;
  quantity: number;
  price: number;
};
