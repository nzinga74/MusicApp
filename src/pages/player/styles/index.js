import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  heroImage: {
    width: '100%',
    height: '40%',
  },
  playerBody: {
    width: '100%',
    height: '68%',
    marginTop: '-8%',
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  avatarBody: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 250,
  },
  avatarImage: {
    width: 150,
    height: 150,
    borderRadius: 500,
  },
  titleMusic: {
    fontSize: 18,
    color: '#0F1E36',
    marginTop: 10,
  },
  artist: {
    color: '#0F1E36',
    opacity: 0.45,
    fontSize: 16,
    marginTop: 2,
  },
  iconOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  viewControl: {
    flexDirection: 'row',
    marginTop: 90,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  stopButton: {
    width: 93,
    height: 93,
    borderRadius: 500,
    backgroundColor: '#FDD2D7',
    borderWidth: 1,
    borderColor: '#F51E38',
    borderStyle: 'solid',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stopCentralButton: {
    width: 71,
    height: 71,
    backgroundColor: '#F51E38',
    borderRadius: 500,
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
});
