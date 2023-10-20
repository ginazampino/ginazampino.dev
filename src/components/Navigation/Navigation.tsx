import Banner from '../Banner/Banner';
import styles from './Navigation.module.scss';

export default function Navigation() {
    return (
        <>
            <Banner
                active={true}
                tag="Launch Promo!"
                title="New"
                link="New"
                url="New"
            />
        </>
    );
}
