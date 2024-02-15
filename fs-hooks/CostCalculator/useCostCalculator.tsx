import { useState } from "react";
import { getDiscount } from "./getDiscount";
import { getRegionalTax } from "./getRegionalTax";
import { CostRequest } from "./types";

export type CostDetails = {
  totalCost?: number;
  discount?: number;
  tax?: number;
};

export type CostCalculatorType = {
  details: CostDetails;
  getCost: (request: CostRequest) => void;
};

export const useCostCalculator = (): CostCalculatorType => {
  const [details, setDetails] = useState<CostDetails>({});

  const getCost = (request: CostRequest) => {
    setDetails({
      totalCost: request.price * request.quantity,
      discount: getDiscount(request.price * request.quantity),
      tax: getRegionalTax(request.region, request.price * request.quantity),
    });
  };

  return { details, getCost };
};
