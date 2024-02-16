import { Meta, StoryObj } from "@storybook/react";
import { RegionalDropDown } from "./RegionalDropDown";

const meta = {
    title: 'RegionalDropDown',
    component: RegionalDropDown,
} satisfies Meta<typeof RegionalDropDown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
