import Head from 'next/head';
import Link from 'next/link';

interface HeaderProps {
  title?: string;
}

export default function Header({
  title = 'Jana Mesej Mesyuarat WhatsApp',
}: HeaderProps): JSX.Element {
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

      <header className="bg-secondary text-white shadow-md">
        <div className="container mx-auto py-4 px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold hover:text-primary transition-colors">
              Jana Mesej WA
            </Link>
            <nav>
              <ul className="flex space-x-4">
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
                  <Link href="/tentang" className="hover:text-primary transition-colors">
                    Tentang
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
