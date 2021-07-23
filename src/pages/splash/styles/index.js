import { PixelRatio, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F51E38',
  },
  imageSlide: {
    width: '100%',
    height: 450,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    paddingBottom: 10,
    paddingTop: 10,
    color: '#fff',
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: 14,
  },
  smallImage: {
    width: 375,
    height: 375,
  },
  acessLink: {
    fontSize: 15,
    color: '#fff',
    paddingTop: 25,
  },
});
