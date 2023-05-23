import React, { useState } from "react";
import { Tabs } from "antd";
import User from "./account";
import { StyleContainer, StyleContentLeft, StyleContetnRight } from "./style";
import { SlideBar } from "components/SlideBar";

const Information: React.FC = () => {
  const [keyItem, setKeyItem] = useState("1");
  const onChange = (key: any) => {
    setKeyItem(key);
  };

  const items: any = [
    {
      key: "1",
      label: `User`,
      children: <User keyItem={keyItem} />,
    },
    {
      key: "2",
      label: `Shipper`,
      children: <User keyItem={keyItem} />,
    },
  ];
  return (
    <StyleContainer>
      <StyleContentLeft>
        <SlideBar />
      </StyleContentLeft>
      <StyleContetnRight>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </StyleContetnRight>
    </StyleContainer>
  );
};

export default Information;
