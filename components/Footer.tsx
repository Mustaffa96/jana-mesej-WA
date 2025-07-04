import { FaGithub, FaInstagram } from 'react-icons/fa';

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Jana Mesej Mesyuarat WhatsApp
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Aplikasi untuk menjana notis mesyuarat dalam format WhatsApp
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/Mustaffa96/jana-mesej-WA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-secondary transition-colors"
              aria-label="GitHub Repository"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.instagram.com/mustaffazakaria77/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E1306C] hover:text-[#C13584] transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
