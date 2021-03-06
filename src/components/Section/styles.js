import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container : {
    width: '100%'
  },
  sectionList: {
    width: '100%',
    height: 180,
    marginTop: 10,
    marginBottom: 30
  },  
  borderTop: {
    backgroundColor: '#E50914',
    height: 4,
    width: 100,
    marginBottom: 5,
    marginLeft: 20
  },
  sectionTitle: {
    color: '#fff',
    marginLeft: 20
  },
  cover: {
    width: 120,
    height: 180,
    borderRadius: 6.0,
    overflow: 'hidden',
  },
  logo: {
    width: 100,
    height: 60,
    position: 'absolute',
    zIndex: 10,
    bottom: 10,
    alignSelf: 'center',
    justifyContent: 'center',
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