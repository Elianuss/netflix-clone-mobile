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

const Section = () => {
  return (
    <View style={styles.container}>
      <Title style={styles.sectionTitle}>Nome da Section</Title>
      <FlatList 
        data={[1, 2, 3, 4, 5]}
        renderItem={({item, index}) => (
          <TouchableOpacity key={index}>
            <ImageBackground
              style={styles.cover}
              source={{ uri: 'https://i.imgur.com/HOOt0ZR.jpg' }}
            >
              <Image />
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default Section;