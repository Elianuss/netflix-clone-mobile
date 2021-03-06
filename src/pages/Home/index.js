import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, RefreshControl } from 'react-native';
import { Title, Button } from 'react-native-paper';

import Header from '../../components/Header';
import Hero from '../../components/Hero';
import ButtonVertical from '../../components/ButtonVertical';
import PreviewList from '../../components/PreviewList';
import Section from '../../components/Section';

import api from '../../services/api';
import styles from './styles';

const Home = () => {

  const [main, setMain] = useState({});
  const [sections, setSections] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getHome = async () => { 
    try { 
      setRefreshing(true);
      const response = await api.get('/home');
      const res = response.data;
      if(res.error) {
        setRefreshing(false);
        alert(res.mensagem);
        return false;
      }

      setMain(res.principal);
      setSections(res.secoes);
      setRefreshing(false);

    } catch(err) {
      setRefreshing(false);
      alert(err.message);
    }
  }

  useEffect(() => {
    getHome();
  }, []);

  return (
    <ScrollView 
      style={styles.bgDark}
      refreshControl={
        <RefreshControl 
          tintColor={'#fff'}
          refreshing={refreshing}
          onRefresh={getHome}
        />
      }
    >
      <Header />
      <Hero mainMovie={main} />
      <View style={styles.menuHeader}>
        <ButtonVertical text='Minha Lista' icon='plus' />
        <Button 
          style={styles.playButton} 
          icon='play'
          mode='contained'
          color='#fff'
          uppercase={false}>
          <Text>Assistir</Text>
        </Button>
        <ButtonVertical text='Saiba Mais' icon='information-outline' />
      </View>
      <View style={styles.previewContainer}>
        <Title style={styles.previewTitle}>Prévias</Title>
        <PreviewList movieList={sections[0]} />
      </View>
      {sections.map((section, index) => (
        <Section key={index} movieSection={section} />
      ))}
    </ScrollView>
  )
}

export default Home;