import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import FindHome from "@/components/FindHome";
import AvailableCities from "@/components/AvailableCities";
import PropertySection from '@/components/PropertySection'
import { fetchData } from "@/utilities/fetchData";
import availablesCities from '@/datas/availablesCities'
import {properties} from '@/datas/properties'



export default function Home({propertyForRent,propertyForSale}) {
  return (
    <>
      <Head>
        <title>Dream Home</title>
        <meta name="description" content="find your dream place" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favaicon.png" />
      </Head>
        <Header></Header>
        <Banner></Banner>
        <FindHome></FindHome>
        <PropertySection properties={propertyForRent} title={'For Rent'} linkTo={'/search?purpose=for-rent'}></PropertySection>
        <PropertySection properties={propertyForSale} title={'For Sale'} linkTo={'/search?purpose=for-sale'}></PropertySection>
        <AvailableCities cities={availablesCities}></AvailableCities>
    </>
  );
}

export async function getStaticProps() {
  const hitsPerPage = '8'
  const propertyForRent = await fetchData("/properties/list", {
    purpose: "for-rent",
    hitsPerPage,
  });
  const propertyForSale = await fetchData("/properties/list", {
    purpose: "for-rent",
    hitsPerPage,
  });
  return {
    props: {
      propertyForRent: propertyForRent?.hits,
      propertyForSale:propertyForSale?.hits
    },
  };
}
