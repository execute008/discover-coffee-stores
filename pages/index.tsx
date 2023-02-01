import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Banner from '@/components/banner'
import Card from '@/components/card';
import coffeeStores from '../data/coffee-stores.json';
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Store } from '@/models/store'
import { fetchCoffeeStores } from '@/service/coffee-stores'
import { useTrackLocation } from '@/hooks/use-track-location'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const getStaticProps: GetStaticProps<{ stores: Store[] }> = async (context) => {

  const stores = await fetchCoffeeStores(process.env.BASE_LAT_LNG ?? "51.95046,7.62123");

  return {
    props: {
      stores: stores,
    }
  }
}

export default function Home({ stores }: InferGetStaticPropsType<typeof getStaticProps>) {

  const {latLng, handleTrackLocation, locationErrorMsg, isFindingLocation} = useTrackLocation();
  
  
  console.log({latLng, locationErrorMsg});

  const handleOnBannerBtnClick = () => {
    handleTrackLocation();
  };

  return (
    <>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <Banner
            btnText={isFindingLocation ? "Locating..." : "View stores nearby"}
            handleOnClick={handleOnBannerBtnClick}
            errorMsg={locationErrorMsg}
          />
          <div className={styles.heroImage}>
            <Image src="/static/hero-image.png" width={700} height={400} alt="Coffee Connoisseur Hero Image" />
          </div>
        </div>

        {stores.length > 0 &&
          <>
            <h2 className={styles.heading2}>Münster Stores</h2>
            <div className={styles.cardLayout}>
              {stores.map((store) => {
                return <Card
                  key={store.place_id}
                  name={store.name}
                  photo={store.photos[0]}
                  href={`/coffee-store/${store.place_id}`}
                />
              })}
            </div>
          </>}
      </main>
    </>
  )
}