import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { GetStaticProps } from "next";
import Link from "next/link";

import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";
import { getSortedEmployeesData } from "../lib/employees";
// import { getSortedInfoData } from "../lib/info";

export default function Home({
  allPostsData,
  allEmployeesData,
  allInfoData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
  allEmployeesData: {
    date: string;
    title: string;
    id: string;
  }[];
  allInfoData: {
    name: string;
    email: string;
    phone: string;
    id: number;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Bringing flavor to your days, one dish at a time.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Employees</h2>
        <ul className={utilStyles.list}>
          {allEmployeesData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/employees/${id}`}>{title}</Link>
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
export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  const allEmployeesData = getSortedEmployeesData();
  // const allInfoData = getSortedInfoData();

  return {
    props: {
      allPostsData,
      allEmployeesData,
      // allInfoData,
    },
  };
};
