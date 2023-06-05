"use client";
import "./globals.css";

import Comenzar from "../components/index/buttons/Comenzar";
import Register from "../components/index/buttons/Register";
import SignIn from "../components/index/buttons/SignIn";
import HeaderCoin from "../components/index/HeaderCoin";
import Gallery from "../components/index/Gallery";
import Footer from "../components/index/Footer";
import { useState } from "react";

function Index() {
  const [login, setLogin] = useState(false);
  return login ? (
    <>
      <header>
        <HeaderCoin />
        <div className="flex justify-around items-center mt-3">
          <img className="w-48" src="/logo.png" alt="treidi" />
          <div>
            <Register />
            <SignIn />
          </div>
        </div>
      </header>
      <section className="bg-slate-200 pb-5">
        <div className="flex justify-center items-center  pt-12 pb-12">
          <div className="flex flex-col w-1/3">
            <h1 className="text-7xl">
              Intercambia tus{" "}
              <span className="text-emerald-600">libros y más...</span>
            </h1>
            <p className="w-2/3 mt-3">
              Treidi es la nueva plataforma digital para poder intercambiar y
              adquirir productos entre particulares de manera fácil y rápida
            </p>
            <Comenzar />
          </div>
          <img
            className="w-1/3"
            src="/index_section.png"
            alt="imagen regalos"
          />
        </div>
        <div className="flex flex-col justify-center w-auto items-start mx-auto ml-[16.8%]">
          <h1 className="text-2xl mt">Top Categorías</h1>
          <div>
            <button className="rounded p-1 w-32 h-9 mt-12 text-white bg-gradient-to-r from-emerald-500 to-emerald-700 mr-3">
              TODOS
            </button>
            <button className="rounded border-2 text-emerald-700 p-1 w-32 h-9 border-zinc-500 mr-3">
              LIBROS
            </button>
            <button className="rounded border-2 text-emerald-700 p-1 w-32 h-9 border-zinc-500 mr-3">
              ELECTRÓNICOS
            </button>
            <button className="rounded border-2 text-emerald-700 p-1 w-32 h-9 border-zinc-500 mr-3">
              CÓMPUTO
            </button>
            <button className="rounded border-2 text-emerald-700 p-1 w-32 h-9 border-zinc-500 mr-3">
              VIDEOJUEGOS
            </button>
            <button className="rounded border-2 text-emerald-700 p-1 w-32 h-9 border-zinc-500">
              HOGAR
            </button>
          </div>
        </div>
        <Gallery />
        <div className="flex justify-around shadow-lg shadow-black-500 rounded-md bg-white w-[30rem] mx-auto mt-[3rem] mb-[2rem] p-2">
          <div className="flex flex-col">
            <h1 className="text-2xl">¿Tienes alguna duda?</h1>
            <p className="mt-1">
              Consulta las preguntas frecuentes o contáctanos
            </p>
          </div>
          <img className="w-12" src="/interrogacion.png" alt="interrogacion" />
        </div>
      </section>
      <Footer />
    </>
  ) : (
    <>
      <header>
        <HeaderCoin />
        <div className="flex justify-around items-center mt-3">
          <img className="w-48" src="/logo.png" alt="treidi" />
          <div>
            <Register />
            <SignIn />
          </div>
        </div>
      </header>
      <section className="bg-slate-200 pb-5">
        <div className="flex justify-center items-center  pt-12 pb-12">
          <div className="flex flex-col w-1/3">
            <h1 className="text-7xl">
              Intercambia tus{" "}
              <span className="text-emerald-600">libros y más...</span>
            </h1>
            <p className="w-2/3 mt-3">
              Treidi es la nueva plataforma digital para poder intercambiar y
              adquirir productos entre particulares de manera fácil y rápida
            </p>
            <Comenzar />
          </div>
          <img
            className="w-1/3"
            src="/index_section.png"
            alt="imagen regalos"
          />
        </div>
        <div className="flex flex-col justify-center w-auto items-start mx-auto ml-[16.8%]">
          <h1 className="text-2xl mt">Top Categorías</h1>
          <div>
            <button className="rounded p-1 w-32 h-9 mt-12 text-white bg-gradient-to-r from-emerald-500 to-emerald-700 mr-3">
              TODOS
            </button>
            <button className="rounded border-2 text-emerald-700 p-1 w-32 h-9 border-zinc-500 mr-3">
              LIBROS
            </button>
            <button className="rounded border-2 text-emerald-700 p-1 w-32 h-9 border-zinc-500 mr-3">
              ELECTRÓNICOS
            </button>
            <button className="rounded border-2 text-emerald-700 p-1 w-32 h-9 border-zinc-500 mr-3">
              CÓMPUTO
            </button>
            <button className="rounded border-2 text-emerald-700 p-1 w-32 h-9 border-zinc-500 mr-3">
              VIDEOJUEGOS
            </button>
            <button className="rounded border-2 text-emerald-700 p-1 w-32 h-9 border-zinc-500">
              HOGAR
            </button>
          </div>
        </div>
        <Gallery />
        <div className="flex justify-around shadow-lg shadow-black-500 rounded-md bg-white w-[30rem] mx-auto mt-[3rem] mb-[2rem] p-2">
          <div className="flex flex-col">
            <h1 className="text-2xl">¿Tienes alguna duda?</h1>
            <p className="mt-1">
              Consulta las preguntas frecuentes o contáctanos
            </p>
          </div>
          <img className="w-12" src="/interrogacion.png" alt="interrogacion" />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Index;
