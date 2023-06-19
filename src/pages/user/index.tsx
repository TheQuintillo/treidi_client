import LayoutSignIn from "@/layouts/LayoutSignIn";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Index() {
  const [error, setError] = useState("");
  const [user, setUser] = useState<any>(null);

  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const form = event.target;

    const { nombre, apellidos, email, genero } = Object.fromEntries(
      new FormData(form)
    );

    const jsonBody = {
      nombre,
      apellidos,
      email,
      genero,
    };

    try {
      const response = await fetch("http://localhost:4000/register", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonBody),
      });

      if (response.ok) {
        if (response.status === 200) {
          const data = await response.json();
          setError("");
          router.push("/home");
        }
        // La solicitud fue exitosa, puedes manejar la respuesta aquí
      } else {
        if (response.status === 500) {
          const data = await response.json();
          setError(data.message);
        }
      }
    } catch (error) {
      setError("Error en la conexión con el servidor");
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/register/get", {
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data);
        console.log(data);
        if (data.user.setUser) {
          window.location.href = "http://localhost:3000/home";
        }
      } else {
        console.error("Error en la solicitud GET");
      }
    } catch (error) {
      console.error("Error en la conexión con el servidor", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <LayoutSignIn>
      <div>
        <div className="flex flex-row justify-between item-start">
          <div className="flex flex-col">
            <img className="w-44 m-5" src="/logo.png" alt="" />
            <div className="mt-64 ml-48 mr-10">
              <h1 className="text-4xl">
                Completa tu información para comenzar
              </h1>
              <p className="text-gray-500 mt-6">
                Ingresa tus datos en los siguientes campos
              </p>
              <form className="" onSubmit={handleSubmit}>
                <div className="flex flex-row">
                  <label className="flex flex-col" htmlFor="">
                    Nombre
                    <input type="text" name="nombre" />
                  </label>
                  <label className="flex flex-col" htmlFor="">
                    Apellido
                    <input type="text" name="apellidos" />
                  </label>
                </div>
                <div className="">
                  <label className="flex flex-col" htmlFor="">
                    Email
                    <input type="text" name="email" />
                  </label>
                </div>
                <div className="genero">
                  <label className="flex flex-col" htmlFor="">
                    Género
                    <input type="text" name="genero" />
                  </label>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <button type="submit">Crear Cuenta</button>
              </form>
            </div>
          </div>
          <div className="flex flex-col justify-center bg-gradient-to-b from-emerald-500 to-emerald-700 h-[74.95em] w-[50%]">
            <img className="max-w-[100rem]" src="/index_section.png" alt="" />
          </div>
        </div>
      </div>
    </LayoutSignIn>
  );
}

export default Index;
