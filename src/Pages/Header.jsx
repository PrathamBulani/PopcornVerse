import React from "react";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Header = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const res = await req.json();
      setData(res);
    };
    fetchData();
  }, []);

  return (
    <header className="max_width px-4 pb-10">
      <Navbar
      />
      <h1 className="text-5xl font-bold text-center ">Shows</h1>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-10">
        {data.map((item) => (
          <Card key={item.show.id} item={item} />
        ))}
      </section>
    </header>
  );
};

export default Header;