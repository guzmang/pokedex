import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Switch from '@mui/material/Switch';
import { setDarkMode } from '../../store/slices/pokemon';

export const Navbar = () => {

    const darkMode = useSelector(state => state.pokemons.dark);
    const dispatch = useDispatch();
  
    const onDarkChange = () => {
        dispatch(setDarkMode());
        document.body.classList.toggle('dark-mode');
    };

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

            <div className="navbar-brand" >
                <Switch
                    checked = { darkMode }
                    onChange = { onDarkChange }
                />
                <span>Dark Mode</span>
            </div>
        </nav>
    )
}