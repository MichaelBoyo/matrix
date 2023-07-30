import React, { FC } from "react";
import style from "./index.module.scss";
import { Button } from "@mui/material";

import { ChevronDown2 } from "../../assets/ChevronDown2";
export interface CardItemProps {
  label: string;
  value: string;
  rate?: string;
}
export interface BaseCardProps {
  icon: JSX.Element;
  items: CardItemProps[];
  background?: string;
}
export const BaseCard: FC<BaseCardProps> = ({ icon, items, background }) => {
  return (
    <div style={{ background }} className={style.baseCard}>
      <div className={style.top}>
        {icon}
        <Button endIcon={<ChevronDown2 />}>This week</Button>
      </div>
      <div className={style.body}>
        {items.map((item) => (
          <div>
            <label>{item.label}</label>
            <div className={style.innerBody}>
              <p>{item.value}</p>
              <small>{item.rate}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
