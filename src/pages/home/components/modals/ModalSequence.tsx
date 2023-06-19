"use client";
import { useState, useEffect, useRef } from "react";
import Footer from "@/components/index/Footer";
import HeaderCoin from "@/components/index/HeaderCoin";
import Gallery from "@/components/index/Gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion, faBell } from "@fortawesome/free-solid-svg-icons";
import "../../../../app/globals.css";

// Importar los componentes de los modales
import ModalNotificaciones from "./ModalNotificaciones";
import ModalTreidis from "./ModalTreidis";
import ModalBuscador from "./ModalBuscador";
import ModalAgregarProducto from "./ModalAgregarProducto";
import ModalBienvenidoATreidi from "./ModalBienvenidoATreidi";

interface User {
  id: number;
  idGoogle: string;
  idFacebook: string;
  fullName: string;
  email: string;
  picture: string;
  token: string;
  guide?: boolean;
}

function ModalSequence({ user }: { user: User }) {
  const [currentModal, setCurrentModal] = useState(0);
  const modals = [
    ModalNotificaciones,
    ModalTreidis,
    ModalBuscador,
    ModalAgregarProducto,
    ModalBienvenidoATreidi,
  ];

  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const notificationsDropdownRef = useRef(null);
  const accountDropdownRef = useRef(null);

  useEffect(() => {
    if (user && !user.guide) {
      setCurrentModal(0);
    } else {
      setCurrentModal(-1);
    }
    const handleNotificationsClickOutside = (event: any) => {
      if (
        notificationsDropdownRef.current &&
        !(notificationsDropdownRef.current as HTMLElement).contains(
          event.target
        )
      ) {
        setIsNotificationsOpen(false);
      }
    };

    const handleAccountClickOutside = (event: any) => {
      if (
        accountDropdownRef.current &&
        !(accountDropdownRef.current as HTMLElement).contains(event.target)
      ) {
        setIsAccountOpen(false);
      }
    };

    document.addEventListener("mousedown", handleNotificationsClickOutside);
    document.addEventListener("mousedown", handleAccountClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleNotificationsClickOutside
      );
      document.removeEventListener("mousedown", handleAccountClickOutside);
    };
  }, [user]);

  const toggleNotifications = () => {
    setIsNotificationsOpen((prevValue) => !prevValue);
  };

  const toggleAccount = () => {
    setIsAccountOpen((prevValue) => !prevValue);
  };

  const handleNext = () => {
    setCurrentModal((prevModal) => prevModal + 1);
  };

  const handleBack = () => {
    setCurrentModal((prevModal) => prevModal - 1);
  };
  const CurrentModal = modals[currentModal];

  return (
    <>
      <header>
        <HeaderCoin />
        <div className="flex flex-row justify-around items-center mt-3">
          <img className="w-48" src="/logo.png" alt="treidi" />
          <div>
            <form action="http://localhost:4000/register/get">
              <input
                className="w-[30rem] border-2 p-1"
                type="text"
                name="buscador"
                placeholder="Buscar producto"
                id=""
              />
              <button className="cursor-pointer" type="submit">
                <FontAwesomeIcon icon={faQuestion} />
              </button>
            </form>
          </div>
          <div className="flex">
            <img className="inline-block w-9" src="/coin.png" alt="" />
            <a>
              <h1 className="inline-block mr-4">200K Treidis</h1>
            </a>
            <div className="mr-4 relative">
              <FontAwesomeIcon className="inline-block" icon={faBell} />
              <a onClick={toggleNotifications}>
                <h1 className="inline-block">Notificaciones</h1>
              </a>
              {isNotificationsOpen && (
                <div className="absolute top-10">
                  <ul className="rounded bg-white">
                    <li className="hover:bg-emerald-500 p-4 rounded hover:text-white">
                      Solicitudes
                    </li>
                    <li className="hover:bg-emerald-500 p-4 rounded hover:text-white">
                      Ofertas
                    </li>
                    <li className="hover:bg-emerald-500 p-4 rounded hover:text-white">
                      Mensajes
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="mr-4 relative">
              <a href="#" onClick={toggleAccount}>
                <h1 className="inline-block">Mi cuenta</h1>
              </a>
              {isAccountOpen && (
                <div className="absolute top-10">
                  <ul className="rounded bg-white ">
                    <li className="hover:bg-emerald-500 p-4 rounded hover:text-white">
                      Mi cuenta
                    </li>
                    <li className="hover:bg-emerald-500 p-4 rounded hover:text-white">
                      Mi perfil
                    </li>
                    <li className="hover:bg-emerald-500 p-4 rounded hover:text-white">
                      Mis productos
                    </li>
                    <li className="hover:bg-emerald-500 p-4 rounded hover:text-white">
                      Intercambios
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="mr-4">
              <a
                className="bg-gradient-to-b from-emerald-500 to-emerald-700 rounded p-2 text-white"
                href="#"
                onClick={toggleAccount}
              >
                <h1 className="inline-block">Agregar producto</h1>
              </a>
            </div>
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

      {currentModal !== -1 && (
        <>
          {/* Divs para renderizar cada modal */}
          <div id={`modal-${currentModal}`} className="relative">
            {currentModal >= 0 && currentModal <= 4 && CurrentModal && (
              <CurrentModal
                user={user}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}
          </div>
        </>
      )}
    </>
  );
}

export default ModalSequence;
