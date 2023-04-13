import Layout, { siteTitle } from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import Head from "next/head";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{`About and Contact | ${siteTitle}`}</title>
      </Head>
      {/* <section style={{ minHeight: "80vh", marginTop: "-1.5rem" }}> */}
      <section>
        <PageHeader
          pageTitle={"About"}
          pageLeadText={"Learn about this project"}
        ></PageHeader>

        <div className="row">
          <div className="col-sm-12 ">
            <p>
              Hi, my name is Alex Mayorga and {"I'm"} a
              <span role="img" aria-label="laptop emoji" className="mx-2">
                👨🏻‍💻
              </span>
              full stack web developer based in
              <span role="img" aria-label="pin emoji" className="mx-2">
                📍
              </span>
              Houston,TX.
            </p>
            <p>
              I started this project aiming to combine a topic that matter to
              me, something other people shared would an interest on, and my web
              dev skills. As I brainstormed on this I ended up thinking about
              dogs, adopting a pet, and local shelters. I remembered that when{" "}
              {"I've"} looked at shelter websites, some of them were not the
              most user friendly. I also {"didn't"} want to look at every local
              website shelter separately when browsing the web.
            </p>
            <p>
              So with that in mind, I thought on doing something that will help
              future pet owners with their search as well as helping our furry
              friends
              <span role="img" aria-label="dog emoji" className="ms-2 me-1">
                🐶
              </span>
              <span role="img" aria-label="cat emoji" className="me-2">
                🐱
              </span>
              find a forever home
              <span
                role="img"
                aria-label="happy face emoji"
                className="ms-2 me-1"
              >
                😊
              </span>
              <span role="img" aria-label="house emoji" className="me-1">
                🏡
              </span>
              . The {"website's"} goal is to centralize adoption information on
              available animals in Houston. Each animal profile will then
              redirect to the original post to get all adoption details.
            </p>
            <p>
              If you too are planning on owning a dog, cat, etc. I encourage you
              to adopt from a shelter instead of shopping/buying. You can search
              online about the many reasons why but below I list what I think is
              the most important one (
              <a href="https://www.greenmatters.com/p/why-adopt-dont-shop">
                link to article
              </a>
              ):
            </p>

            <div className="card mb-4 bg-warning bg-opacity-10">
              <div className="card-body">
                <blockquote className="mb-0">
                  <p>
                    There are so many reasons to adopt a dog rather than
                    purchase one from a breeder. Every year, an estimated{" "}
                    <strong>
                      1.5 million adoptable shelter dogs and cats are euthanized
                    </strong>{" "}
                    in the U.S., according to the ASPCA — that’s because the
                    shelters simply don’t have enough space and funding to
                    accommodate all the animals that are brought there.
                  </p>
                  <p>
                    Every time an animal is adopted, a space opens up in the
                    shelter or the rescue. So when you adopt a cat or dog, not
                    only are you saving that animal’s life, but you are also
                    opening up a space for another animal’s life to be saved.
                  </p>
                  <footer className="blockquote-footer text-right  mb-0">
                    taken from{" "}
                    <cite title="Source Title">
                      <a href="http://" className="">
                        Why Everyone Should “Adopt Don’t Shop”
                      </a>
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
