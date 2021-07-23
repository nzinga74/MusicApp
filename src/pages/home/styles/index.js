import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F9FF',
  },
  banner: {
    width: '100%',
    height: 307,
    backgroundColor: '#F51E38',
  },
  trackTitle: {
    color: '#0F1E36',
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 20,
    marginTop: 15,
  },
  mainSection: {
    padding: 20,
    flex: 1,
  },

  trackImage: {
    borderRadius: 8,
    width: 112,
    height: 112,
  },
  eachAlbum: {
    marginRight: 8,
  },
  albumTitle: {
    fontSize: 16,
    lineHeight: 16,
    color: '#0F1E36',
    marginTop: 6,
  },
  albumArtist: {
    fontSize: 12,
    color: '#0F1E36',
    lineHeight: 14,
  },
  topTrackList: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  topTrackContent: {
    marginLeft: 14,
  },
  topTrackTitle: {
    marginBottom: 3,
  },
  topTrackImage: {
    width: 44.41,
    height: 44.41,
  },
});
