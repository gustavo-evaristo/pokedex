export function translateType(type: string) {
  const types = {
    bug: 'Inseto',
    dark: 'Sombra',
    dragon: 'Dragão',
    electric: 'Elétrico',
    fairy: 'Fada',
    fighting: 'Lutador',
    fire: 'Fogo',
    flying: 'Voador',
    ghost: 'Fantasma',
    grass: 'Planta',
    ground: 'Terra',
    ice: 'Gelo',
    normal: 'Normal',
    poison: 'Veneno',
    psychic: 'Psíquico',
    rock: 'Pedra',
    steel: 'Metal',
    water: 'Água',
  };

  return types[type];
}
