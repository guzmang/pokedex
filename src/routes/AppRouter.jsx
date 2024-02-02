import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LoginPage } from '../auth/pages';
import { PokemonRouter } from '../pokemons/routes';

export const AppRouter = () => {

  const status = useSelector( state => state.auth.status );

  return (

    <Routes>
      {
          (status === 'authenticated')
           ? <Route path="/*" element={ <PokemonRouter /> } />
           : <Route path="/login" element={ <LoginPage /> } />
      }

      <Route path="/*" element={ <Navigate to="/login" /> } />
    </Routes>

  )
}