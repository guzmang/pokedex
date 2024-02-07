import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/slices/auth';
import { useGetTokenMutation } from '../../store/apis/pokemonApi';

export const LoginPage = () => {

    const [getToken, { isLoading, isError, data }] = useGetTokenMutation();
    const darkMode = useSelector(state => state.pokemons.dark);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onLogin = async() => {
        if(darkMode)
            document.body.classList.toggle('dark-mode');
        const { data } = await getToken();
        dispatch( login(data.token) );
        navigate('/', {
           replace: true    // this property is to avoid access to previous page if you loggin or loggout
        });
    }

    return (
        <div className="container mt-5">
        <h1>Login</h1>
        <hr />

        <button 
            className="btn btn-primary"
            onClick={ onLogin }
        >
            Login
        </button>

        </div>
    )
}
