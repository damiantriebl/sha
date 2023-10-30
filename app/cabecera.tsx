import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/logo.webp'
const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logotipo */}
        <div>
          <Image src={Logo} alt="Logotipo" width={100} height={100} />
        </div>

        {/* Menú de navegación */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/crear-personajes">
                Crear Personajes
              </Link>
            </li>
            <li>
              <Link href="/comunidad">
                Comunidad
              </Link>
            </li>
            <li>
              <Link href="/historial">
                Historial
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
