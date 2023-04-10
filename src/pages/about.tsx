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
              Hi, my name is Alex and {"I'm"} a
              <span role="img" aria-label="laptop emoji" className="mx-2">
                👨🏻‍💻
              </span>
              web developer from
              <span role="img" aria-label="laptop emoji" className="mx-2">
                🇳🇮
              </span>
              Nicaragua currently living in Houston,TX.
            </p>
            <p>
              Before I started this project I was initially looking for ideas to
              help me practice my web dev skills. I wanted to do something that
              combined a topic that matter to me and that other people might
              share an interest on. {"I've"} always been a dog person and for a
              long time {"I've"} been wanting to adopt one but my current
              situation has not allowed for it (...yet).
            </p>
            <p>
              So with that in mind, whenever {"I've"} looked at shelter websites
              I noticed some of them were not the most user friendly. Hence, I
              thought on doing something for our furry friends
              <span role="img" aria-label="dog emoji" className="mx-2">
                🐶
              </span>{" "}
              and help them find a forever home
              <span role="img" aria-label="dog emoji" className="mx-2">
                😊
              </span>
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
                  <footer className="blockquote-footer text-right text-light mb-0">
                    taken from{" "}
                    <cite title="Source Title">
                      <a href="http://" className="text-light">
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
