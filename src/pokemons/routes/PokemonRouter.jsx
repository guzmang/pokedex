import { Route, Routes } from 'react-router-dom';
import { PokemonSearchByName, PokemonHome, PokemonPage } from '../pages';

export const PokemonRouter = () => {
  return (
    <>
        <div className="container">
            <Routes>
                <Route path="searchByName" element={<PokemonSearchByName />} />
                <Route path="pokemon/:id" element={<PokemonPage />} />
                <Route path="/" element={ <PokemonHome />} />
            </Routes>
        </div>
    </>
  )
}