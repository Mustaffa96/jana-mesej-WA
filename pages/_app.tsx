import '../styles/globals.css';
import type { AppProps } from 'next/app';
import PrivacyPopup from '../components/PrivacyPopup';
import AccessibilityHelper from '../components/AccessibilityHelper';
import { useEffect, useState } from 'react';
import { ThemeProvider } from '../context/ThemeContext';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  // Use client-side only rendering for the popup to avoid hydration issues
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeProvider>
      <Component {...pageProps} />
      {mounted && (
        <>
          <PrivacyPopup />
          <AccessibilityHelper />
        </>
      )}
    </ThemeProvider>
  );
}

export default MyApp;
