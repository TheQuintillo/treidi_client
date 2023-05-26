import "../../app/globals.css";
import FooterCopyright from "./FooterCopyright";

function Footer() {
  return (
    <footer>
      <div class="flex justify-around p-12">
        <div class="flex flex-col">
          <img class="w-[250px]" src="/logo.png" alt="logo" />
          <p class="w-[20rem] ml-24">
            Treidi es la nueva plataforma digital para
          </p>
          <p class="ml-24">poder intercambiar y adquirir productos entre</p>
          <p class="ml-24">particulares de manera fácil y rápida.</p>
        </div>
        <div class="flex flex-col gap-[2.5em] mt-5">
          <h1 class="text-2xl">Treidi</h1>
          <p>¿Quiénes somos?</p>
        </div>
        <div class="flex flex-col gap-[2.5em] mt-5">
          <h1 class="text-2xl">Legal</h1>
          <p>Condiciones de uso</p>
          <p>Política de Privacidad</p>
          <p>Cookies</p>
        </div>
        <div class="flex flex-col gap-[2.5em] mt-5">
          <h1 class="text-2xl">Soporte</h1>
          <p>Preguntas frecuentes</p>
          <p>Reglas de publicación</p>
          <p>Consejos de seguridad</p>
        </div>
        <div class="flex flex-col gap-[2.5em] mt-5">
          <h1 class="text-2xl">Descarga la app</h1>
          <p>Apple Store</p>
          <p>Google Play</p>
        </div>
      </div>
      <FooterCopyright />
    </footer>
  );
}

export default Footer;
