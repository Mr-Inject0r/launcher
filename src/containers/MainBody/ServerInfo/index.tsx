import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Server } from "../../../utils/types";
import PlayerList from "./PlayerList";
import { ThemeContext } from "../../../contexts/theme";
import AdditionalInfo from "./AdditionalInfo";

interface IProps {
  server: Server | undefined;
}

function ServerInfo(props: IProps) {
  const { theme } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.serverInfoView,
        {
          borderColor: theme.separatorBorderColor,
          backgroundColor: theme.listBackgroundColor,
        },
      ]}
    >
      <PlayerList players={props.server ? props.server.players : []} />
      <AdditionalInfo server={props.server} />
    </View>
  );
}

const styles = StyleSheet.create({
  serverInfoView: {
    flex: 0.285,
    // maxWidth: 350,
    height: "100%",
    borderLeftWidth: 3,
  },
});

export default ServerInfo;