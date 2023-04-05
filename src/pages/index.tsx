import Head from "next/head";
import axios, { Canceler } from "axios";
// import Image from "next/image";
// import styles from "@/styles/Home.module.css";
// import { Inter } from "next/font/google";
import Layout, { siteTitle } from "@/components/Layout";
import FilterBar from "@/components/FilterBar";
import { useState, useEffect } from "react";
import PetCard from "@/components/PetCard";
import { getPetsData } from "@/lib/pets";
import Pagination from "@/components/Pagination";
import { iPet, iPetsResult } from "@/lib/iPet";
import { BaseContext } from "next/dist/shared/lib/utils";

// const inter = Inter({ subsets: ["latin"] });
const baseURI = `${process.env.NEXT_PUBLIC_API_URI}api/search`;

export async function getServerSideProps(context:BaseContext) {

  const allPetsData = await getPetsData();
  
  return {
    props: {
      initialPets: allPetsData.results,
      resultsData: {
        total: allPetsData.total,
        pages: allPetsData.pages,
        size: allPetsData.size,
        offset: allPetsData.offset,
        count: allPetsData.count,
      }
    },
  };
}

type ResultsDataProps = {
  total:number,
  pages:number,
  size:number,
  offset:number,
  count:number
}

export default function Home(props: {initialPets:iPet[], resultsData:ResultsDataProps}) {
  const {initialPets, resultsData} = props
  // console.log(resultsData)
  const [petData, setPetData] = useState({
    petList: initialPets || null,
    pages: resultsData.pages || 0,
    total: resultsData.total || 0,
  });
  const [uriParams, setUriParams] = useState({
    currentPage: 1,
    sex: "all",
    queryText: "",
  });


  useEffect(() => {
    const { currentPage, sex, queryText } = uriParams;

    let fetchURI = `${baseURI}?breed=${queryText}`;

    if (sex !== "all") fetchURI += `&sex=${sex}`;
    if (currentPage !== 1) fetchURI += `&offset=${20 * (currentPage - 1)}`;


    let cancel: Canceler;

    axios
      .get(fetchURI, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {

        setPetData({
          petList: res.data.results,
          pages: res.data.pages,
          total: res.data.total,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    //Cancel Old requests if new requests are made. This way old data doesn't load if old request finishes after new request
    return () => cancel();
  }, [uriParams]);

  const { petList, pages, total } = petData;
  const { currentPage, sex, queryText } = uriParams;

  const handleSearchFilter = (newValue:string) => {
    setUriParams((prevState) => {
      return { ...prevState, queryText: newValue, currentPage: 1 };
    });
  };
  const handleSexFilterChange = (newValue:string) => {
    setUriParams((prevState) => {
      return { ...prevState, sex: newValue, currentPage: 1 };
    });
  };
  const handlePageChange = (newValue:number) => {
    setUriParams((prevState) => {
      return { ...prevState, currentPage: newValue };
    });
  };
  const handleFiltersReset = () => {
    setUriParams({
      currentPage: 1,
      sex: "all",
      queryText: "",
    });
  };

  const showAnimalList = () => {
    return petList.map((pet:iPet) => (
      <div key={pet._id} className="col-md-6 col-lg-4 col-xl-3">
        <PetCard pet={pet} />
      </div>
    ));
  };

  //For testing only
  // const printPetPlaceholders = () => {
  //   const pet = {
  //     imgs: ["https://placehold.co/750"],
  //     name: "test",
  //     sex: "male",
  //     breed: "Terrier",
  //     domain: "domain.com",
  //     petURI: "domain.com",
  //   };
  //   const pets = [];
  //   for (let index = 1; index < 13; index++) {
  //     pets.push(pet);
  //   }
  //   return pets.map((pet, i) => (
  //     <div key={i} className="col-md-6 col-lg-4 col-xl-3">
  //       <PetCard pet={pet} />
  //     </div>
  //   ));
  // };

  const noResultsTemplate = (
    <div className="col">
      <div className="card mb-4">
        <div className="card-body p-5 text-muted text-center ">
          <div className="h3 mb-3">
            Oh No! There are no results matching your search
          </div>
          <p>Maybe try a different keyword like {"Terrier"}</p>
        </div>
      </div>
    </div>
  );

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <FilterBar
                results={total}
                // queryText={queryText}
                onSearch={handleSearchFilter}
                sexValue={sex}
                onSexFilterChange={handleSexFilterChange}
                onFiltersReset={handleFiltersReset}
              />
            </div>
          </div>
          <div className="row">
            {/* {printPetPlaceholders()} */}
            {!petList && <div className="col-sm-12">Loading...</div>}

            {petList && showAnimalList()}

            {petList && petList.length < 1 && noResultsTemplate}
          </div>
          {pages > 1 && (
            <Pagination
              pages={pages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </main>
    </Layout>
  );
}
