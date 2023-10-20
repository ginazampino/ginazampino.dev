import styles from './Banner.module.scss';

interface BannerProps {
    active: boolean;
    tag: string;
    title: string;
    link: string;
    url: string;
}

/* Banner: Promotion banner at the top of the page
 * ======================================================================== */

export default function Banner({ active, tag, title, link, url }: BannerProps) {
    return (
        <div className={styles.banner}>
            <div className={styles.banner_content}>
                <div className={styles.banner_tag}>{tag}</div>
                {title}
                <a href={url}>{link}</a>
            </div>
        </div>
    );
}
