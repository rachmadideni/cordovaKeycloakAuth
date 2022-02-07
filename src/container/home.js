import React from "react";
import { useLocalstorage } from "rooks";

const Home = () => {
  const [value, set, remove] = useLocalstorage("manual-token");
  return (
    <div className="layout flex-col flex ml-auto mr-auto justify-center items-center w-full lg:w-2/3 md:w-3/5">
      key token in storage is {value}
    </div>
  );
};

export default Home;
