import React from "react";
import { CountryType } from "./App";
import CountryItem from "./CountryItem";

// type CountryType = {
//   no: number;
//   country: string;
//   visited: boolean;
// };

type CountryListPropsType = {
  countries: Array<CountryType>;
};
const CountryList = (props: CountryListPropsType) => {
  const list = props.countries;

  let countries = list.map((item, index) => {
    return <CountryItem key={item.no} countryitem={item} />;
  });
  return <ul className="list-group"> {countries}</ul>;
};

export default CountryList;
