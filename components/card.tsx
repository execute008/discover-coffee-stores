import Link from 'next/link';
import styles from './card.module.css';
import cls from 'classnames';
import PlacePhoto from './place_photo';
import { Photo } from '@/models/store';

export default function Card({href, name, photo}:{href: string, name: string, photo?: Photo}) {
    return (
        <div className={cls('glass',styles.container)}>
            <Link href={href}>
                <div className={styles.cardHeaderWrapper}>
                    <h2 className={styles.cardHeader}>{name}</h2>
                </div>
                <div className={styles.cardImageWrapper}>
                    {photo && <PlacePhoto
                        className={styles.cardImage}
                        photo={photo}
                        width={260}
                        height={160}
                        name={name}
                    />}
                </div>
            </Link>
        </div>

    );
}