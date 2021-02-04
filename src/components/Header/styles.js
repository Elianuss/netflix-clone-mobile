import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  textWhite: {
    color: '#fff',
  },
  header: {
    position: 'absolute',
    top: 0,
    zIndex: 999,
  },
  headerSafeAreaView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    height: 70,
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 50 : 10
  }
});

export default styles;