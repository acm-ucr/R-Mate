import { View } from "react-native";
import React from "react";
import SelectList from "react-native-dropdown-select-list";
import Icon from "react-native-vector-icons/Ionicons";
import { useState } from "react";

const SRCDropdown = () => {
  const [setSelected] = useState("");
  const data = [
    { key: "1", value: "Aquatics" },
    { key: "2", value: "Competitive Sports" },
    { key: "3", value: "Cooking Well" },
    { key: "4", value: "Fitwell" },
    { key: "5", value: "Open Recreation" },
    { key: "6", value: "Outdoor Excursions" },
    { key: "7", value: "Ropes" },
    { key: "8", value: "Youth Programs" },
  ];
  return (
    <View>
      <SelectList
        data={data}
        placeholder="Activity Classes"
        searchPlaceholder=""
        save="value"
        arrowicon={<Icon name="md-caret-up" size={25} color={"white"} />}
        closeicon={<Icon name="md-caret-down" size={25} color={"white"} />}
        boxStyles={{ backgroundColor: "#003DA5", borderRadius: 14, padding: 0 }}
        inputStyles={{
          color: "white",
          fontFamily: "Poppins_500Medium",
          fontSize: 20,
          borderRadius: 20,
        }}
        dropdownStyles={{ backgroundColor: "#5A8BDF" }}
        dropdownItemStyles={{ padding: 2 }}
        dropdownTextStyles={{
          color: "white",
          fontFamily: "Poppins_500Medium",
          fontSize: 20,
        }}
        setSelected={setSelected}
        maxHeight={400}
      />
    </View>
  );
};

export default SRCDropdown;
