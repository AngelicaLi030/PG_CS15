import { StyleSheet, Dimensions } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(39, 175, 233, 0.53)",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  header: {
    // marginTop: 12,
    width: "100%",
    display: "flex",
    width: 376,
    justifyContent: "flex-start",
  },
  title: {
    color: "#15336D",
    fontSize: 28,
    lineHeight: 34,
    fontWeight: "700",
  },
  card: {
    width: 376,
    // height: 473,
    borderRadius: 20,
    backgroundColor: "#E2EEF7",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 18,
    paddingVertical: 13,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 2,
  },
  item: {
    width: "100%",
    height: 97,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#A7A7A7",
    padding: 8,
  },

  itemTilte: {
    fontSize: 15,
    lineHeight: 18,
    color: "rgb(21, 51, 109)",
    fontWeight: "700",
  },

  itemContent: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginTop: 9,
    flexWrap: "wrap",
  },

  itemTag: {
    minWidth: 71,
    // height: 14,
    borderRadius: 16,
    shadowColor: "rgba(0, 0, 0, 1)",
    elevation: 2,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  itemTagTitle: {
    textAlign: "center",
    fontSize: 10,
    fontWeight: "700",
  },

  submitBtn: {
    marginTop: 28,
    width: 286,
    height: 45,
    borderRadius: 26,
    backgroundColor: "#15336D",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    lineHeight: 45,
    fontWeight: "600",
  },
  linkBtn: {
    marginTop: 20,
  },
  linkText: {
    color: "rgba(21, 51, 109, 0.93)",
    fontSize: 14,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
});