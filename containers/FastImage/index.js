import React from 'react';
import {View} from 'react-native';
import FastImage from 'react-native-fast-image';

const Image = () => {
  return (
    <View>
      <FastImage
        style={{width: 400, height: 400}}
        source={{
          uri: 'https://4kwallpapers.com/images/walls/thumbs_3t/2337.jpg',
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </View>
  );
};

export default Image;
