import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bgDark: {
    backgroundColor: '#000',
    flex: 1,
  },
  menuHeader: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly' 
  },
  playButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 39,
    alignContent: 'center',
  },
  previewContainer: {
    width: '100%',
    marginTop: 50
  },
  previewTitle: {
    marginLeft: 20
  }
});

export default styles;