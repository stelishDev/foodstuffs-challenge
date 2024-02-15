import { render, fireEvent } from '@testing-library/react';
import { RegionalDropDown } from './RegionalDropDown';

test('renders with default placeholder', () => {
  const onChangeMock = jest.fn();
  const { getByText } = render(<RegionalDropDown onChange={onChangeMock} />);
  expect(getByText('Select Region')).toBeInTheDocument();
});

test('calls onChange when item is clicked', () => {
  const onChangeMock = jest.fn();
  const { getByText } = render(<RegionalDropDown onChange={onChangeMock} />);
  fireEvent.click(getByText('Item1'));
  expect(onChangeMock).toHaveBeenCalledWith('Item1');
});

test('updates region state when item is clicked', () => {
  const onChangeMock = jest.fn();
  const { getByText } = render(<RegionalDropDown onChange={onChangeMock} />);
  fireEvent.click(getByText('Item2'));
  expect(getByText('Item2')).toBeInTheDocument();
});