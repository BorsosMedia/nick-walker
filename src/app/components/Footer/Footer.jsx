import styles from "./footer.module.css";
import { AiFillYoutube } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BiLogoTiktok } from "react-icons/bi";

function Footer() {
  return (
    <footer className={styles.footer_wrapper}>
      <div className={`${styles.footer_container} v-align-gap-1`}>
        <div className="h-align-gap-1">
          <a
            href="https://www.youtube.com/channel/UCotK4Y3BtGTdt7qzFR3vI1A"
            target="_blank"
          >
            <AiFillYoutube className="icon--sm footer--icon" />
          </a>
          <a
            href="https://www.instagram.com/nick_walker39/?hl=en"
            target="_blank"
          >
            <BsInstagram className="icon--sm footer--icon" />
          </a>

          <a
            href="https://www.tiktok.com/@nickwalkerifbbpro?lang=en"
            target="_blank"
          >
            <BiLogoTiktok className="icon--sm footer--icon" />
          </a>
        </div>
        <p className="colored-white text-center">
          Website Developed and Designed by{" "}
          <a
            href="https://www.borsosmedia.com/"
            target="_blank"
            className="bold colored-primary"
            style={{ textDecoration: "underline" }}
          >
            Borsos Media
          </a>
        </p>
        <p className="colored-white text-center">
          Nick Walker - All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
