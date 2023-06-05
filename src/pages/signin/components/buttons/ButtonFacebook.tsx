import React from "react";

function ButtonFacebook() {
  return (
    <>
      <a
        href="http://localhost:4000/auth-facebook/auth/facebook"
        className="flex justify-normal items-center rounded border-2 w-[16rem] mt-4"
      >
        <button className="w-[13rem] h-[3rem]">
          Iniciar sesión con Facebook
        </button>
        <img className="w-7 h-7 inline-block" src="/RRSS/facebook.png" alt="" />
      </a>
    </>
  );
}

export default ButtonFacebook;
