import { Route, Routes } from 'react-router-dom';

import { PokemonApp } from '../pages';

export const PokemonRouter = () => {
  return (
    <>
        <div className="container">
            <Routes>
                <Route path="/*" element={ <PokemonApp />} />
            </Routes>
        </div>
    </>
  )
}