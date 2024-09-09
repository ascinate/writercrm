import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import Sidebar from "../component/Sidebar";

const options = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry", disabled: true },
  ];
const optionst = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry", disabled: true },
  ];
function Home(){
    const [selected, setSelected] = useState([]);
    const [selectedt, setSelectedt] = useState([]);
    return(
        <>
       
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />

     <MultiSelect
            options={optionst}
            value={selectedt}
            onChange={setSelectedt}
            labelledBy="Select"
        />


        </>
    )
}
export default Home;