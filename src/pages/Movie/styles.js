import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#000'
  },
  cover: {
    height: 200,
    width: '100%'
  },
  container: {
    padding: 20
  },
  playButton: {
    marginVertical: 20
  },
  caption: {
    marginTop: 20
  },
  captionWhite: {
    color: '#fff'
  },
  menu: {
    height: 38,
    width: '100%',
    display: 'flex',
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  seasonButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderColor: 'rgba(255, 255, 255, 0.21)',
    borderWidth: 1,
    width: '100%',
    padding: 10,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  seasonTitle: {
    color: '#fff',
    fontSize: 16
  },
  episodeList: {
    marginVertical: 20
  },
  backButtonContainer: {
    marginLeft: 10,
    width: 50,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  backButtonIcon: {
    padding: 10,
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 9
  }
});

export default styles;