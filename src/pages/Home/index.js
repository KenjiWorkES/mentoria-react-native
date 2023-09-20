import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text} from 'react-native';
import {Container, FlatList} from './styles';

import PokemonServices from '../../services/pokemon';

const Home = ({route}) => {
  const navigation = useNavigation();

  const [pokemonList, setPokemonList] = useState({results: []});

  useEffect(() => {
    const getPokemon = async () => {
      let pokes = await PokemonServices.getPokemon();
      setPokemonList(pokes);
    };

    getPokemon();
  }, []);

  return (
    <Container>
      <Text>Pokédex</Text>
      <FlatList
        data={pokemonList.results}
        renderItem={({item}) => <Text>{item.name}</Text>}
        keyExtractor={item => item.name}
      />
    </Container>
  );
};

export default Home;
