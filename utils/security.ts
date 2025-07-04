/**
 * Security utilities for input validation and sanitization
 */

// Validate and sanitize text input
export const sanitizeText = (input: string): string => {
  if (!input) return '';

  // Remove potentially dangerous HTML/script tags
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

// Validate URL format
export const isValidUrl = (url: string): boolean => {
  if (!url) return false;

  try {
    const parsedUrl = new URL(url);
    return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:';
  } catch (e) {
    return false;
  }
};

// Validate WhatsApp sharing URL
export const validateWhatsAppUrl = (url: string): boolean => {
  if (!url) return false;

  try {
    const parsedUrl = new URL(url);
    return parsedUrl.hostname === 'api.whatsapp.com' || parsedUrl.hostname === 'wa.me';
  } catch (e) {
    return false;
  }
};

// Validate form input for meeting data
export const validateMeetingInput = (
  data: any
): { valid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};

  if (!data.title || data.title.trim() === '') {
    errors.title = 'Tajuk mesyuarat diperlukan';
  }

  if (!data.date) {
    errors.date = 'Tarikh mesyuarat diperlukan';
  }

  if (!data.time || data.time.trim() === '') {
    errors.time = 'Masa mesyuarat diperlukan';
  }

  if (!data.location || data.location.trim() === '') {
    errors.location = 'Lokasi mesyuarat diperlukan';
  }

  if (!data.agenda || data.agenda.trim() === '') {
    errors.agenda = 'Agenda mesyuarat diperlukan';
  }

  // If imageUrl is provided, validate it's a proper URL
  if (data.imageUrl && !isValidUrl(data.imageUrl)) {
    errors.imageUrl = 'URL imej tidak sah';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
};

// Rate limiting helper (simple in-memory implementation)
const rateLimits: Record<string, { count: number; resetTime: number }> = {};

export const checkRateLimit = (key: string, limit: number, windowMs: number): boolean => {
  const now = Date.now();
  const keyData = rateLimits[key];

  // If no previous record or window expired, create new record
  if (!keyData || now > keyData.resetTime) {
    rateLimits[key] = {
      count: 1,
      resetTime: now + windowMs,
    };
    return true;
  }

  // If within window but under limit, increment
  if (keyData.count < limit) {
    keyData.count++;
    return true;
  }

  // Rate limit exceeded
  return false;
};

// Clean up expired rate limits (call periodically)
export const cleanupRateLimits = (): void => {
  const now = Date.now();
  Object.keys(rateLimits).forEach(key => {
    if (rateLimits[key].resetTime < now) {
      delete rateLimits[key];
    }
  });
};
