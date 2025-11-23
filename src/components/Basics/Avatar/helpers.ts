import { palette } from '../../../context/ThemeContext/palette';

const generateNumberFromString = (str: string): number => {
  let h = 0;
  const l = str.length;
  let i = 0;
  if (l > 0) {
    while (i < l) {
      h = ((h << 5) - h + str.charCodeAt(i++)) | 0;
    }
  }
  return h;
};

const avatarColors = [
  palette.green8,
  palette.olive8,
  palette.turquoise8,
  palette.cloud8,
  palette.blue8,
  palette.ocean8,
  palette.yellow8,
  palette.orange8,
  palette.red8,
  palette.pink8,
  palette.fuchsia8,
  palette.plum8,
  palette.purple8,
  palette.darkPurple8,
];

export const generateAvatarColor = (label: string): string => {
  const normalizedLabel = label.toLowerCase();
  const uniqueHash = Math.abs(generateNumberFromString(normalizedLabel));
  const colorsCount = avatarColors.length;
  const index = uniqueHash % colorsCount;
  return avatarColors[index];
};
