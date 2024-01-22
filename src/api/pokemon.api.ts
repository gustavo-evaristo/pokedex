import axios from 'axios';

export async function findPokemon(name: string) {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

  return data;
}

export async function findPokemons(page: number) {
  const size = 15;

  const offset = (page - 1) * size;

  const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon', {
    params: {
      limit: size,
      offset,
    },
  });

  return data;
}

export async function findPokemonByUrl(url: string) {
  const { data } = await axios.get(url);

  return data;
}
