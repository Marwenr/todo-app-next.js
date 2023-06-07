import React from "react";
import { AiOutlineBorder, AiOutlineCheck } from "react-icons/ai";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  const data = await res.json();
  return {
    props: { data },
  };
}

const completed = ({ data }) => {
  const myData = data.filter((d) => d.userId === 1 && d.completed);

  const fetchData = myData.map((data) => (
    <li className="item" key={data.id}>
      <span className="box">
        <AiOutlineBorder />
        <span className="check">
          <AiOutlineCheck />
        </span>
      </span>
      {data.title}
    </li>
  ));

  return (
    <div className="content scroll">
      <ul className="list">
        {fetchData}
      </ul>
    </div>
  );
};

export default completed;
