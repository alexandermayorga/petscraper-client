import AddressCard from "@/components/AddressCard";
import Layout, { siteTitle } from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Head from "next/head";
import Link from "next/link";

export default function Shelters() {
  return (
    <Layout>
      <Head>
        <title>{`Houston TX Shelters List | ${siteTitle}`}</title>
      </Head>
      <section>
        <PageHeader
          pageTitle={"Shelters"}
          pageLeadText={
            "Current list of Houston, TX shelters where the app is fetching data from"
          }
        ></PageHeader>

        <div className="row mb-4">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <AddressCard
              placeName={"Adopt A Rescued Friend, Inc"}
              address={"19418 Craigchester Ln"}
              city={"Spring"}
              state={"TX"}
              zip={77388}
              phone={"(832) 539-4004"}
              email={"info@aarfhouston.org"}
              domain={"aarfhouston.org"}
            ></AddressCard>

          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <AddressCard
              placeName={"Houston SPCA"}
              address={"7007 Old Katy Road"}
              city={"Houston"}
              state={"Texas"}
              zip={77024}
              phone={"(713) 869-SPCA (7722)"}
              email={"info@houstonspca.org"}
              domain={"houstonspca.org"}
            ></AddressCard>
          </div>
        </div>
      </section>
    </Layout>
  );
}
