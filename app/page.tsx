import { auth } from '@/lib/auth';
import styles from './page.module.scss';
import { redirect } from 'next/dist/server/api-utils';

export default async function Home() {
    const session = await auth();
    // if (!session) redirect('/sign-in');
    if (!session) return <>Non sei loggato</>;

    return (
        <div className={styles.home}>
            <h1 className={styles.title}>Ciao, Lizzi!</h1>
            <p className={styles.text}>Questo è un esempio con SCSS.</p>
        </div>
    );
}
