import React, { useState, useEffect } from 'react';
import ButtonVertical from '../../components/ButtonVertical';
import Section from '../../components/Section';
import Episode from '../../components/Episode';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

import { 
  Text, 
  View, 
  FlatList,
  ScrollView, 
  SafeAreaView,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import { 
  Title, 
  Button,
  Paragraph,
  Caption
} from 'react-native-paper';

import RadialGradient from 'react-native-radial-gradient';
import { SinglePickerMaterialDialog } from 'react-native-material-dialog';

import api from '../../services/api';
import styles from './styles';

const Movie = ({ route, navigation }) => {

  const { movie, section } = route.params
  const [visible, setVisible] = useState(false);
  const [episodes, setEpisodes] = useState([]);
  const [season, setSeason] = useState({
    value: movie?.temporadas[0]?._id,
    label: movie?.temporadas[0]?.titulo
  });

  const getEpisodes = async (seasonId) => {
    try {
      const response = await api.get(`/episodios/temporada/${seasonId}`);
      const res = response.data
      if(res.error) {
        alert(res.mensagem);
        return false;
      }      
      setEpisodes(res.episodios);

    } catch(err) {
      alert(err.message)
    }
  }

  useEffect(() => {
    if (movie?.tipo == 'serie') {
      getEpisodes(season.value);
    }
  }, []);

  return (
    <>
      <SinglePickerMaterialDialog
        title={`${movie?.titulo} Temporadas`}
        items={movie?.temporadas.map(season => ({
          value: season._id,
          label: season.titulo 
        }))}
        visible={visible}
        selectedItem={season}
        onCancel={() => {
          setVisible(false);
        }}
        onOk={(result) => {
          setVisible(false);
          setSeason(result.selectedItem);
          getEpisodes(result.selectedItem.value);
        }}
      />
      <ScrollView style={styles.scrollView}>
        <ImageBackground 
          style={styles.cover} 
          source={{ uri: movie?.capa }}
        >
          <SafeAreaView>
            <TouchableOpacity style={styles.backButtonContainer}>
              <Icon 
                style={styles.backButtonIcon}
                name='arrow-left'
                color={'#fff'} 
                size={25} 
                onPress={()=> {
                  navigation.goBack();
                }}
              />
              <RadialGradient
                style={{width:50,height:50}}
                colors={['rgba(0, 0, 0, 0.2)','rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0)']}
                stops={[0.1, 0.5, 0.75]}
                center={[25, 25]}
                radius={25}
              />
            </TouchableOpacity>
          </SafeAreaView>
        </ImageBackground>
        <View style={styles.container}>
          <Title>
            {movie?.titulo}
          </Title>
          <Button 
            style={styles.playButton} 
            icon='play'
            mode='contained'
            color='#fff'
            uppercase={false}>
            <Text>Assistir</Text>
          </Button>
          <Paragraph>
            {movie?.descricao}
          </Paragraph>
          <Caption style={styles.caption}>
            Elenco: {' '}
            <Caption style={styles.captionWhite}>
              {movie?.elenco.join(', ')}
            </Caption>
            {'\n'}Gêneros: {' '}
            <Caption style={styles.captionWhite}>
              {movie?.generos.join(', ')}
            </Caption>
            {'\n'}Cenas e momentos: {' '}
            <Caption style={styles.captionWhite}>
              {movie?.cenas_momentos.join(', ')}
            </Caption>
          </Caption>
          <View style={styles.menu}>
            <ButtonVertical icon='plus' text='Minha Lista' />
            <ButtonVertical icon='thumb-up' text='Classifique' />
            <ButtonVertical icon='send' text='Compartilhe' />
            <ButtonVertical icon='download' text='Baixar' />
          </View>
          {movie?.tipo == 'serie' && (
            <>
              <TouchableOpacity 
                onPress={(e) => {
                  setVisible(true)
                }}
                style={styles.seasonButton}
              >
                <Text style={styles.seasonTitle}>{season.label}</Text>
                <Icon name='chevron-down' color='#fff' size={20} />
              </TouchableOpacity>
              <FlatList 
                vertical
                style={styles.episodeList}
                data={episodes}
                renderItem={({item, index}) => (
                  <Episode key={index} episode={item} />
                )}
              />
            </>
          )}
        </View>
        {movie?.tipo == 'filme' && (
          <Section border movieSection={section}/>
        )}
      </ScrollView>
    </>
  )
}

export default Movie;