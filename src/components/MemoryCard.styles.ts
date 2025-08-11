import { StyleSheet } from "react-native";
import { theme } from "../../utils/theme";

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: theme.card,
    borderRadius: 16,
    overflow: "hidden",
    elevation: 3,
    shadowColor: theme.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    marginVertical: 12,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: theme.text,
    padding: 16,
    textAlign: "center",
  },
});

export default styles;
