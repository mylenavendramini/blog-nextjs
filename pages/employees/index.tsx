import Header from "../../components/header";
import { GetStaticProps } from "next";
import Link from "next/link";

const Empolyee = ({
  allData,
}: {
  allData: {
    id: number;
    name: string;
  }[];
}) => {
  return (
    <div>
      <Header />
      <h1>All employees:</h1>
      <ul>
        {allData.map(({ name, id }) => (
          <li key={id}>
            <Link href={`/employees/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Empolyee;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  return {
    props: {
      allData: data,
    },
  };
};
