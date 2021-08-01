import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import ExternalLink from "../components/extLink";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <ul>
          <li>
            Technologies I use:{" "}
            <ExternalLink href="https://reactjs.org/">react.js</ExternalLink>,{" "}
            {` `}
            <ExternalLink href="https://nextjs.org/">
              next.js
            </ExternalLink>, {` `}
            <ExternalLink href="https://reactnative.dev/">
              react native
            </ExternalLink>
            , {` `}
            <ExternalLink href="https://php.net/">php</ExternalLink>, {` `}
            <ExternalLink href="https://www.cloudflare.com/">
              cloudflare
            </ExternalLink>
            , {` `}
            <ExternalLink href="https://www.typescriptlang.org/">
              typescript
            </ExternalLink>{" "}
            , {` `}
            <ExternalLink href="https://tailwindcss.com/">
              tailwindcss
            </ExternalLink>{" "}
            {` `}
          </li>
          <li>
            Projects:{" "}
            <ExternalLink href="https://interclip.app">Interclip</ExternalLink>, {" "}
            <ExternalLink href="https://github.com/filiptronicek/gh-sponsors-api">GitHub Sponsors API</ExternalLink>, {" "}
            <ExternalLink href="https://github.com/filiptronicek/btc-widget">BTC widget</ExternalLink>{" "} and <ExternalLink href="https://github.com/filiptronicek?tab=repositories&type=source">many more</ExternalLink>!
          </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
