import Image from 'next/image';
import Link from 'next/link';
import styles from './card.module.css';

export default function Card(props: any) {
    return (
        <div className={styles.container}>
            <Link href={props.href}>
                <div className={styles.cardHeaderWrapper}>
                    <h2 className={styles.cardHeader}>{props.name}</h2>
                </div>
                <div className={styles.cardImageWrapper}>
                    <Image
                        className={styles.cardImage}
                        src={props.imgUrl}
                        width={260}
                        height={160}
                        alt={props.name}
                    />
                </div>
            </Link>
        </div>

    );
}