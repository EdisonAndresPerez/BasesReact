import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../auth/context/AuthContext';

export const Navbar = () => {
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow-sm" style={{minHeight: '60px'}}>
            
            <Link 
                className="navbar-brand fw-bold fs-4 text-warning" 
                to="/"
                style={{
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                    e.target.style.transform = 'scale(1)';
                }}
            >
                🦸‍♂️ Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({ isActive }) => 
                            `nav-item nav-link fw-semibold px-3 py-2 mx-1 rounded ${
                                isActive ? 'text-warning bg-secondary' : 'text-light'
                            }`
                        }
                        to="/"
                        style={{
                            transition: 'all 0.3s ease',
                            textDecoration: 'none'
                        }}
                    >
                        🏠 Home
                    </NavLink>

                    <NavLink 
                        className={({ isActive }) => 
                            `nav-item nav-link fw-semibold px-3 py-2 mx-1 rounded ${
                                isActive ? 'text-warning bg-secondary' : 'text-light'
                            }`
                        }
                        to="/marvel"
                        style={{
                            transition: 'all 0.3s ease',
                            textDecoration: 'none'
                        }}
                    >
                        🕷️ Marvel
                    </NavLink>

                    <NavLink 
                        className={({ isActive }) => 
                            `nav-item nav-link fw-semibold px-3 py-2 mx-1 rounded ${
                                isActive ? 'text-warning bg-secondary' : 'text-light'
                            }`
                        }
                        to="/dc"
                        style={{
                            transition: 'all 0.3s ease',
                            textDecoration: 'none'
                        }}
                    >
                        🦇 DC
                    </NavLink>

                    <NavLink 
                        className={({ isActive }) => 
                            `nav-item nav-link fw-semibold px-3 py-2 mx-1 rounded ${
                                isActive ? 'text-warning bg-secondary' : 'text-light'
                            }`
                        }
                        to="/search"
                        style={{
                            transition: 'all 0.3s ease',
                            textDecoration: 'none'
                        }}
                    >
                        🔎 Buscar
                    </NavLink>
                    
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ms-auto align-items-center">
                    <li className="nav-item">
                        <span className="navbar-text text-light me-3 fw-bold">
                            👋 Bienvenido
                        </span>
                    </li>
                    <li className="nav-item">
                        <button 
                            className="btn btn-outline-danger btn-sm px-3 py-2 fw-bold border-2 shadow-sm" 
                            onClick={handleLogout}
                            style={{
                                transition: 'all 0.3s ease',
                                borderRadius: '8px'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.transform = 'scale(1.05)';
                                e.target.style.boxShadow = '0 4px 8px rgba(220, 53, 69, 0.3)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.transform = 'scale(1)';
                                e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                            }}
                        >
                            🚪 Logout
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}