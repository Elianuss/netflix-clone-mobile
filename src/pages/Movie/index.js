import React, { useState } from 'react';
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
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import { 
  Title, 
  Button,
  Paragraph,
  Caption
} from 'react-native-paper';

import { SinglePickerMaterialDialog } from 'react-native-material-dialog';

import styles from './styles';

const Movie = () => {

  const [type] = useState('serie');
  const [visible, setVisible] = useState(false);
  const [season, setSeason] = useState({
    value: 1,
    label: 'Temporada 1'
  });

  return (
    <>
      <SinglePickerMaterialDialog
        title={'Série - Temporadas'}
        items={[
          { value: 1, label: 'Temporada 1' },
          { value: 2, label: 'Temporada 2' },
          { value: 3, label: 'Temporada 3' },
        ]}
        visible={visible}
        selectedItem={season}
        onCancel={() => {
          setVisible(false);
        }}
        onOk={(result) => {
          setVisible(false);
          setSeason(result.selectedItem);
        }}
      />
      <ScrollView style={styles.scrollView}>
        <ImageBackground 
          style={styles.cover} 
          source={{ uri: 'https://i.imgur.com/HOOt0ZR.jpg' }}
        />
        <View style={styles.container}>
          <Title>
            Nome do Filme
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
            Pregadores Profanos. Autoridades Corruptas. Amantes Assassinos. Numa cidade cheia de pecadores, um jovem busca justiça.
          </Paragraph>
          <Caption style={styles.caption}>
            Elenco: {' '}
            <Caption style={styles.captionWhite}>
              Elenco: Silvio Sampaio, Juliana Righi, Omar Sampaio, Mikael Lopes. 
            </Caption>
            {'\n'}Gêneros: {' '}
            <Caption style={styles.captionWhite}>
              Ação, Aventura, Dramático.
            </Caption>
            {'\n'}Cenas e momentos: {' '}
            <Caption style={styles.captionWhite}>
              Violentos.
            </Caption>
          </Caption>
          <View style={styles.menu}>
            <ButtonVertical icon='plus' text='Minha Lista' />
            <ButtonVertical icon='thumb-up' text='Classifique' />
            <ButtonVertical icon='send' text='Compartilhe' />
            <ButtonVertical icon='download' text='Baixar' />
          </View>
          {type == 'serie' && (
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
                data={[1, 2, 3, 4, 5]}
                renderItem={({item, index}) => (
                  <Episode key={index} index={index} />
                )}
              />
            </>
          )}
        </View>
        {type == 'filme' && (
          <Section border />
        )}
      </ScrollView>
    </>
  )
}

export default Movie;