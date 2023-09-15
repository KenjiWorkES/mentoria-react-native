import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Text,
} from 'react-native';
import {
  Container
} from './styles';

// import Logo from '../../assets/images/logo.svg';

const Home = ({ route }) => {
  const navigation = useNavigation();

  return (
    <Container>
      <Text>
        Pokédex
      </Text>
    </Container>
  );
};

export default Home;
