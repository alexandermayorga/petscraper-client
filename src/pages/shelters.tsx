import Layout, { siteTitle } from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";

export default function Shelters() {
  return (
    <Layout>
      <Head>
        <title>{`Houston TX Shelters List | ${siteTitle}`}</title>
      </Head>
      <section>
        <div className="jumbotron jumbotron-fluid bg-primary text-light">
          <h1 className="display-4">Shelters</h1>
          <p className="lead">
            Current list of Houston, TX shelters where the app is fetching data
            from
          </p>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card mb-4">
              <div className="card-body">
                <address>
                  <strong>Adopt A Rescued Friend, Inc</strong>
                  <br />
                  19418 Craigchester Ln
                  <br />
                  Spring, TX 77388
                  <br />
                  <abbr title="Phone">
                    <i className="fa fa-phone-square" aria-hidden="true"></i>
                  </abbr>{" "}
                  (832) 539-4004
                  <br />
                  <abbr title="Email">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </abbr>{" "}
                  <Link href="mailto:info@aarfhouston.org">info@aarfhouston.org</Link>
                  <div className="shelterNfo__website">
                    <i className="fa fa-globe" aria-hidden="true"></i>{" "}
                    <a href="https://www.aarfhouston.org/">aarfhouston.org</a>
                  </div>
                </address>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card mb-4">
              <div className="card-body">
                <address>
                  <strong>Houston SPCA</strong>
                  <br />
                  7007 Old Katy Road
                  <br />
                  Houston, Texas 77024
                  <br />
                  <abbr title="Phone">
                    <i className="fa fa-phone-square" aria-hidden="true"></i>
                  </abbr>{" "}
                  (713) 869-SPCA (7722)
                  <br />
                  <abbr title="Email">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </abbr>{" "}
                  <Link href="mailto:info@houstonspca.org">info@houstonspca.org</Link>
                  <div className="shelterNfo__website">
                    <i className="fa fa-globe" aria-hidden="true"></i>{" "}
                    <a href="https://www.houstonspca.org/">houstonspca.org</a>
                  </div>
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
