/**
 * Meeting data interface
 */
export interface MeetingData {
  title: string;
  date: string;
  time: string;
  location: string;
  agenda: string;
  imageUrl?: string; // Optional field for poster/image URL
}

/**
 * Annual General Meeting (AGM) data interface
 */
export interface AGMData {
  organization: string;
  date: string;
  venue: string;
  fee: string;
  delegateCount: string;
  schedule: string;
  potluck: boolean;
  contactLink: string;
  contactName: string;
  contactEmail: string;
  motto: string;
  secretary: string;
}

/**
 * Registration data interface
 */
export interface RegistrationData {
  title: string;
  subtitle: string;
  description: string;
  highlights: string;
  location: string;
  locationDetails: string;
  registrationLink: string;
  contacts: string;
  closingStatement: string;
}

/**
 * Wedding invitation data interface
 */
export interface WeddingInvitationData {
  bismillah: boolean;
  salam: boolean;
  title: string;
  hosts: string;
  brideNames: string;
  groomNames: string;
  date: string;
  time: string;
  venue: string;
  venueLink: string;
  contacts: string;
  closingStatement: string;
}

/**
 * Format meeting notice for WhatsApp
 * @param {MeetingData} meetingData - Meeting details
 * @returns {string} - Formatted notice text
 */
