import { useState, useEffect } from 'react';

interface PrivacyPopupProps {
  // Optional delay before showing the popup (in milliseconds)
  delay?: number;
}

export default function PrivacyPopup({ delay = 500 }: PrivacyPopupProps): JSX.Element | null {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);

  useEffect(() => {
    // Check if the popup has been dismissed before
    const popupDismissed = localStorage.getItem('privacyPopupDismissed');

    if (!popupDismissed) {
      // Show popup after the specified delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [delay]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    // Store in localStorage so it doesn't show again
    localStorage.setItem('privacyPopupDismissed', 'true');
  };

  if (!isVisible || isDismissed) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-md mx-4 animate-fade-in">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-bold text-secondary">Notis Privasi</h3>
          <button
            onClick={handleDismiss}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Tutup"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="mb-4">
          <p className="text-gray-700 mb-2">
            Aplikasi Jana Mesej WA <strong>tidak menggunakan pangkalan data</strong> dan{' '}
            <strong>tidak menyimpan sebarang maklumat</strong> yang anda masukkan.
          </p>
          <p className="text-gray-700">
            Semua data yang dimasukkan hanya digunakan untuk menjana mesej dan tidak disimpan di
            mana-mana selepas anda meninggalkan laman ini.
          </p>
        </div>

        <div className="flex justify-end">
          <button onClick={handleDismiss} className="btn-primary">
            Saya Faham
          </button>
        </div>
      </div>
    </div>
  );
}
