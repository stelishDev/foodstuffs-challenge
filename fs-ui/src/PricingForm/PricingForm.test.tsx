import { render, screen, fireEvent } from '@testing-library/react';
import { PricingForm } from './PricingForm';

test('form submission function is called with the correct values', () => {
  const mockSubmit = vi.fn();
  // render PricingForm
  render(<PricingForm onSubmit={mockSubmit} />);

  // fill out form fields
  fireEvent.change(screen.getByLabelText('Number of Items'), { target: { value: '5' } });
  fireEvent.change(screen.getByLabelText('Price per item'), { target: { value: '10.50' } });
  fireEvent.change(screen.getByLabelText('Region'), { target: { value: 'US' } });

  // submit form
  fireEvent.click(screen.getByText('Submit'));

  // assert that onSubmit function is called with correct values
  expect(mockSubmit).toHaveBeenCalledWith({ numberOfItems: '5', pricePerItem: '10.50', taxCode: 'US' });
});

test('error messages are displayed for empty or invalid input', () => {
  const mockSubmit = vi.fn();
  // render PricingForm
  render(<PricingForm onSubmit={mockSubmit} />);

  // submit form without filling out fields
  fireEvent.click(screen.getByText('Submit'));

  // assert error messages are displayed
  expect(screen.getByText('Input number of items')).toBeInTheDocument();
  expect(screen.getByText('Input price per item')).toBeInTheDocument();
  expect(screen.getByText('Please select a region')).toBeInTheDocument();

  // fill out fields with invalid input
  fireEvent.change(screen.getByLabelText('Number of Items'), { target: { value: 'abc' } });
  fireEvent.change(screen.getByLabelText('Price per item'), { target: { value: 'xyz' });
  fireEvent.change(screen.getByLabelText('Region'), { target: { value: 'invalid' } });

  // submit form
  fireEvent.click(screen.getByText('Submit'));

  // assert error messages for invalid input are displayed
  expect(screen.getByText('Input a valid number')).toBeInTheDocument();
  expect(screen.getByText('Input valid price')).toBeInTheDocument();
  expect(screen.getByText('Please a valid region code')).toBeInTheDocument();
});

test('reset button resets form fields', () => {
  const mockSubmit = vi.fn();
  // render PricingForm
  render(<PricingForm onSubmit={mockSubmit} />);

  // fill out form fields
  fireEvent.change(screen.getByLabelText('Number of Items'), { target: { value: '5' } });
  fireEvent.change(screen.getByLabelText('Price per item'), { target: { value: '10.50' } });
  fireEvent.change(screen.getByLabelText('Region'), { target: { value: 'US' } });

  // click reset button
  fireEvent.click(screen.getByText('Reset'));

  // assert form fields are cleared
  expect(screen.getByLabelText('Number of Items')).toHaveValue('');
  expect(screen.getByLabelText('Price per item')).toHaveValue('');
  expect(screen.getByLabelText('Region')).toHaveValue('');
});