import { NavLink, Link } from "react-router-dom";
import './styles.css';

function Header() {

    return (
        <>
            <div style={{ display: 'flex', backgroundColor: 'blue', gap: '30px', justifyContent: 'center' }}>
                <NavLink to={'/'} className={({ isActive }) =>
                    isActive ? 'color' : 'no'
                }
                >Home</NavLink>

                <NavLink to={'/about'} className={({ isActive }) =>
                    isActive ? 'color' : 'no'
                }
                >About</NavLink>

                <Link to={'/contact'}

                >Contact</Link>
                {/* className={({ isActive }) =>
                    isActive ? 'color' : 'no' */}
                <NavLink to={'/github'} className={({ isActive }) =>
                    isActive ? 'color' : 'no'
                }
                >Github</NavLink>
            </div>

        </>
    )
}

export default Header;