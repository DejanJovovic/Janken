import * as React from "react";
import { Appbar } from "react-native-paper";
import colors from "../config/colors";

const Header = () => {
  return (
    <Appbar.Header style={{ backgroundColor: colors.appBarHeader }}>
      <Appbar.Content
        title="Janken"
        style={{
          alignItems: "center",
          transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
        }}
      />
    </Appbar.Header>
  );
};

export default Header;
