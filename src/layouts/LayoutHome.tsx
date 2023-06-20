"use client";
import FooterCopyright from "@/components/index/FooterCopyright";
import SearchBar from "@/pages/home/components/searchBar/SearchBar";
import SearchResultList from "@/pages/home/components/searchBar/SearchResultList";
import Footer from "@/components/index/Footer";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion, faBell } from "@fortawesome/free-solid-svg-icons";
import "../app/globals.css";

function LayoutHome({ children }: any) {
  const [results, setResults] = useState([]);

  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const notificationsDropdownRef = useRef(null);
  const accountDropdownRef = useRef(null);

  useEffect(() => {
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
  }, []);

  const toggleNotifications = () => {
    setIsNotificationsOpen((prevValue) => !prevValue);
  };

  const toggleAccount = () => {
    setIsAccountOpen((prevValue) => !prevValue);
  };
  return (
    <>
      <header>
        <div className="flex flex-row justify-around items-center mt-3">
          <img className="w-48" src="/logo.png" alt="treidi" />
          <div>
            <form
              action="http://localhost:4000/register/get"
              className="flex flex-col"
            >
              <div className="flex flex row">
                <SearchBar setResults={setResults} />
                <button className="cursor-pointer" type="submit">
                  <FontAwesomeIcon icon={faQuestion} />
                </button>
              </div>
              <SearchResultList results={results} />
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
      {children}
      <Footer />
    </>
  );
}

export default LayoutHome;
