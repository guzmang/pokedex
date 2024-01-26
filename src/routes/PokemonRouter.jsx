import { Route, Routes } from 'react-router-dom';

import { PokemonHome } from '../pages';

export const PokemonRouter = () => {
  return (
    <>
        <div className="container">
            <Routes>
                <Route path="/*" element={ <PokemonHome />} />
            </Routes>
        </div>
    </>
  )
}