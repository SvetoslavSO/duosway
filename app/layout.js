import "./globals.css";

export const metadata = {
  title: 'DUO SWAY',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className="">
        {children}
      </body>
    </html>
  );
}

