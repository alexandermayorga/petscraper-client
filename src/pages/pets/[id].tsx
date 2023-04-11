import Layout from "@/components/Layout";
import { iPet } from "@/lib/iPet";
import { getAllPostIds, getPetData } from "@/lib/pets";
import { GetStaticPaths, GetStaticProps } from "next";

type PetProps = {
  petData: iPet;
};

const Pet = (props: PetProps) => {
  const { petData } = props;

  console.log(petData);
  return (
    <Layout>
      <div>
        {Object.entries(petData).map(([key, value]) => {
          return (
            <h4 key={key}>
              {key} : {value}
            </h4>
          );
        })}
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
  const petData = await getPetData(params.id);

  return {
    props: {
      petData,
    },
  };
};

export default Pet;
