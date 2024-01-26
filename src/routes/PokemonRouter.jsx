import { Route, Routes } from 'react-router-dom';

import { PokemonHome } from '../pages';
import { Navbar } from '../ui';

export const PokemonRouter = () => {
  return (
    <>
        <Navbar />
        <div className="container">
            <Routes>
                <Route path="/*" element={ <PokemonHome />} />
            </Routes>
        </div>
    </>
  )
}