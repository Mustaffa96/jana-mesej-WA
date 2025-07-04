import { useState, ChangeEvent, FormEvent } from 'react';
import { FaWhatsapp, FaCopy } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  formatWeddingInvitation,
  shareToWhatsApp,
  copyToClipboard,
  WeddingInvitationData,
} from '../utils/noticeFormatter';

export default function Perkahwinan(): JSX.Element {
  const [formData, setFormData] = useState<WeddingInvitationData>({
    bismillah: true,
    salam: true,
    title: 'UNDANGAN WALIMATULURUS',
    hosts: '',
    brideNames: '',
    groomNames: '',
    date: '',
    time: '11:00AM-4:00PM: Jamuan Makan',
    venue: '',
    venueLink: '',
    contacts: '',
    closingStatement:
      'Semoga dengan kehadiran dan doa restu semua akan menyerikan lagi majlis kami dan diberkati oleh ALLAH SWT. Amin🫶🏻',
  });

  const [generatedInvitation, setGeneratedInvitation] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;

    if (name === 'bismillah' || name === 'salam') {
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

  const handleGenerateInvitation = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const invitation = formatWeddingInvitation(formData);
    setGeneratedInvitation(invitation);
  };

  const handleShareToWhatsApp = (): void => {
    shareToWhatsApp(generatedInvitation);
  };

  const handleCopyToClipboard = async (): Promise<void> => {
    const success = await copyToClipboard(generatedInvitation);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header title="Jemputan Perkahwinan - Jana Mesej WA" />

      <main className="flex-grow container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center text-secondary mb-8">
          Jana Jemputan Perkahwinan WhatsApp
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-secondary">Masukkan Butiran Jemputan</h2>

            <form onSubmit={handleGenerateInvitation}>
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="bismillah"
                  name="bismillah"
                  checked={formData.bismillah}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="bismillah" className="form-label cursor-pointer">
                  Sertakan Bismillah
                </label>
              </div>

              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="salam"
                  name="salam"
                  checked={formData.salam}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="salam" className="form-label cursor-pointer">
                  Sertakan Salam
                </label>
              </div>

              <div className="mb-4">
                <label htmlFor="title" className="form-label">
                  Tajuk Undangan
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="cth: UNDANGAN WALIMATULURUS"
                  className="form-input"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="hosts" className="form-label">
                  Tuan Rumah/Penganjur (satu baris untuk setiap nama)
                </label>
                <textarea
                  id="hosts"
                  name="hosts"
                  value={formData.hosts}
                  onChange={handleChange}
                  placeholder="cth: NURUL ABC binti DEF(Ibu)\n     -------------\nMOHD GHI bin JKL (Ayah)\n&\nMNO binti PQR"
                  className="form-input min-h-[100px]"
                  required
                ></textarea>
              </div>

              <div className="mb-4">
                <label htmlFor="brideNames" className="form-label">
                  Nama Pengantin Perempuan (satu baris untuk setiap nama)
                </label>
                <textarea
                  id="brideNames"
                  name="brideNames"
                  value={formData.brideNames}
                  onChange={handleChange}
                  placeholder="cth: NUR ABC binti MOHD DEF"
                  className="form-input"
                  required
                ></textarea>
              </div>

              <div className="mb-4">
                <label htmlFor="groomNames" className="form-label">
                  Nama Pengantin Lelaki (satu baris untuk setiap nama)
                </label>
                <textarea
                  id="groomNames"
                  name="groomNames"
                  value={formData.groomNames}
                  onChange={handleChange}
                  placeholder="cth: MUHAMMAD GHI bin ABD JKL"
                  className="form-input"
                  required
                ></textarea>
              </div>

              <div className="mb-4">
                <label htmlFor="date" className="form-label">
                  Tarikh
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
                <label htmlFor="time" className="form-label">
                  Masa/Tentatif
                </label>
                <textarea
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  placeholder="cth: 11:00AM-4:00PM: Jamuan Makan"
                  className="form-input"
                  required
                ></textarea>
              </div>

              <div className="mb-4">
                <label htmlFor="venue" className="form-label">
                  Tempat
                </label>
                <input
                  type="text"
                  id="venue"
                  name="venue"
                  value={formData.venue}
                  onChange={handleChange}
                  placeholder="cth: Inapan Bakawali Homestay"
                  className="form-input"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="venueLink" className="form-label">
                  Pautan Lokasi (opsyenal)
                </label>
                <input
                  type="text"
                  id="venueLink"
                  name="venueLink"
                  value={formData.venueLink}
                  onChange={handleChange}
                  placeholder="cth: https://g.co/kgs/xxxxxxx"
                  className="form-input"
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
                  placeholder="cth: Ibu (Abc): +60 12-3456789\nBapa (Def): +60 19-8765432\nAdik (ghi): +60 13-245 6789"
                  className="form-input min-h-[80px]"
                  required
                ></textarea>
              </div>

              <div className="mb-4">
                <label htmlFor="closingStatement" className="form-label">
                  Penutup
                </label>
                <textarea
                  id="closingStatement"
                  name="closingStatement"
                  value={formData.closingStatement}
                  onChange={handleChange}
                  placeholder="cth: Semoga dengan kehadiran dan doa restu semua akan menyerikan lagi majlis kami dan diberkati oleh ALLAH SWT. Amin🫶🏻"
                  className="form-input min-h-[80px]"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center">
                Jana Jemputan Perkahwinan
              </button>
            </form>
          </div>

          {/* Preview Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-secondary">Pratonton & Kongsi</h2>

            {generatedInvitation ? (
              <div className="space-y-4">
                <div className="bg-gray-100 p-4 rounded-lg whitespace-pre-wrap text-sm font-mono h-96 overflow-y-auto">
                  {generatedInvitation}
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
              <div className="flex flex-col items-center justify-center h-96 text-gray-400">
                <p>Jemputan perkahwinan akan dipaparkan di sini</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
