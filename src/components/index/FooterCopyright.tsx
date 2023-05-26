import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function FooterCopyright() {
  return (
    <div class="flex justify-around items-center bg-gradient-to-b from-emerald-500 to-emerald-700 p-2">
      <h1 class="text-white">Copyright © 2020 Treidi App S.A.S de C.V.</h1>
      <div class="flex gap-5">
        <FontAwesomeIcon icon={faFacebook} className="text-2xl text-white" />
        <FontAwesomeIcon icon={faInstagram} className="text-2xl text-white" />
        <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl text-white" />
      </div>
    </div>
  );
}

export default FooterCopyright;
