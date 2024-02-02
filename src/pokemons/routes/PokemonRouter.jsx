import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui/components';
import { PokemonSearchByName, PokemonSearchByType, PokemonHome, PokemonPage } from '../pages';

export const PokemonRouter = () => {
  return (
    <>
        <Navbar />
        <div className="container">
            <Routes>
                <Route path="/" element={ <PokemonHome /> } />
                <Route path="searchByName" element={<PokemonSearchByName />} />
                <Route path="searchByType" element={<PokemonSearchByType />} />
                <Route path="pokemon/:id" element={<PokemonPage />} />
                <Route path="/*" element={ <Navigate to="/" /> } />
            </Routes>
        </div>
    </>
  )
}