import Head from "next/head";
// import Image from "next/image";
// import styles from "./layout.module.css";
// import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Footer from "./Footer";
import Header from "./Header";

export const siteTitle = "The Rescue Park";

type LayoutProps = {
  children: React.ReactNode,
  home?: boolean
}

export default function Layout(props:LayoutProps) {
  const { children, home } = props;
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Directory list of animal shelters in Houston, TX"
        />
        {/* <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        /> */}
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header/>
      <div className="container mb-3">
        <div className="row">
          <div className="col-sm-12">
            <main>{children}</main>
            {!home && (
              <Link href="/" className="btn btn-primary">← Back to home</Link>
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
