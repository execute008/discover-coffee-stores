import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import coffeeStores from '@/data/coffee-stores.json';
import Image from "next/image";
import Head from "next/head";
import styles from '@/styles/coffee-stores.module.css';
import cls from 'classnames';
import { fetchCoffeeStores, fetchSingleStore } from "@/service/coffee-stores";
import { Store } from "@/models/store";
import PlacePhoto from "@/components/place_photo";

export const getStaticProps: GetStaticProps<{ store: Store }> = async (context) => {
    const store = await fetchSingleStore(context.params!.id as string);
    return {
        props: {
            store: store
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const stores = await fetchCoffeeStores(process.env.BASE_LAT_LNG ?? "51.95046,7.62123");
    return {
        paths: stores.map(store => {
            return { params: { id: store.place_id.toString() } };
        }),
        fallback: true
    }
}

export default function CoffeeStore({ store }: { store: Store }) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    const handleUpvoteButton = () => {
        console.log('handle upvote');
    }

    return (
        <div className={styles.layout}>
            <Head>
                <title>{store.name}</title>
            </Head>
            <div className={styles.container}>
                <div className={styles.col1}>
                    <div className={styles.backToHomeLink}>
                        <Link href="/">← Back to Home</Link>
                    </div>
                    <div className={styles.nameWrapper}>
                        <h1 className={styles.name}>{store.name}</h1>
                    </div>
                    {store.photos && store.photos.length > 0 &&
                        <PlacePhoto photo={store.photos[0]} name={store.name} width={600} height={360} />
                    }
                </div>
                <div className={cls('glass', styles.col2)}>
                    <div className={styles.iconWrapper}>
                        <Image src="/static/icons/places.svg" width={24} height={24} alt="Address" />
                        <p className={styles.text}>{store.vicinity}</p>
                    </div>
                     <div className={styles.iconWrapper}>
                        <Image src="/static/icons/openingCard.svg" width={24} height={24} alt="Neighbourhood"/>
                        <p className={styles.text}>{store.opening_hours.open_now ? "OPEN" : "CLOSED"}</p>
                    </div>
                    <div className={styles.iconWrapper}>
                        <Image src="/static/icons/star.svg" width={24} height={24} alt="Upvotes" />
                        <p className={styles.text}>1</p>
                    </div>

                    <button className={styles.upvoteButton} onClick={handleUpvoteButton}>Up vote</button>
                </div>
            </div>
        </div>
    );
}