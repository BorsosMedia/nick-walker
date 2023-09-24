import styles from "./header.module.css";
import Image from "next/image";
import Logo from "../../assets/images/logo.jpg";
function Header() {
  return (
    <header className={`${styles.header_container} max-gl-wdh`}>
      <div
        className={`${styles.header_wrapper} v-align-center h-justify-center twoCol`}
      >
        <Image
          priority
          src={Logo}
          alt="Nick Walker Logo"
          className={styles.nick_logo}
        />
        <div>
          <p className="colored-white">Home</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
