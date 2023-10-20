import Image from 'next/image';
import styles from './page.module.scss';
import Navigation from '@/components/Navigation/Navigation';

export default function Home() {
    return (
        <>
            <Navigation />
            <main className={styles.home}></main>
        </>
    );
}
