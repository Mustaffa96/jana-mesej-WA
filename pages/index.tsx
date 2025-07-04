import { useState, ChangeEvent, FormEvent } from 'react';
import { FaWhatsapp, FaCopy, FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  formatNotice,
  shareToWhatsApp,
  copyToClipboard,
  MeetingData,
} from '../utils/noticeFormatter';

export default function Home(): JSX.Element {
  const [formData, setFormData] = useState<MeetingData>({
    title: '',
    date: '',
    time: '',
    location: '',
    agenda: '',
  });

  const [generatedNotice, setGeneratedNotice] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGenerateNotice = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const notice = formatNotice(formData);
    setGeneratedNotice(notice);
  };

  const handleShareToWhatsApp = (): void => {
    shareToWhatsApp(generatedNotice);
  };

  const handleCopyToClipboard = async (): Promise<void> => {
    const success = await copyToClipboard(generatedNotice);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center text-secondary mb-8">
          Jana Notis Mesyuarat WhatsApp
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-secondary">
              Masukkan Butiran Mesyuarat
            </h2>

            <form onSubmit={handleGenerateNotice}>
              <div className="mb-4">
                <label htmlFor="title" className="form-label">
                  Tajuk Mesyuarat
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Contoh: Mesyuarat Agung Tahunan"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="date" className="form-label flex items-center">
                  <FaCalendarAlt className="mr-2 text-primary" /> Tarikh
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="time" className="form-label flex items-center">
                  <FaClock className="mr-2 text-primary" /> Masa
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="location" className="form-label flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-primary" /> Lokasi
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Contoh: Bilik Mesyuarat Utama"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="agenda" className="form-label">
                  Agenda
                </label>
                <textarea
                  id="agenda"
                  name="agenda"
                  value={formData.agenda}
                  onChange={handleChange}
                  className="form-input h-32"
                  placeholder="Masukkan setiap agenda pada baris baru"
                  required
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">
                  *Masukkan setiap agenda pada baris baru
                </p>
              </div>

              <button type="submit" className="btn-primary w-full">
                Jana Notis Mesyuarat
              </button>
            </form>
          </div>

          {/* Preview Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-secondary">Pratonton & Kongsi</h2>

            {generatedNotice ? (
              <div className="space-y-4">
                <div className="bg-gray-100 p-4 rounded-lg whitespace-pre-wrap text-sm font-mono h-64 overflow-y-auto">
                  {generatedNotice}
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
                <p>Notis mesyuarat akan dipaparkan di sini</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
