<<<<<<< HEAD
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
=======
>>>>>>> development
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
=======
      <body>{children}</body>
    </html>
  );
}
>>>>>>> development
