import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    marginTop: -10,
  },

  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "plum",
    margin: 10,
    color: "orchid",
  },
  button1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 5,
    borderRadius: 4,
    elevation: 10,
    backgroundColor: "plum",
    margin: 10,
    color: "orchid",
  },

  text: {
    fontSize: 30,
    letterSpacing: 0.25,
    color: "purple",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  input: {
    // color: "pink",
     height: 50,
    width: "80%",
    margin: 12,
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: "plum",
    borderRadius: 7,
  },

  widthFull: {
    width: width,
  },

  containerFullWidth: {
    flex: 1,
    width: "80%",
  },
  card: {
    width: "80%",
  },
  box: {
    maxWidth: 300,
    width: "100%",
    borderRadius: 20,
    padding: 20,
    backgroundColor: "pink",
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 12,
    },
  },
  imgRedonda: {
    width: 200,
    height: 200,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "999px",
  },

  container2: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "space-around",
    // marginTop:-10,
  },

  cabeca: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginTop: -10,
    width: "100%",
    paddingHorizontal: 30,
  },

  logo: {
    width: 90,
    height: 90,
  },

  pontos: {
    color: "deeppink",
    fontSize: 30,
  },

  text1: {
    fontSize: 17,
    letterSpacing: 0.25,
    color: "white",
    marginVertical: 20,
    textAlign: "center",
  },
});

export default styles;
