import styles from "./footer.module.css";
import { AiFillYoutube } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BiLogoTiktok } from "react-icons/bi";

function Footer() {
  return (
    <footer className={styles.footer_wrapper}>
      <div className={`${styles.footer_container} v-align-gap-1`}>
        <div className="h-align-gap-1">
          <AiFillYoutube className="icon--sm footer--icon" />
          <BsInstagram className="icon--sm footer--icon" />
          <BiLogoTiktok className="icon--sm footer--icon" />
        </div>
        <p className="colored-white text-center">
          Website developed and design by{" "}
          <span className="bold colored-primary">Borsos Media</span>
        </p>
        <p className="colored-white text-center">
          Nicholas Walker - All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
