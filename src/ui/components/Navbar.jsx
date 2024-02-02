import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Switch from '@mui/material/Switch';
import { setDarkMode } from '../../store/slices/pokemon';
import { logout } from '../../store/slices/auth';

export const Navbar = () => {

    const navigate = useNavigate();

    const darkMode = useSelector(state => state.pokemons.dark);
    const dispatch = useDispatch();
  
    const onDarkChange = () => {
        dispatch(setDarkMode());
        document.body.classList.toggle('dark-mode');
    };

    const onLogout = () => {
        if(darkMode)
            document.body.classList.toggle('dark-mode');
        dispatch( logout() );
        navigate('/', {
            replace: true       // this property is to avoid access to previous page if you loggin or loggout
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Pokedex
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/searchByName"
                    >
                        Search by Name
                    </NavLink>
                </div>

                <div className="navbar-nav">
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/searchByType"
                    >
                        Search by Type
                    </NavLink>
                </div>
            </div>


            <div>
                <ul className="navbar-nav ml-auto">
                   
                    <div className="navbar-brand" >
                        <Switch
                            checked = { darkMode }
                            onChange = { onDarkChange }
                        />
                        <span>Dark Mode</span>
                    </div>
                    <div>
                    <button
                        className="navbar-brand nav-item nav-link btn"
                        onClick={ onLogout }
                    >
                        Logout
                    </button>
                    </div>
                </ul>
            </div>
        </nav>
    )
}