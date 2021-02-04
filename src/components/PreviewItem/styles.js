import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  oval: {
    backgroundColor: '#E50914',
    padding: 2.5,
    width: 90,
    height: 90,
    borderRadius: 45.0
  },
  cover: {
    height: 85,
    width: 85,
    borderRadius: 42.5
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 90,
    height: 40,
    position: 'absolute',
    bottom: 0,
    zIndex: 10,
  },
  gradient: {
    width: '100%',
    height: 60,
    position: 'absolute',
    zIndex: 9,
    bottom: -10,
    left: 2
  }
});

export default styles;