export const formatNotice = (meetingData: MeetingData): string => {
  const { title, date, time, location, agenda } = meetingData;

  // Format the date to Malaysian format (DD/MM/YYYY)
  const formattedDate = date
    ? new Date(date).toLocaleDateString('ms-MY', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
    : '';

  // Format agenda items as bullet points
  const formattedAgenda = agenda
    .split('\n')
    .filter(item => item.trim() !== '')
    .map(item => `- ${item.trim()}`)
    .join('\n');

  // Using a more widely supported emoji (bell) instead of speaker
  let noticeText =
    `🔉 *NOTIS MESYUARAT*\n\n` +
    `*Tajuk:* ${title}\n` +
    `*Tarikh:* ${formattedDate}\n` +
    `*Masa:* ${time}\n` +
    `*Lokasi:* ${location}\n` +
    `*Agenda:*\n${formattedAgenda}\n\n` +
    `Sila hadir tepat pada masa. Terima kasih!`;

  return noticeText;
};

/**
 * Share text content to WhatsApp
 * @param {string} text - Text to share
 */
export const shareToWhatsApp = (text: string): void => {
  // First convert emoji to their Unicode representation
  // Then encode the entire text for URL
  const encodedText = encodeURIComponent(text);

  // Use the WhatsApp API with the encoded text
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedText}`;

  // Open WhatsApp in a new tab
  if (typeof window !== 'undefined') {
    window.open(whatsappUrl, '_blank');
  }
};

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} - Success status
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  if (typeof navigator === 'undefined') {
    return false;
  }

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy text: ', err);
    return false;
  }
};

/**
 * Format time for display
 * @param {string} timeString - Time in HH:MM format
 * @returns {string} - Formatted time
 */
export const formatTime = (timeString: string): string => {
  if (!timeString) return '';

  try {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;

    return `${formattedHour}:${minutes} ${ampm}`;
  } catch (err) {
    return timeString;
  }
};

/**
 * Format registration announcement for WhatsApp
 * @param {RegistrationData} registrationData - Registration details
 * @returns {string} - Formatted registration announcement text
 */
export const formatRegistration = (registrationData: RegistrationData): string => {
  const {
    title,
    subtitle,
    description,
    highlights,
    location,
    locationDetails,
    registrationLink,
    contacts,
    closingStatement,
  } = registrationData;

  // Format highlights as bullet points
  const formattedHighlights = highlights
    .split('\n')
    .filter(item => item.trim() !== '')
    .map(item => `✅ ${item.trim()}`)
    .join('\n');

  // Format contacts as separate lines
  const formattedContacts = contacts
    .split('\n')
    .filter(item => item.trim() !== '')
    .map(item => `📲 ${item.trim()}`)
    .join('\n');

  // Build the registration announcement text
  const registrationText = `🎉 *${title}* 🎉
🌟 *${subtitle}* 🌟

📚 *${description}*

💥 *Apa Yang Istimewa Bersama Kami?* 💥
${formattedHighlights}

📍 *${location}*
📌 ${locationDetails}

${
  registrationLink
    ? `Pihak tuan/puan yang berminat boleh terus mendaftar link dibawah 

${registrationLink}

`
    : ''
}
📞 *Hubungi Kami Sekarang Untuk Maklumat Lanjut:*
${formattedContacts}

💚 *${closingStatement}*`;

  return registrationText;
};

/**
 * Format wedding invitation for WhatsApp
 * @param {WeddingInvitationData} weddingData - Wedding invitation details
 * @returns {string} - Formatted wedding invitation text
 */
/**
 * Format Annual General Meeting (AGM) notice for WhatsApp
 * @param {AGMData} agmData - AGM details
 * @returns {string} - Formatted AGM notice text
 */
export const formatAGM = (agmData: AGMData): string => {
  const {
    organization,
    date,
    venue,
    fee,
    delegateCount,
    schedule,
    potluck,
    contactLink,
    contactName,
    contactEmail,
    motto,
    secretary,
  } = agmData;

  // Format the date to Malaysian format (DD/MM/YYYY)
  const formattedDate = date
    ? new Date(date).toLocaleDateString('ms-MY', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    : '';

  // Format schedule as separate lines
  const formattedSchedule = schedule
    .split('\n')
    .filter(item => item.trim() !== '')
    .join('\n');

  // Build the AGM notice text
  let agmText = `${organization} (Rasmi)\nTarikh: ${formattedDate}\n\nالسلام عليكم ورحمة الله وبركاته.\n\nMEMO:\n*NOTIS MESYUARAT AGUNG TAHUNAN ${organization} SESI ${new Date(date).getFullYear()}/${new Date(date).getFullYear() + 1}*\n\n1. Dimaklumkan Mesyuarat Agung akan diadakan pada ketetapan berikut:\n\n📅 : *${formattedDate} (${['Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu'][new Date(date).getDay()]})*\n🏢 : *${venue}*\n`;

  // Add schedule
  agmText += `⏰: *${formattedSchedule}*\n`;

  // Add fee if provided
  if (fee) {
    agmText += `*Yuran : ${fee}*\n`;
  }

  // Add delegate count if provided
  if (delegateCount) {
    agmText += `*Perwakilan : ${delegateCount}*\n\n`;
  }

  // Add potluck message if enabled
  if (potluck) {
    agmText += `\n*Digalakkan semua Muslimat untuk membawa makanan untuk berkongsi juadah secara pot luck. ✨*\n\n`;
  }

  // Add contact information
  agmText += `Sebarang urusan boleh rujuk kepada ${contactLink}\n(${contactName})\n\nTerima Kasih💐💐\n\n*_${motto}_*\n\n${secretary}\n*Setiausaha ${organization}*`;

  // Add email if provided
  if (contactEmail) {
    agmText += `\nEmail: ${contactEmail}`;
  }

  return agmText;
};

export const formatWeddingInvitation = (weddingData: WeddingInvitationData): string => {
  const {
    bismillah,
    salam,
    title,
    hosts,
    brideNames,
    groomNames,
    date,
    time,
    venue,
    venueLink,
    contacts,
    closingStatement,
  } = weddingData;

  // Format the date to Malaysian format (DD/MM/YYYY)
  const formattedDate = date
    ? new Date(date).toLocaleDateString('ms-MY', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
    : '';

  // Format hosts as separate lines
  const formattedHosts = hosts
    .split('\n')
    .filter(item => item.trim() !== '')
    .join('\n');

  // Format contacts as separate lines
  const formattedContacts = contacts
    .split('\n')
    .filter(item => item.trim() !== '')
    .map(item => item.trim())
    .join('\n');

  // Format bride and groom names
  const formattedBrideNames = brideNames
    .split('\n')
    .filter(item => item.trim() !== '')
    .map((item, index) => (index === 0 ? `👰🏻‍♀ ${item.trim()}` : item.trim()))
    .join('\n');

  const formattedGroomNames = groomNames
    .split('\n')
    .filter(item => item.trim() !== '')
    .map((item, index) => (index === 0 ? `🤵🏻‍♂ ${item.trim()}` : item.trim()))
    .join('\n');

  // Build the wedding invitation text
  let invitationText = '';

  // Add bismillah if selected
  if (bismillah) {
    invitationText += `‎ بِسْــــــــــــــــــمِ اﷲِالرَّحْمَنِ الرَّحِيم\n`;
  }

  // Add salam if selected
  if (salam) {
    invitationText += `‎     السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n\n`;
  }

  // Add title
  invitationText += `*${title}*\n\n`;

  // Add hosts
  invitationText += `*${formattedHosts}*\n\n`;

  // Add invitation text
  invitationText += `Kami dengan penuh rasa hormat & berbesar hati menjemput Tuan/Puan/Encik/Cik sekeluarga untuk meraikan majlis perkahwinan dan persandingan anakanda² kami:\n\n`;

  // Add bride and groom names
  invitationText += `*${formattedBrideNames}*\n❤\n*${formattedGroomNames}*\n\n`;

  // Add date and time
  invitationText += `yang akan berlangsung pada:\n\n`;
  invitationText += `*Tarikh*: ${formattedDate}\n\n`;
  invitationText += `*Tentatif*:\n${time}\n\n`;

  // Add venue
  invitationText += `*Tempat*: ${venue}\n`;
  if (venueLink) {
    invitationText += `${venueLink}\n`;
  }

  // Add closing statement
  invitationText += `\n${closingStatement}\n\n`;

  // Add contacts
  invitationText += `Sebarang persoalan boleh hubungi:\n*${formattedContacts}*`;

  return invitationText;
};
