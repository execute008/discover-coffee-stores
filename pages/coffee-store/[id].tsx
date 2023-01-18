import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import coffeeStores from '@/data/coffee-stores.json';
import Image from "next/image";

export const getStaticProps: GetStaticProps<{store:any}> = async (context) =>  {
    return {
        props: {
            store: coffeeStores.find(store => {
                return store.id.toString() === context.params!.id as string;
            })
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: coffeeStores.map(store => {
            return { params : { id: store.id.toString()}};
        }),
        fallback: true
    }
}

export default function CoffeeStore({store}:any) {
    const router = useRouter();

    if(router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{store.name}</h1>
            <p>{store.address}</p>
            <Image src={store.imgUrl} alt={store.name} width={300} height={200}/>
            <Link href="/">Back to Home</Link>
        </div>
    );
}