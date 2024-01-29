import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PokemonHome } from '../pokemons/pages';
import { PokemonRouter } from '../pokemons/routes';

import { Navbar } from '../ui/components';

export const AppRouter = () => {

  const darkMode = useSelector(state => state.pokemons.dark);

  return (
    <>
        <Navbar />
        <div className="container">
            <Routes>
                <Route path="/" element={ <PokemonHome />} />
                <Route path="/*" element={ <PokemonRouter />} />
            </Routes>
        </div>
    </>
  )
}