import { FaWhatsapp, FaGithub, FaCode } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TentangPage(): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col">
      <Header title="Tentang - Jana Mesej Mesyuarat WhatsApp" />

      <main className="flex-grow container mx-auto py-8 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-center text-secondary mb-8">
            Tentang Jana Mesej WA
          </h1>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-primary mb-3 flex items-center">
                <FaWhatsapp className="mr-2" /> Apa itu Jana Mesej WA?
              </h2>
              <p className="text-gray-700">
                Jana Mesej WA adalah aplikasi web yang membolehkan pengguna menjana pelbagai jenis
                notis yang diformat dengan baik untuk dikongsi melalui WhatsApp. Aplikasi ini
                menyokong pembuatan notis mesyuarat, jemputan perkahwinan, dan pengumuman
                pendaftaran dengan format yang kemas dan profesional tanpa perlu mengetik format
                yang sama berulang kali.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">Ciri-ciri</h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Borang mudah untuk mengisi butiran mesyuarat</li>
                <li>Jana jemputan perkahwinan dengan format yang menarik</li>
                <li>Cipta notis pendaftaran untuk acara dan program</li>
                <li>Pratonton notis secara masa nyata</li>
                <li>Kongsi terus ke WhatsApp dengan satu klik</li>
                <li>Salin ke papan keratan untuk digunakan di mana-mana</li>
                <li>Pelbagai templat untuk pelbagai jenis notis</li>
                <li>Reka bentuk responsif untuk desktop dan telefon bimbit</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3 flex items-center">
                <FaCode className="mr-2" /> Teknologi
              </h2>
              <p className="text-gray-700 mb-3">
                Aplikasi ini dibina menggunakan teknologi web moden berikut:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>
                  <strong>Next.js</strong> - Framework React untuk pembangunan aplikasi web
                </li>
                <li>
                  <strong>TypeScript</strong> - Untuk keselamatan jenis dan penyelenggaraan kod yang
                  lebih baik
                </li>
                <li>
                  <strong>TailwindCSS</strong> - Untuk gaya dan reka bentuk responsif
                </li>
                <li>
                  <strong>React Icons</strong> - Untuk ikon UI
                </li>
                <li>
                  <strong>WhatsApp API</strong> - Untuk perkongsian terus ke WhatsApp
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3 flex items-center">
                <FaGithub className="mr-2" /> Sumber Terbuka
              </h2>
              <p className="text-gray-700">
                Jana Mesej WA adalah projek sumber terbuka. Anda boleh melihat kod sumber,
                melaporkan isu, atau menyumbang di GitHub:
              </p>
              <div className="mt-3">
                <a
                  href="https://github.com/Mustaffa96/jana-mesej-WA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors"
                >
                  <FaGithub className="mr-2" /> Lihat di GitHub
                </a>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3 flex items-center">
                <FaCode className="mr-2" /> Sokong Pembangun
              </h2>
              <p className="text-gray-700">
                Jika anda mendapati aplikasi ini berguna, anda boleh menyokong pembangun dengan
                membeli secawan kopi:
              </p>
              <div className="mt-3">
                <a
                  href="https://buymeacoffee.com/mustaffa88"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition-colors"
                >
                  ☕ Buy Me a Coffee
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
