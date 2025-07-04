import {
  formatNotice,
  formatTime,
  formatRegistration,
  formatWeddingInvitation,
} from '../../utils/noticeFormatter';
import '@testing-library/jest-dom';
// Jest is automatically available in the global scope

describe('noticeFormatter', () => {
  describe('formatNotice', () => {
    it('should format meeting notice correctly', () => {
      const meetingData = {
        title: 'Test Meeting',
        date: '2023-10-15',
        time: '10:00',
        location: 'Test Location',
        agenda: 'Item 1\nItem 2\nItem 3',
      };

      const result = formatNotice(meetingData);

      expect(result).toContain('🔉 *NOTIS MESYUARAT*');
      expect(result).toContain('*Tajuk:* Test Meeting');
      expect(result).toContain('*Lokasi:* Test Location');
      expect(result).toContain('- Item 1');
      expect(result).toContain('- Item 2');
      expect(result).toContain('- Item 3');
    });
  });

  describe('formatTime', () => {
    it('should format time correctly', () => {
      expect(formatTime('10:30')).toBe('10:30 AM');
      expect(formatTime('14:45')).toBe('2:45 PM');
      expect(formatTime('')).toBe('');
    });
  });

  describe('formatRegistration', () => {
    it('should format registration announcement correctly', () => {
      const registrationData = {
        title: 'Test Registration',
        subtitle: 'Test Subtitle',
        description: 'Test Description',
        highlights: 'Highlight 1\nHighlight 2',
        location: 'Test Location',
        locationDetails: 'Location Details',
        registrationLink: 'https://example.com',
        contacts: 'Contact 1\nContact 2',
        closingStatement: 'Thank you',
      };

      const result = formatRegistration(registrationData);

      expect(result).toContain('🎉 *Test Registration*');
      expect(result).toContain('🌟 *Test Subtitle*');
      expect(result).toContain('📚 *Test Description*');
      expect(result).toContain('✅ Highlight 1');
      expect(result).toContain('✅ Highlight 2');
      expect(result).toContain('📍 *Test Location*');
      expect(result).toContain('📌 Location Details');
      expect(result).toContain('https://example.com');
      expect(result).toContain('📲 Contact 1');
      expect(result).toContain('📲 Contact 2');
      expect(result).toContain('💚 *Thank you*');
    });
  });

  describe('formatWeddingInvitation', () => {
    it('should format wedding invitation correctly', () => {
      const weddingData = {
        bismillah: true,
        salam: true,
        title: 'Wedding Invitation',
        hosts: 'Host 1\nHost 2',
        brideNames: 'Bride Name',
        groomNames: 'Groom Name',
        date: '2023-10-15',
        time: 'Time details',
        venue: 'Venue Name',
        venueLink: 'https://maps.example.com',
        contacts: 'Contact 1\nContact 2',
        closingStatement: 'Thank you',
      };

      const result = formatWeddingInvitation(weddingData);

      expect(result).toContain('بِسْــــــــــــــــــمِ اﷲِالرَّحْمَنِ الرَّحِيم');
      expect(result).toContain('السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ');
      expect(result).toContain('*Wedding Invitation*');
      expect(result).toContain('*Host 1\nHost 2*');
      expect(result).toContain('👰🏻‍♀ Bride Name');
      expect(result).toContain('🤵🏻‍♂ Groom Name');
      expect(result).toContain('*Tempat*: Venue Name');
      expect(result).toContain('https://maps.example.com');
      expect(result).toContain('Thank you');
      expect(result).toContain('*Contact 1\nContact 2*');
    });
  });
});
