import { renderHook, act } from '@testing-library/react-hooks';
import { useCostCalculator } from './useCostCalculator';
import { CostRequest, Regions } from './types';

describe('useCostCalculator', () => {
  test('should set details with correct values when getCost is called with a valid CostRequest', () => {
    const { result } = renderHook(() => useCostCalculator());
    const validRequest: CostRequest = { price: 10, quantity: 5, region: Regions.AKL };
    act(() => {
      result.current.getCost(validRequest);
    });
    expect(result.current.details.totalCost).toBe(50);
    // Add more assertions for discount and tax
  });

  test('should not set details when getCost is called with an invalid CostRequest', () => {
    const { result } = renderHook(() => useCostCalculator());
    const invalidRequest: CostRequest = { price: -10, quantity: 5, region: Regions.AKL };
    act(() => {
      result.current.getCost(invalidRequest);
    });
    expect(result.current.details.totalCost).toBeUndefined();
    // Add more assertions for discount and tax
  });

  test('should return details object with correct initial values', () => {
    const { result } = renderHook(() => useCostCalculator());
    expect(result.current.details.totalCost).toBeUndefined();
    // Add more assertions for discount and tax
  });
});