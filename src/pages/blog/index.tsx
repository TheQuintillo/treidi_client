import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import ModalSequence from "../signin/components/modals/ModalSequence";
import ModalTreidis from "../signin/components/modals/ModalTreidis";
import ModalNotificaciones from "../signin/components/modals/ModalNotificaciones";
import { useEffect, useState } from "react";

export default function Page() {
  const [userData, setUserData] = useState(null);
  const [currentModal, setCurrentModal] = useState(1);
  const handleNext = () => {
    setCurrentModal((prevModal) => prevModal + 1);
  };

  const handleBack = () => {
    setCurrentModal((prevModal) => prevModal - 1);
  };
  useEffect(() => {
    fetch("http://localhost:4000/register/get", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  if (!userData) {
    return <div>Cargando...</div>;
  }
  const { user, guide, idGuide } = userData;
  const { id, fullName, email } = user;
  return <ModalSequence user={userData} />;
}
