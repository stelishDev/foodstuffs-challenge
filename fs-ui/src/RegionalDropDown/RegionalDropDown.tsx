import type { MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";
import { Regions } from "fs-hooks";
import { ItemType } from "antd/es/menu/hooks/useItems";
import { useState, FC } from "react";

const items: MenuProps["items"] = Object.values(Regions).map(
  (region) => ({ label: region, key: region } as ItemType)
);

export type RegionalDropDownProps = {
  onChange: (region: string) => void;
  placeholder?: string;
};

export const RegionalDropDown: FC<RegionalDropDownProps> = ({
  onChange,
  placeholder = "Select Region",
}: RegionalDropDownProps) => {
  const [region, setRegion] = useState<string>(placeholder);

  const menuProps: MenuProps = {
    items,
    onClick: (e) => {
      setRegion(e.key);
      onChange(e.key);
    },
  };
  return (
    <Dropdown menu={menuProps} className="min-w-[160px] max-w-[160px]">
      <Button>
        <Space className="grid grid-cols-2">
          <p className="flex justify-start">{region}</p>

          <div className="flex justify-end">
            <DownOutlined />
          </div>
        </Space>
      </Button>
    </Dropdown>
  );
};
