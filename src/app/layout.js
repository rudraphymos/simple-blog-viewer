import './globals.css';

export const metadata = {
  title: 'Simple Blog Viewer',
  description: 'A blog viewer built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-100">
          {children}
        </div>
      </body>
    </html>
  );
}
