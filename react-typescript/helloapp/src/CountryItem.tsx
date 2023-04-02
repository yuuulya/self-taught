import React from "react";
import { CountryType } from "./App";

type CountryItemProsType = {
  countryitem: CountryType;
};

const CountryItem = (props: CountryItemProsType) => {
  let item = props.countryitem;

  return (
    <li
      className={item.visited ? "list-group-item active" : "list-group-item"}
    >
      {item.country}
    </li>
  );
};

export default CountryItem;
