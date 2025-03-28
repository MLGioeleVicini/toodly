import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import styles from './layout.module.scss'; // Usa moduli SCSS

const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Il mio sito Next.js',
    description: 'Benvenuto nel mio sito con Next.js!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='it'>
            <body className={roboto.className}>
                <div className={styles.container}>
                    <header className={styles.header}>
                        <h1>Il Mio Sito</h1>
                    </header>

                    <main className={styles.main}>{children}</main>

                    <footer className={styles.footer}>
                        <p>© {new Date().getFullYear()} - Tutti i diritti riservati</p>
                    </footer>
                </div>
            </body>
        </html>
    );
}
