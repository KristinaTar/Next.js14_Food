import './globals.css'

export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

// @ts-ignore
export default function RootLayout({ children}) {
  return (
    <html lang="en">
    <body>{children}</body>
    </html>
  );
}
