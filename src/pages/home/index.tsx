import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import ModalSequence from "./components/modals/ModalSequence";
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

  const fetchData = async () => {
    await fetch("http://localhost:4000/register/get", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!userData) {
    return (
      <div className="h-[100vh] w-[100vw] flex justify-center items-center flex-col">
        <div>
          <img src="/logo.png" alt="" />
        </div>
        <div className="p-4 rounded-md border-2 border-emerald-300">
          <h1 className="font-bold text-2xl text-green-500">
            Espere un momento estamos creando el perfil...
          </h1>
        </div>
      </div>
    );
  }
  const { user, guide, idGuide } = userData;
  const { id, fullName, email } = user;
  return <ModalSequence user={userData} />;
}
