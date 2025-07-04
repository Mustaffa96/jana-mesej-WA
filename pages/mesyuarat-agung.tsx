import { useState, ChangeEvent, FormEvent } from 'react';
import {
  FaWhatsapp,
  FaCopy,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaMoneyBillWave,
} from 'react-icons/fa';
import { MdSchedule } from 'react-icons/md';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { formatAGM, shareToWhatsApp, copyToClipboard, AGMData } from '../utils/noticeFormatter';

export default function MesyuaratAgung(): JSX.Element {
  const [formData, setFormData] = useState<AGMData>({
    organization: '',
    date: '',
    venue: '',
    fee: '',
    delegateCount: '',
    schedule: '',
    potluck: true,
    contactLink: '',
    contactName: '',
    contactEmail: '',
    motto: '',
    secretary: '',
  });

  const [generatedNotice, setGeneratedNotice] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value, type } = e.target as HTMLInputElement;

    // Handle checkbox separately
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleGenerateNotice = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const notice = formatAGM(formData);
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
      <Header title="Mesyuarat Agung - Jana Mesej WA" />

      <main className="flex-grow container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center text-secondary mb-8">
          Jana Notis Mesyuarat Agung Tahunan
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-secondary">
              Masukkan Butiran Mesyuarat Agung
            </h2>

            <form onSubmit={handleGenerateNotice}>
              <div className="mb-4">
                <label htmlFor="organization" className="form-label">
                  Nama Organisasi
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Contoh: Persatuan Dakwah Wanita"
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
                <label htmlFor="venue" className="form-label flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-primary" /> Lokasi
                </label>
                <input
                  type="text"
                  id="venue"
                  name="venue"
                  value={formData.venue}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Contoh: DEWAN SERI PERMAISURI, KUALA LUMPUR"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="fee" className="form-label flex items-center">
                  <FaMoneyBillWave className="mr-2 text-primary" /> Yuran
                </label>
                <input
                  type="text"
                  id="fee"
                  name="fee"
                  value={formData.fee}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Contoh: RM30"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="delegateCount" className="form-label flex items-center">
                  <FaUsers className="mr-2 text-primary" /> Bilangan Perwakilan
                </label>
                <input
                  type="text"
                  id="delegateCount"
                  name="delegateCount"
                  value={formData.delegateCount}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Contoh: 5 Orang setiap cawangan"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="schedule" className="form-label flex items-center">
                  <MdSchedule className="mr-2 text-primary" /> Aturcara
                </label>
                <textarea
                  id="schedule"
                  name="schedule"
                  value={formData.schedule}
                  onChange={handleChange}
                  className="form-input h-32"
                  placeholder="1.00 petang : Kehadiran & Pendaftaran\n1.30 petang :Solat Zohor Berjemaah\n2.15 petang : Ucapan Aluan Pengerusi Majlis\n2.45 petang : Mesyuarat Agung Bermula & Pemilihan Jawatankuasa\n3.30 petang : Ucapan Penutup & Ucapan Penangguhan\n4.00 petang : Penyampaian Cenderahati & Jamuan\n4.30 petang : Bersurai"
                  required
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">
                  *Masukkan setiap item aturcara pada baris baru
                </p>
              </div>

              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="potluck"
                  name="potluck"
                  checked={formData.potluck}
                  onChange={handleChange}
                  className="mr-2 h-4 w-4"
                />
                <label htmlFor="potluck" className="form-label mb-0">
                  Sertakan mesej pot luck
                </label>
              </div>

              <div className="mb-4">
                <label htmlFor="contactLink" className="form-label">
                  Pautan WhatsApp
                </label>
                <input
                  type="text"
                  id="contactLink"
                  name="contactLink"
                  value={formData.contactLink}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Contoh: http://wa.me/60123456789"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="contactName" className="form-label">
                  Nama Untuk Dihubungi
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Contoh: Nurul Aligator Bt Panda"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="contactEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Contoh: example@gmail.com"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="motto" className="form-label">
                  Motto/Slogan
                </label>
                <input
                  type="text"
                  id="motto"
                  name="motto"
                  value={formData.motto}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Contoh: Islam Memimpin,Wanita Sejahtera"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="secretary" className="form-label">
                  Nama Setiausaha
                </label>
                <input
                  type="text"
                  id="secretary"
                  name="secretary"
                  value={formData.secretary}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Contoh: Cik Nurul Aligator binti Panda"
                  required
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Jana Notis Mesyuarat Agung
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
                <p>Notis mesyuarat agung akan dipaparkan di sini</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
