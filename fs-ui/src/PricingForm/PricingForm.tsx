import { Button, Form, Input } from "antd";
import { RegionalDropDown } from "../RegionalDropDown";
import { numberOfItemsRegex, priceRegex, regionalDropDownRegex } from "./regex";

export type PricingType = {
  numberOfItems: string;
  pricePerItem: string;
  taxCode: string;
};

export type PricingFormProps = {
  onSubmit: (values: PricingType) => void;
};

export const PricingForm: React.FC<PricingFormProps> = ({
  onSubmit,
}: PricingFormProps) => {
  const [form] = Form.useForm();
  const handleFinish = (values: PricingType) => {
    console.log("Received values of form: ", values);
    onSubmit(values);
  };
  return (
    <Form
      form={form}
      className="flex flex-col justify-items-end max-w-[300px]"
      onFinish={handleFinish}
    >
      <Form.Item
        className="flex justify-end"
        label="Number of Items"
        name="numberOfItems"
        rules={[
          {
            required: true,
            message: "Input number of items",
          },
          {
            pattern: numberOfItemsRegex,
            message: "Input a valid number",
          },
        ]}
      >
        <Input className="max-w-[160px]" />
      </Form.Item>

      <Form.Item
        className="flex justify-end"
        label="Price per item"
        name="pricePerItem"
        rules={[
          {
            required: true,
            message: "Input price per item",
          },
          {
            pattern: priceRegex,
            message: "Input valid price",
          },
        ]}
      >
        <Input prefix={<span>$</span>} className="max-w-[160px]" />
      </Form.Item>

      <Form.Item
        className="flex justify-end"
        label="Region"
        name="taxCode"
        rules={[
          {
            required: true,
            message: "Please select a region",
          },
          {
            pattern: regionalDropDownRegex,
            message: "Please a valid region code",
          },
        ]}
      >
        <RegionalDropDown onChange={() => {}} />
      </Form.Item>

      <Form.Item className="flex justify-end">
        <Button type="text" size={"middle"} htmlType="submit" onClick={() => form.resetFields()}>
          Reset
        </Button>
        <Button type="default" size={"middle"} htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
