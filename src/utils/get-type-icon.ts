interface Output {
  primary: string;
  secondary: string;
}

export function getTypeIcon(type: string): Output {
  const icons = {
    bug: {
      primary: '/svg/types/bug.svg',
      secondary: '/svg/types/bug-light.svg',
    },
    dark: {
      primary: '/svg/types/dark.svg',
      secondary: '/svg/types/dark-light.svg',
    },
    dragon: {
      primary: '/svg/types/dragon.svg',
      secondary: '/svg/types/dragon-light.svg',
    },
    electric: {
      primary: '/svg/types/electric.svg',
      secondary: '/svg/types/electric-light.svg',
    },
    fairy: {
      primary: '/svg/types/fairy.svg',
      secondary: '/svg/types/fairy-light.svg',
    },
    fighting: {
      primary: '/svg/types/fighting.svg',
      secondary: '/svg/types/fighting-light.svg',
    },
    fire: {
      primary: '/svg/types/fire.svg',
      secondary: '/svg/types/fire-light.svg',
    },
    flying: {
      primary: '/svg/types/flying.svg',
      secondary: '/svg/types/flying-light.svg',
    },
    ghost: {
      primary: '/svg/types/ghost.svg',
      secondary: '/svg/types/ghost-light.svg',
    },
    grass: {
      primary: '/svg/types/grass.svg',
      secondary: '/svg/types/grass-light.svg',
    },
    ground: {
      primary: '/svg/types/ground.svg',
      secondary: '/svg/types/ground-light.svg',
    },
    ice: {
      primary: '/svg/types/ice.svg',
      secondary: '/svg/types/ice-light.svg',
    },
    normal: {
      primary: '/svg/types/normal.svg',
      secondary: '/svg/types/normal-light.svg',
    },
    poison: {
      primary: '/svg/types/poison.svg',
      secondary: '/svg/types/poison-light.svg',
    },
    psychic: {
      primary: '/svg/types/psychic.svg',
      secondary: '/svg/types/psychic-light.svg',
    },
    rock: {
      primary: '/svg/types/rock.svg',
      secondary: '/svg/types/rock-light.svg',
    },
    steel: {
      primary: '/svg/types/steel.svg',
      secondary: '/svg/types/steel-light.svg',
    },
    water: {
      primary: '/svg/types/water.svg',
      secondary: '/svg/types/water-light.svg',
    },
  };

  return icons[type];
}
