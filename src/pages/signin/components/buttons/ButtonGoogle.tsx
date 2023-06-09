function ButtonGoogle(props: any) {
  return (
    <>
      <a
        href="http://localhost:4000/auth-google/auth/google"
        className="flex justify-normal items-center rounded border-2 w-[16rem] mt-4"
      >
        <button className="w-[13rem] h-[3rem]">
          Iniciar sesión con Google
        </button>
        <img className="w-7 h-7 inline-block" src="/RRSS/google.png" alt="" />
      </a>
    </>
  );
}

export default ButtonGoogle;
