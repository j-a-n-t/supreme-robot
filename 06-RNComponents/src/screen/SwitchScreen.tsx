import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import { HeaderTitle } from "../components/HeaderTitle";
import { CustomSwitch } from "../components/CustomSwitch";

interface SwitchState {
  isActive: boolean,
  isHungry: boolean,
  isHappy: boolean
}

const SwitchScreen = () => {

  const [state, setState] = useState<SwitchState>({ isActive: true, isHungry: false, isHappy: true });
  const { isActive, isHappy, isHungry } = state;

  const onChange = (value: boolean, field: keyof typeof state) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

      <HeaderTitle title={"Switches"} />

      <View style={className.switchRow}>
        <Text style={className.textSwitch}>IsActive</Text>
        <CustomSwitch isOn={isActive} onChange={(value) => onChange(value, "isActive")} />
      </View>

      <View style={className.switchRow}>
        <Text style={className.textSwitch}>IsHungry</Text>
        <CustomSwitch isOn={isHungry} onChange={(value) => onChange(value, "isHungry")} />
      </View>

      <View style={className.switchRow}>
        <Text style={className.textSwitch}>IsHappy</Text>
        <CustomSwitch isOn={isHappy} onChange={(value) => onChange(value, "isHappy")} />
      </View>

      <View style={{ marginTop: 70 }}>
        <Text style={className.textSwitch}>
          {JSON.stringify(state, null, 5)}
        </Text>
      </View>

    </View>
  );
};

const className = StyleSheet.create({
  switchRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical:10
  },
  textSwitch: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export { SwitchScreen };
