import React from 'react';
import { 
  View, 
  Image,
  FlatList, 
  TouchableOpacity, 
  ImageBackground
} from 'react-native';
import { Title } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const Section = ({ border, movieSection }) => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {border && (
        <View style={styles.borderTop}></View>
      )}
      <Title style={styles.sectionTitle}>{movieSection[0]?.generos[0]}</Title>
      <FlatList 
        style={styles.sectionList}
        horizontal
        data={movieSection}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <TouchableOpacity 
            key={index}
            onPress={() => {
              navigation.navigate('Movie', { movie: item, section: movieSection });
            }}
          >
            <ImageBackground
              style={[styles.cover, { marginRight: 10, marginLeft: index == 0 ? 20 : 0 }]}
              source={{ uri: item.capa }}
            >
              <Image 
                resizeMode='contain'
                style={styles.logo}
                source={{ uri: item.logoMobile ? item.logoMobile : item.logo }}
              />
              <LinearGradient 
                style={styles.gradient} 
                colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.6)']}
              />
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default Section;