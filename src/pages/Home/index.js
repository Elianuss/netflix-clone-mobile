import React from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Button, Title } from 'react-native-paper';

import Header from '../../components/Header';
import Hero from '../../components/Hero';
import ButtonVertical from '../../components/ButtonVertical';
import PreviewList from '../../components/PreviewList';
import Section from '../../components/Section';

import styles from './styles';

const Home = () => {
  return (
    <ScrollView style={styles.bgDark}>
      <Header />
      <Hero />
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
        <PreviewList />
      </View>
      {[1,2,3,4].map((section, index) => (
        <Section key={index} />
      ))}
    </ScrollView>
  )
}

export default Home;