import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import ExternalLink from "../components/extLink";

export default function Home({}) {
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
            Projects of mine:{" "}
            <ExternalLink href="https://interclip.app">Interclip</ExternalLink>,{" "}
            <ExternalLink href="https://github.com/filiptronicek/gh-sponsors-api">
              GitHub Sponsors API
            </ExternalLink>
            ,{" "}
            <ExternalLink href="https://github.com/filiptronicek/btc-widget">
              BTC widget
            </ExternalLink>{" "}
            and{" "}
            <ExternalLink href="https://github.com/filiptronicek?tab=repositories&type=source">
              many more
            </ExternalLink>
            !
          </li>
          <li>
            Certifications:{" "}
            <dfn title="Microsoft Technology Associate Python">MTA 98-381</dfn>,{" "}
            <dfn title="Microsoft Technology Associate JavaScript">
              MTA 98-382
            </dfn>
            ,{" "}
            <dfn title="Microsoft Technology Associate CSS and HTML">
              MTA 98-383
            </dfn>
            , <dfn title="Microsoft Azure Fundamentals">AZ-900</dfn>,{" "}
            <dfn title="Microsoft 365 Fundamentals">MS-900</dfn>,{" "}
            <dfn title="Microsoft Word Expert (Word and Word 2019)">MO-101</dfn>
            ,{" "}
            <dfn title="Microsoft Excel Expert (Word and Word 2019)">
              MO-201
            </dfn>
          </li>
          <li>
            Socials:{" "}
            <ExternalLink href="https://github.com/filiptronicek">
              GitHub
            </ExternalLink>
            ,{" "}
            <ExternalLink href="https://twitter.com/filiptronicek">
              Twitter
            </ExternalLink>
            ,{" "}
            <ExternalLink href="https://www.linkedin.com/in/filiptronicek/">
              LinkedIn
            </ExternalLink>
          </li>
          <li>
            Portfolio:{" "}
            <ExternalLink href="https://azurecup.cz">azurecup.cz</ExternalLink>,{" "}
            <ExternalLink href="https://phgnovinky.cz/">
              phgnovinky.cz
            </ExternalLink>
            ,{" "}
            <ExternalLink href="https://www.andrasko.cz/">
              andrasko.cz
            </ExternalLink>
            ,{" "}
            <ExternalLink href="https://gardenemergency.cz/">
              gardenemergency.cz
            </ExternalLink>
          </li>
          <li>
            Links:{" "}
            <ExternalLink href="https://thanks.trnck.dev">
              thanks page
            </ExternalLink>
            , <ExternalLink href="https://blog.trnck.dev">blog</ExternalLink>,{" "}
            <ExternalLink href="https://github.com/filiptronicek/trnck.dev">
              repo
            </ExternalLink>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
