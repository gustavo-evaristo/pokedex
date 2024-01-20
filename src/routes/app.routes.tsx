import { Route, Routes } from 'react-router-dom';
import { PokemonDetails } from '../pages/PokemonDetails';
import { Pokemons } from '../pages/Pokemons';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Pokemons />} />
      <Route path="/:id" element={<PokemonDetails />} />
    </Routes>
  );
}
