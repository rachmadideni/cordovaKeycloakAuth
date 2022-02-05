import React, { useState } from "react";
import "./App.css";

function App() {
  const handleLogin = (evt) => {
    evt.preventDefault();
  };
  return (
    <div className="layout flex-col flex ml-auto mr-auto justify-center items-center w-full lg:w-2/3 md:w-3/5">
      <h1 className="font-bold text-2xl my-10 text-gray-500">Keycloak Login</h1>
      <form action="" className="mt-2 flex flex-col lg:w-1/2 w-8/12">
        <div className="flex flex-wrap items-stretch w-full relative h-15 bg-white items-center rounded mb-4 border-2 border-gray-300 rounded-md">
          <input
            type="text"
            className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative font-roboto text-xl outline-none rounded-md"
            placeholder="Username"
          />
        </div>
        <div className="flex flex-wrap items-stretch w-full relative h-15 bg-white items-center rounded mb-4 border-2 border-gray-300 rounded-md">
          <input
            type="password"
            className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 px-3 relative self-center font-roboto text-xl outline-none rounded-md"
            placeholder="Password"
          />
        </div>
        <button
          onClick={(evt) => handleLogin(evt)}
          className="bg-sky-700 py-4 text-center px-17 md:px-12 md:py-4 text-white rounded leading-tight text-xl md:text-base font-sans mt-4 mb-20"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default App;
