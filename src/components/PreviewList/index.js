import React from 'react'
import { FlatList, View, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PreviewItem from '../PreviewItem';

import styles from './styles';

const PreviewList = ({ movieList }) => {
  return (
    <FlatList
      horizontal
      style={styles.flatListContainer}
      data={movieList}
      renderItem={({ item, index }) => (
        <PreviewItem index={index} movie={item} />
      )}
    />
  )
}

export default PreviewList;