import ButtonGoogle from "./components/buttons/ButtonGoogle";
import ButtonFacebook from "./components/buttons/ButtonFacebook";
import LayoutSignIn from "@/layouts/LayoutSignIn";

function index() {
  return (
    <LayoutSignIn>
      <div>
        <div className="flex flex-row justify-between item-start">
          <div className="flex flex-col">
            <img className="w-44 m-5" src="/logo.png" alt="" />
            <div className="mt-64 ml-48 mr-10">
              <h1 className="text-4xl">Bienvenido a Treidi.</h1>
              <h1 className="text-4xl">Ingresa y ve qué hay de nuevo.</h1>
              <p className="text-gray-500 mt-6">
                Selecciona alguna de las siguientes opciones para Iniciar
                sesión.
              </p>
              <div className="mt-7">
                <ButtonGoogle />
                <ButtonFacebook />
              </div>
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
