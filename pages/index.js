import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { AiOutlineBorder, AiOutlineCheck } from "react-icons/ai";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  const data = await res.json();
  return {
    props: { data },
  };
}

export default function Home({ data }) {
  const myData = data.filter((d) => d.userId === 1);

  const fetchData = myData.map((data) => (
    <li className="item" key={data.id}>
      <span className="box">
        <AiOutlineBorder />
        {data.completed && (
          <span className="check">
            <AiOutlineCheck />
          </span>
        )}
      </span>
      {data.title}
    </li>
  ));

  return (
    <div className="content hidden">
      <ul className="list">{fetchData}</ul>
    </div>
  );
}
