import Link from 'next/link';

const Navbar = () => {
  return (
    <nav >
      <ul className='navbar'>
        <li><Link href="/" legacyBehavior><a>Accueil</a></Link></li>
        <li><Link href="/about" legacyBehavior><a>À propos</a></Link></li>
        <li><Link href="/projects" legacyBehavior><a>Projets</a></Link></li>
        <li><Link href="/Contact" legacyBehavior><a>Contact</a></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
