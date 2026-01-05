import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ReservationInteractive from './components/ReservationInteractive';

export const metadata: Metadata = {
  title: 'Reserve Your Table - Kathmandu Tapas DC',
  description: 'Book your table at Kathmandu Tapas & Cocktails in Washington DC. Experience authentic Nepalese-American fusion cuisine with seamless online reservation system featuring table selection and special occasion planning.',
};

export default function ReservationSystemPage() {
  return (
    <>
      <Header />
      <ReservationInteractive />
    </>
  );
}