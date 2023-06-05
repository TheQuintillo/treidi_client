import LayoutSignIn from "@/layouts/LayoutSignIn";

function index() {
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
              <form
                className=""
                action="http://localhost:4000/register"
                method="POST"
              >
                <div className="flex flex-row">
                  <label className="flex flex-col" htmlFor="">
                    Nombre
                    <input type="text" name="name" />
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

export default index;
