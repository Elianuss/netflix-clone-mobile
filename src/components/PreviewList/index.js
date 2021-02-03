import React from 'react'
import { FlatList, View, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PreviewItem from '../PreviewItem';

import styles from './styles';

const PreviewList = () => {
  return (
    <FlatList
      horizontal
      style={styles.flatListContainer}
      data={[1, 2, 3, 4, 5, 6, 7]}
      renderItem={({ item, index }) => (
        <PreviewItem index={index} />
      )}
    />
  )
}

export default PreviewList;