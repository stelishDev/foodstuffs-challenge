import { Meta, StoryObj } from "@storybook/react";
import { PricingForm } from "./PricingForm";

const meta = {
    title: 'PricingForm',
    component: PricingForm,
} satisfies Meta<typeof PricingForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
}