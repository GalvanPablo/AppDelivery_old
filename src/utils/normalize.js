import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const widthBaseScale = SCREEN_WIDTH / 390;  // Aca se modifica el valor de la base de ancho
const heightBaseScale = SCREEN_HEIGHT / 844; // Aca se modifica el valor de la base de alto

function normalize(size, based = 'width') {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

// Para ancho de pixel
const widthPixel = (size) => {
  return normalize(size, 'width');
};

// Para alto de pixel
const heightPixel = (size) => {
  return normalize(size, 'height');
};

// Para tamaño de fuente
const fontPixel = (size) => {
  return heightPixel(size);
};
// Para Margen y Padding de pixel vertical
const pixelSizeVertical = (size) => {
  return heightPixel(size);
};

// Para Margen y Padding de pixel horizontal
const pixelSizeHorizontal = (size) => {
  return widthPixel(size);
};
export {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
};