import { useState, ChangeEvent, FormEvent } from 'react';
import { FaWhatsapp, FaCopy } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  formatRegistration,
  shareToWhatsApp,
  copyToClipboard,
  RegistrationData,
} from '../utils/noticeFormatter';

export default function Pendaftaran(): JSX.Element {
  const [formData, setFormData] = useState<RegistrationData>({
    title: '',
    subtitle: '',
    description: '',
    highlights: '',
    location: '',
    locationDetails: '',
    registrationLink: '',
    contacts: '',
    closingStatement: '',
  });

  const [generatedAnnouncement, setGeneratedAnnouncement] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGenerateAnnouncement = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const announcement = formatRegistration(formData);
    setGeneratedAnnouncement(announcement);
  };

  const handleShareToWhatsApp = (): void => {
    shareToWhatsApp(generatedAnnouncement);
  };

  const handleCopyToClipboard = async (): Promise<void> => {
    const success = await copyToClipboard(generatedAnnouncement);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header title="Hebahan Pendaftaran - Jana Mesej WA" />

      <main className="flex-grow container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center text-secondary mb-8">
          Jana Hebahan Pendaftaran WhatsApp
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-secondary">
              Masukkan Butiran Pendaftaran
            </h2>

            <form onSubmit={handleGenerateAnnouncement}>
              <div className="mb-4">
                <label htmlFor="title" className="form-label">
                  Tajuk Utama
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="cth: PASTI 2026 KINI DIBUKA!"
                  className="form-input"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subtitle" className="form-label">
                  Subtajuk
                </label>
                <input
                  type="text"
                  id="subtitle"
                  name="subtitle"
                  value={formData.subtitle}
                  onChange={handleChange}
                  placeholder="cth: Pendaftaran untuk Anak Anda yang Berumur 5 & 6 Tahun!"
                  className="form-input"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="description" className="form-label">
                  Keterangan
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="cth: Ilmu Dunia & Akhirat Bermula di Sini!"
                  className="form-input"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="highlights" className="form-label">
                  Kelebihan/Ciri Istimewa (satu baris untuk setiap item)
                </label>
                <textarea
                  id="highlights"
                  name="highlights"
                  value={formData.highlights}
                  onChange={handleChange}
                  placeholder="cth: Sistem Prestasi Murid PASTI (SPPM)\nJadual Pembelajaran Terancang & Menarik"
                  className="form-input min-h-[100px]"
                  required
                ></textarea>
              </div>

              <div className="mb-4">
                <label htmlFor="location" className="form-label">
                  Lokasi (Tajuk)
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="cth: Lokasi Strategik di Bandar Sri Damansara"
                  className="form-input"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="locationDetails" className="form-label">
                  Alamat Lengkap
                </label>
                <textarea
                  id="locationDetails"
                  name="locationDetails"
                  value={formData.locationDetails}
                  onChange={handleChange}
                  placeholder="cth: No 21-1, Jalan Cempaka SD 12/2, PJU 9, 52200 Kuala Lumpur"
                  className="form-input"
                  required
                ></textarea>
              </div>

              <div className="mb-4">
                <label htmlFor="registrationLink" className="form-label">
                  Pautan Pendaftaran
                </label>
                <input
                  type="url"
                  id="registrationLink"
                  name="registrationLink"
                  value={formData.registrationLink}
                  onChange={handleChange}
                  placeholder="cth: https://forms.gle/***************"
                  className="form-input"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="contacts" className="form-label">
                  Maklumat Hubungan (satu baris untuk setiap kontak)
                </label>
                <textarea
                  id="contacts"
                  name="contacts"
                  value={formData.contacts}
                  onChange={handleChange}
                  placeholder="cth: 012-3456789 (Ustazah ABC)\n019-8765432 (Ustazah DEF)"
                  className="form-input min-h-[80px]"
                  required
                ></textarea>
              </div>

              <div className="mb-4">
                <label htmlFor="closingStatement" className="form-label">
                  Penutup
                </label>
                <input
                  type="text"
                  id="closingStatement"
                  name="closingStatement"
                  value={formData.closingStatement}
                  onChange={handleChange}
                  placeholder="cth: PASTI – Pilihan Bijak Ibu Bapa Hebat!"
                  className="form-input"
                  required
                />
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center">
                Jana Hebahan Pendaftaran
              </button>
            </form>
          </div>

          {/* Preview Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-secondary">Pratonton & Kongsi</h2>

            {generatedAnnouncement ? (
              <div className="space-y-4">
                <div className="bg-gray-100 p-4 rounded-lg whitespace-pre-wrap text-sm font-mono h-64 overflow-y-auto">
                  {generatedAnnouncement}
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={handleShareToWhatsApp}
                    className="flex-1 flex items-center justify-center bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition-colors"
                  >
                    <FaWhatsapp className="mr-2" /> Kongsi ke WhatsApp
                  </button>

                  <button
                    onClick={handleCopyToClipboard}
                    className="flex items-center justify-center bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition-colors"
                  >
                    <FaCopy className="mr-2" /> {copied ? 'Disalin!' : 'Salin'}
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                <p>Hebahan pendaftaran akan dipaparkan di sini</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
