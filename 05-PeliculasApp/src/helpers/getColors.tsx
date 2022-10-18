import ImageColors from 'react-native-image-colors';

const getImageColors = async (uriImage: string) => {
    let primary;
    let secondary;
    const colors = await ImageColors.getColors(uriImage, {});

    if (colors.platform === 'android') {
        primary = colors.dominant;
        secondary = colors.average;
    } else if (colors.platform === 'ios') {
        primary = colors.primary;
        secondary = colors.secondary;
    }
    return [primary, secondary];
};

export {getImageColors};
