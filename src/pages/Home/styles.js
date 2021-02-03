import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bgDark: {
    backgroundColor: '#000',
    flex: 1,
  },
  logo: {
    display: 'flex',
    alignSelf: 'center',
    marginBottom: 100
  },
  input: {
    height: 59.0,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    marginBottom: 20
  },
  button: {
    height: 59.0,
    borderRadius: 10,
    marginBottom: 20,
    display: 'flex',
    justifyContent: 'center',
  },
  textSmall: {
    color: 'rgba(255, 255, 255, 0.6)',
    textAlign: 'center',
    marginTop: 30
  }
});

export default styles;