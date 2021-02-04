import React from 'react';
import { 
  View, 
  Image,
  FlatList, 
  TouchableOpacity, 
  ImageBackground
} from 'react-native';
import { Title } from 'react-native-paper';

import styles from './styles';

const Section = ({ border }) => {
  return (
    <View style={styles.container}>
      {border && (
        <View style={styles.borderTop}></View>
      )}
      <Title style={styles.sectionTitle}>Nome da Section</Title>
      <FlatList 
        style={styles.sectionList}
        horizontal
        data={[1, 2, 3, 4, 5]}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <TouchableOpacity key={index}>
            <ImageBackground
              style={[styles.cover, { marginRight: 10, marginLeft: index == 0 ? 20 : 0 }]}
              source={{ uri: 'https://i.imgur.com/HOOt0ZR.jpg' }}
            >
              <Image 
                resizeMethod
                resizeMode='contain'
                style={styles.logo}
                source={{ uri: 'https://i.imgur.com/yhjZgM3.png' }}
              />
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default Section;