import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Simple & Easy</>,
    imageUrl: "img/undraw_monitor.svg",
    description: (
      <>
        Ease of use is at the core of Routex. A router with a small API surface
        that is easy to understand, yet very extensible. Few dependencies ensure
        for a painless experience
      </>
    ),
  },
  {
    title: <>Modern</>,
    imageUrl: "img/undraw_operating_system.svg",
    description: (
      <>
        A modern API, using JavaScript to it's full potential. Natively uses
        Promises and fully typed (TypeScript), it's the next generation of Node
        routers
      </>
    ),
  },
  {
    title: <>Tested</>,
    imageUrl: "img/undraw_code_review.svg",
    description: (
      <>
        With 100% code coverage, and close support for Express/Koa middlewares,
        it's ready for your next production app
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title="Routex" description="Modern Node Router">
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <div className={styles.titleContainer}>
            <img
              src={useBaseUrl("img/icon.svg")}
              className={styles.titleImage}
            />{" "}
            <h1 className={`hero__title ${styles.title}`}>
              {siteConfig.title}
            </h1>
          </div>
          <p className={`hero__subtitle ${styles.subtitle}`}>
            {siteConfig.tagline}
          </p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.button
              )}
              to={useBaseUrl("docs/introduction")}
            >
              Get Started
            </Link>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.button
              )}
              to={useBaseUrl("docs/packages/index")}
            >
              Packages
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
