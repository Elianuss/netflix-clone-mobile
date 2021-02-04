import React from 'react';
import { Caption, Title } from 'react-native-paper';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native'

import styles from './styles';

const Episode = ({ index }) => {
  return (
    <TouchableOpacity style={styles.episodeContainer}>
      <View style={styles.infoContainer}>
        <Image 
          style={styles.episodeThumb}
          source={{ uri: 'https://picsum.photos/300/200' }}
        />
        <View style>
          <Title style={[styles.textWhite, { fontSize: 15 }]}>{index+1}. Nome do Episódio</Title>
          <Caption style={styles.textWhite}>45 min</Caption>
        </View>
      </View>
      <Caption style={styles.descriptionCaption}>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
      </Caption>
    </TouchableOpacity>
  )
}

export default Episode;