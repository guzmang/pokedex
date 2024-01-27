import { Route, Routes } from 'react-router-dom';
import { PokemonHome, PokemonPage } from '../pages';

export const PokemonRouter = () => {
  return (
    <>
        <div className="container">
            <Routes>
                <Route path="pokemon/:id" element={<PokemonPage />} />
                <Route path="/" element={ <PokemonHome />} />
            </Routes>
        </div>
    </>
  )
}