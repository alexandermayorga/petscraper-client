import Layout from "@/components/Layout";
import SexBadge from "@/components/SexBadge";
import { iPet } from "@/lib/iPet";
import { getAllPostIds, getPetData } from "@/lib/pets";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { formatDistance, formatRelative } from "date-fns";

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
            className="img-fluid mb-3 mb-sm-0"
          />
        </div>
        <div className="col-sm-7">
          <h1>{petData.name}</h1>
          <div className="fs-5">
            <SexBadge sex={petData.sex}></SexBadge>
          </div>
          <hr />
          <ul className="list-unstyled fs-4">
            <li>
              <strong>Age:</strong> {petData.age}
            </li>
            <li>
              <strong>Breed:</strong> {petData.breed}
            </li>
            <li>
              <strong>Added:</strong>{" "}
              {formatDistance(new Date(petData.createdAt), new Date(), {
                addSuffix: true,
              })}
            </li>
            <li>
              <strong>Last Updated:</strong>{" "}
              {formatRelative(new Date(petData.updatedAt), new Date())}
            </li>
          </ul>
          <div>
            <Link
              href={petData.petURI}
              className="btn btn-dark btn-lg"
              target="_blank"
            >
              <i className="bi bi-box-arrow-up-right me-1"></i> View Original
              Post
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
  if (params) petData = await getPetData(params.slug);

  return {
    props: {
      petData,
    },
  };
};

export default Pet;
