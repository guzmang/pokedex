import { Route, Routes } from 'react-router-dom';
import { PokemonHome } from '../pokemons/pages';
import { PokemonRouter } from '../pokemons/routes';

import { Navbar } from '../ui/components';

export const AppRouter = () => {
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