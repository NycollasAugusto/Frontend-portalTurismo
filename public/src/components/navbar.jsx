import React, { useState, useEffect } from 'react';
import { GiDragonBalls, GiAura, GiEnergyShield } from 'react-icons/gi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsAuthenticated(!!user);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    window.location.href = '/';
  };

  const linkClass = `
    relative text-white font-semibold tracking-wide text-lg flex items-center gap-2
    transition-all duration-300 
    before:absolute before:-bottom-1 before:left-0 before:w-full before:h-1
    before:bg-yellow-400 before:rounded-full before:opacity-0 before:blur-md
    before:transition-opacity before:duration-500
    hover:text-yellow-300 hover:before:opacity-80
    transform hover:scale-105 animate-pulse-slow
  `;

  const menuLinks = (
    <>
      <a href="/" className={linkClass}><GiDragonBalls />Home</a>
      <a href="/about" className={linkClass}><GiEnergyShield />Sobre</a>
      <a href="/service" className={linkClass}><GiAura />Personagens</a>
      <a href="/contact" className={linkClass}><GiEnergyShield />Contato</a>
      {isAuthenticated ? (
        <>
          <a href="/profile" className={linkClass}><GiAura />Perfil</a>
          <button
            onClick={handleLogout}
            className="relative text-red-400 font-semibold text-lg transition-transform transform hover:scale-110 hover:text-red-600"
          >
            Sair
          </button>
        </>
      ) : (
        <a href="/login" className="relative text-white font-semibold text-lg transition-transform transform hover:scale-110 hover:text-yellow-600">Login</a>
      )}
    </>
  );

  return (
    <nav className="w-full bg-gradient-to-r from-yellow-600 via-orange-700 to-red-800 py-3 px-6 shadow-2xl fixed top-0 left-0 z-50 font-dbz select-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a
          href="/"
          className="text-4xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.9)] 
          hover:text-yellow-400 hover:drop-shadow-[0_0_20px_rgba(255,255,150,0.9)]
          animate-glow-pulse transition-all duration-300"
        >
          ⚡ DRAGON BALL
        </a>

        <div className="hidden lg:flex space-x-10">
          {menuLinks}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none" aria-label="Abrir menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 animate-pulse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-gradient-to-r from-red-900 via-orange-700 to-yellow-600 p-5 transition-max-height duration-700 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col space-y-6 text-center">
          {menuLinks}
        </div>
      </div>

      {/* CSS Animations Inline */}
      <style>{`
        @keyframes glow-pulse {
          0%, 100% {
            text-shadow: 0 0 6px #fff, 0 0 10px #fffb00, 0 0 20px #fbbf24, 0 0 30px #fbbf24;
          }
          50% {
            text-shadow: 0 0 10px #fff, 0 0 15px #fffb00, 0 0 30px #f59e0b, 0 0 40px #f59e0b;
          }
        }
        .animate-glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
            filter: drop-shadow(0 0 6px rgba(251, 191, 36, 0.7));
          }
          50% {
            opacity: 0.7;
            filter: drop-shadow(0 0 14px rgba(251, 191, 36, 1));
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite ease-in-out;
        }
        
      `}</style>
    </nav>
  );
};

export default Navbar;
