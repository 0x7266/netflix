import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarMenuButton from './NavbarMenuButton.jsx';
import Logo from '../assets/Logo.jsx';

export default function Navbar() {
  const [hidden, setHidden] = useState(false);

  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center gap-3 px-5 text-neutral-400">
      <div className="logo w-60">
        <Logo />
      </div>
      <div className="nav-links flex gap-4 text-lg font-semibold">
        <Link to="/">Home</Link>
        <Link to="/tvshows">Tv Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/latest">Latest</Link>
        <Link to="/mylist">My List</Link>
      </div>
      {/* Mobile menu, show/hide based on menu state */}
    </nav>
  );
}
