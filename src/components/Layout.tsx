import Head from "next/head";
// import Image from "next/image";
// import styles from "./layout.module.css";
// import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Footer from "./Footer";
// import Header from "./Header";
import HeaderRBS from "./HeaderRBS";

export const siteTitle = "The Rescue Park";

type LayoutProps = {
  children: React.ReactNode,
  home?: boolean
  cols?: number
  justify?: "start" | "end" | "center" | "between" | "around" | "evenly"
}


export default function Layout(props:LayoutProps) {
  const { children, home, cols, justify } = props;
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
      <HeaderRBS/>
      <div className="container mb-4">
        <div className={justify ? `row justify-content-${justify}` : "row"}>
          <div className={cols ? `col-sm-${cols}` : "col-sm-12"}>
            <main>{children}</main>
            {!home && (
              <Link href="/" className="btn btn-danger">← Back to home</Link>
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
