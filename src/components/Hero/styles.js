import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  hero: {
    width: '100%',
    height: 400,
  },
  logo: {
    marginTop: 190,
    alignSelf: 'center',
    width: 300,
    height: 150,
    position: 'absolute',
    zIndex: 10,
  },
  containerTop10: {
    position: 'absolute',
    zIndex: 10,
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center'
  },
  top10Badge: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  top10Text: {
    color: '#fff',
    fontSize: 18
  },
  gradient: {
    height: 150,
    width: '100%',
    position: 'absolute',
    zIndex: 9,
    bottom: 0
  }
});

export default styles;