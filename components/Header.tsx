import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  title?: string;
}

export default function Header({
  title = 'Jana Mesej Mesyuarat WhatsApp',
}: HeaderProps): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking a link (for mobile)
  const closeMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  // Check if we're on mobile and update state
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Aplikasi untuk menjana notis mesyuarat dalam format WhatsApp"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-secondary text-white shadow-md relative z-50 dark:bg-gray-900">
        <div className="container mx-auto py-4 px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold hover:text-primary transition-colors">
              Jana Mesej WA
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex space-x-4 items-center">
                <li>
                  <Link href="/" className="hover:text-primary transition-colors">
                    Utama
                  </Link>
                </li>
                <li>
                  <Link href="/templat" className="hover:text-primary transition-colors">
                    Templat
                  </Link>
                </li>
                <li>
                  <Link href="/pendaftaran" className="hover:text-primary transition-colors">
                    Pendaftaran
                  </Link>
                </li>
                <li>
                  <Link href="/perkahwinan" className="hover:text-primary transition-colors">
                    Perkahwinan
                  </Link>
                </li>
                <li>
                  <Link href="/mesyuarat-agung" className="hover:text-primary transition-colors">
                    Mesyuarat Agung
                  </Link>
                </li>
                <li>
                  <Link href="/tentang" className="hover:text-primary transition-colors">
                    Tentang
                  </Link>
                </li>
                <li>
                  <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-full hover:bg-gray-700 transition-colors focus:outline-none"
                    aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                  >
                    {isDarkMode ? (
                      <FaSun className="h-5 w-5 text-yellow-300" />
                    ) : (
                      <FaMoon className="h-5 w-5 text-gray-300" />
                    )}
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-2">
              <ul className="flex flex-col space-y-3">
                <li>
                  <Link
                    href="/"
                    className="block hover:text-primary transition-colors py-1"
                    onClick={closeMenu}
                  >
                    Utama
                  </Link>
                </li>
                <li>
                  <Link
                    href="/templat"
                    className="block hover:text-primary transition-colors py-1"
                    onClick={closeMenu}
                  >
                    Templat
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pendaftaran"
                    className="block hover:text-primary transition-colors py-1"
                    onClick={closeMenu}
                  >
                    Pendaftaran
                  </Link>
                </li>
                <li>
                  <Link
                    href="/perkahwinan"
                    className="block hover:text-primary transition-colors py-1"
                    onClick={closeMenu}
                  >
                    Perkahwinan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mesyuarat-agung"
                    className="block hover:text-primary transition-colors py-1"
                    onClick={closeMenu}
                  >
                    Mesyuarat Agung
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tentang"
                    className="block hover:text-primary transition-colors py-1"
                    onClick={closeMenu}
                  >
                    Tentang
                  </Link>
                </li>
                <li className="mt-4">
                  <button
                    onClick={toggleDarkMode}
                    className="flex items-center w-full py-1 hover:text-primary transition-colors"
                    aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                  >
                    {isDarkMode ? (
                      <>
                        <FaSun className="h-5 w-5 text-yellow-300 mr-2" />
                        <span>Mod Cerah</span>
                      </>
                    ) : (
                      <>
                        <FaMoon className="h-5 w-5 text-gray-300 mr-2" />
                        <span>Mod Gelap</span>
                      </>
                    )}
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
