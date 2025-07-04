import { useState } from 'react';
import { FaCopy } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { copyToClipboard } from '../utils/noticeFormatter';

interface TemplateItem {
  id: string;
  name: string;
  description: string;
  template: string;
}

const templates: TemplateItem[] = [
  {
    id: 'formal',
    name: 'Formal',
    description: 'Format rasmi untuk mesyuarat profesional',
    template: `🔔 *NOTIS MESYUARAT*\n\n*Tajuk:* [TAJUK MESYUARAT]\n*Tarikh:* [TARIKH]\n*Masa:* [MASA]\n*Lokasi:* [LOKASI]\n\n*Agenda:*\n- [AGENDA 1]\n- [AGENDA 2]\n- [AGENDA 3]\n\nSila hadir tepat pada masa. Terima kasih!`,
  },
  {
    id: 'casual',
    name: 'Santai',
    description: 'Format santai untuk perbincangan tidak formal',
    template: `👋 *Jom Berbincang*\n\nHai semua!\n\nKita akan ada perbincangan tentang [TAJUK] pada:\n📅 [TARIKH]\n⏰ [MASA]\n📍 [LOKASI]\n\nPerkara yang akan dibincangkan:\n- [PERKARA 1]\n- [PERKARA 2]\n\nHarap semua dapat hadir ya! 😊`,
  },
  {
    id: 'urgent',
    name: 'Segera',
    description: 'Format untuk mesyuarat segera/kecemasan',
    template: `⚠️ *MESYUARAT SEGERA*\n\n*PERHATIAN:* Mesyuarat segera akan diadakan berkenaan [TAJUK]\n\n*Tarikh:* [TARIKH] (HARI INI/ESOK)\n*Masa:* [MASA]\n*Lokasi:* [LOKASI]\n\n*Agenda:*\n- [AGENDA UTAMA]\n\nKehadiran anda SANGAT DIPERLUKAN. Terima kasih.`,
  },
  {
    id: 'committee',
    name: 'Jawatankuasa',
    description: 'Format untuk mesyuarat jawatankuasa',
    template: `📋 *NOTIS MESYUARAT JAWATANKUASA*\n\n*Jawatankuasa:* [NAMA JAWATANKUASA]\n*Mesyuarat:* [TAJUK/NOMBOR MESYUARAT]\n*Tarikh:* [TARIKH]\n*Masa:* [MASA]\n*Lokasi:* [LOKASI]\n\n*Agenda:*\n1. Ucapan Pengerusi\n2. Pengesahan Minit Mesyuarat Lepas\n3. Perkara Berbangkit\n4. [AGENDA UTAMA]\n5. Hal-hal Lain\n\nSila bawa dokumen berkaitan. Terima kasih.`,
  },
  {
    id: 'registration',
    name: 'Pendaftaran',
    description: 'Format untuk hebahan pendaftaran',
    template: `🎉 *[TAJUK UTAMA]* 🎉\n🌟 *[SUBTAJUK]* 🌟\n\n📚 *[KETERANGAN]*\n\n💥 *Apa Yang Istimewa Bersama Kami?* 💥\n✅ [KELEBIHAN 1]\n✅ [KELEBIHAN 2]\n✅ [KELEBIHAN 3]\n✅ [KELEBIHAN 4]\n\n📍 *[LOKASI]*\n📌 [ALAMAT LENGKAP]\n\nPihak tuan/puan yang berminat boleh terus mendaftar link dibawah \n\n[PAUTAN PENDAFTARAN]\n\n📞 *Hubungi Kami Sekarang Untuk Maklumat Lanjut:*\n📲 [KONTAK 1]\n📲 [KONTAK 2]\n\n💚 *[PENUTUP]*`,
  },
  {
    id: 'wedding',
    name: 'Perkahwinan',
    description: 'Format untuk jemputan majlis perkahwinan',
    template: `‎ بِسْــــــــــــــــــمِ اﷲِالرَّحْمَنِ الرَّحِيم\n‎     السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n\n*UNDANGAN WALIMATULURUS*\n\n[NAMA TUAN RUMAH 1]\n     -------------\n[NAMA TUAN RUMAH 2]\n&\n[NAMA TUAN RUMAH 3]\n\nKami dengan penuh rasa hormat & berbesar hati menjemput Tuan/Puan/Encik/Cik sekeluarga untuk meraikan majlis perkahwinan dan persandingan anakanda² kami:\n\n👰🏻‍♀ [NAMA PENGANTIN PEREMPUAN]\n❤\n🤵🏻‍♂ [NAMA PENGANTIN LELAKI]\n\nyang akan berlangsung pada:\n\nTarikh: [TARIKH]\n\nTentatif:\n[MASA]: [AKTIVITI]\n\nTempat: [TEMPAT]\n[PAUTAN LOKASI]\n\nSemoga dengan kehadiran dan doa restu semua akan menyerikan lagi majlis kami dan diberkati oleh ALLAH SWT. Amin🫶🏻\n\nSebarang persoalan boleh hubungi:\n[NAMA 1]: [NO TELEFON 1]\n[NAMA 2]: [NO TELEFON 2]`,
  },
];

export default function TemplatPage(): JSX.Element {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyTemplate = async (id: string, template: string): Promise<void> => {
    const success = await copyToClipboard(template);
    if (success) {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header title="Templat Notis Mesyuarat - Jana Mesej WA" />

      <main className="flex-grow container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center text-secondary mb-8">
          Templat Notis Mesyuarat
        </h1>

        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Pilih salah satu templat di bawah untuk digunakan. Salin templat dan gantikan teks dalam
          [KURUNGAN] dengan maklumat mesyuarat anda.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {templates.map(template => (
            <div key={template.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-secondary text-white p-4">
                <h2 className="text-xl font-semibold">{template.name}</h2>
                <p className="text-sm opacity-90">{template.description}</p>
              </div>

              <div className="p-4">
                <pre className="bg-gray-100 p-4 rounded-lg whitespace-pre-wrap text-sm font-mono h-64 overflow-y-auto">
                  {template.template}
                </pre>

                <button
                  onClick={() => handleCopyTemplate(template.id, template.template)}
                  className="mt-4 flex items-center justify-center w-full bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition-colors"
                >
                  <FaCopy className="mr-2" />
                  {copiedId === template.id ? 'Disalin!' : 'Salin Templat'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
