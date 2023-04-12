import Layout from "@/components/Layout";
import SexBadge from "@/components/SexBadge";
import { iPet } from "@/lib/iPet";
import { getAllPostIds, getPetData } from "@/lib/pets";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

type PetProps = {
  petData: iPet;
};

const Pet = (props: PetProps) => {
  const { petData } = props;

  //   {
  //     _id: '642250b34e51c0069ae423c2',
  //     petId: '501040',
  //     petUUID: 'houstonspca.org-501040',
  //     domain: 'houstonspca.org',
  //     petURI: 'https://houstonspca.org/single-pet?pet=501040',
  //     imgs: [
  //       'https://houstonspca.org/wp-content/plugins/shelterbuddy-integration/images/501040/animal-image-430224.jpg'
  //     ],
  //     status: 'Active',
  //     createdAt: '2023-03-28T02:28:03.223Z',
  //     updatedAt: '2023-04-07T22:28:09.096Z',
  //     __v: 0,
  //     age: '5 months',
  //     breed: 'Labrador Retriever',
  //     name: 'Lexi',
  //     sex: 'Female'
  //   }

  return (
    <Layout>
      <div className="row mb-4">
        <div className="col-sm-5">
          <Image
            src={petData.imgs[0]}
            alt={`${petData.name} | ${petData.breed} | ${petData.age}`}
            width={376}
            height={376}
            className="img-fluid"
          />
        </div>
        <div className="col-sm-7">
          <h1>{petData.name}</h1>
          <div>
            <p>
              <SexBadge sex={petData.sex}></SexBadge>
              <br />
              Age: {petData.age}
              <br />
              Breed: {petData.breed}
              <br />
              Added: {formatDistance(new Date(petData.createdAt), new Date(), { addSuffix: true })}
              <br />
              Last Updated: {formatRelative(new Date(petData.updatedAt), new Date())}
            </p>
          </div>
          <div>
            <Link
              href={petData.petURI}
              className="btn btn-primary"
              target="_blank"
            >
              View Original Post
            </Link>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-sm-12">
          <div dangerouslySetInnerHTML={{ __html: petData.extraInfo }} />
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds();
  // console.log(paths)
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let petData;
  if(params) petData = await getPetData(params.slug);

  return {
    props: {
      petData,
    },
  };
};

export default Pet;
