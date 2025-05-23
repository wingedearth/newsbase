import './globals.scss';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Newsbase',
  description: 'A Next.js app with Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
