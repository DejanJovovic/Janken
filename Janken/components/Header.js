import * as React from "react";
import { Appbar } from "react-native-paper";
import colors from "../config/colors";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Header = () => {
  return (
    <SafeAreaProvider>
      <Appbar.Header style={{ backgroundColor: colors.content }}>
        <Appbar.Content
          title="Janken"
          style={{
            alignItems: "center",
            transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
          }}
        />
      </Appbar.Header>
    </SafeAreaProvider>
  );
};

export default Header;
