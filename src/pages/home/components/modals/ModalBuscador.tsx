"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../../../../app/globals.css";

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

interface ModalNotificacionesProps {
  user: User;
  onNext: () => void;
  onBack: () => void;
}

function ModalBuscador({ user, onNext, onBack }: ModalNotificacionesProps) {
  const [modal, setModal] = useState(false);
  const updateGuide = () => {
    const userId = user.id;
    fetch("http://localhost:4000/register/updateGuide", {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }), // Envía el ID del usuario al backend
    })
      .then((response) => response.json())
      .then((data) => {
        console.log({ userId: user.id });
        // Actualiza el estado o realiza cualquier otra acción necesaria
        console.log("Guide actualizado correctamente");
      })
      .catch((error) => {
        console.error("Error al actualizar el guide:", error);
      });
    setModal(false);
  };

  const handleNext = () => {
    onNext(); // Llama a la función onNext pasada como prop
  };

  useEffect(() => {
    if (user && !user.guide) {
      // Verifica si user.guide es false
      setModal(true);
    } else {
      setModal(false);
    }
  }, [user]);

  return (
    <>
      <div className="fixed w-[100vw] h-[100vh] top-0 right-0 left-0 bottom-0">
        <div className="fixed w-[100vw] h-[100vh] top-0 right-0 left-0 bottom-0 bg-neutral-400 bg-opacity-20"></div>
        <div className="relative top-[18%] left-[45%] translate-x-[-50%] translate-y-[-50%] bg-white max-w-[24rem] min-w-[300px] pr-7 pb-20 pl-7 rounded-md">
          <div className="flex justify-between border-b-2 border-b-gray-900 border-opacity-10">
            <h2 className="mb-3 pt-2">Buscador</h2>
            <FontAwesomeIcon icon={faXmark} className="mt-3 cursor-pointer" />
          </div>
          <p className="text-xs mt-5">
            Desde aquí puedes buscar entre miles de artículos disponibles.
            También tienes disponibles varios filtros de búsqueda y categorías
            para encontrar fácilmente lo que deseas.
          </p>

          <a className="absolute bottom-[20px] left-[30px] cursor-pointer">
            Atrás
          </a>
          <a
            className="absolute bottom-[20px] right-[20px] cursor-pointer"
            onClick={handleNext}
          >
            Siguiente{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-emerald-600 ml-2 cursor-pointer"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default ModalBuscador;
