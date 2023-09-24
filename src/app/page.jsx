"use client";
import { useRef } from "react";
import styles from "./page.module.css";
import button from "./buttons.module.css";
import { HiArrowNarrowDown } from "react-icons/hi";
import { FaArrowRightLong } from "react-icons/fa6";
import InquirySection from "./components/InquirySection";
import Image from "next/image";
import mind from "./assets/icons/train-process/mind-v.svg";
import dumbbell from "./assets/icons/train-process/dumbbell.svg";
import pullUp from "./assets/icons/train-process/pull-up.svg";
import protein from "./assets/icons/train-process/protein-powder.svg";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FullTimeCoaching from "./components/FullTimeCoaching";
import InstagramWidget from "./components/InstagramWidget";
export default function Home() {
  const ref = useRef();
  const HandleCTA = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className={`main-wrapper`}>
      <div className="svc-cntr"> </div>
      <Header />
      <section className={`${styles.hero_section} block-content max-gl-wdh`}>
        <div className={`${styles.hero_wrapper} max-gl-wdh v-align-gap-1`}>
          <p className="colored-grey ">
            IT TAKES A LOT TO{" "}
            <span className="colored-primary bold">BECOME A MUTANT</span>
          </p>
          <h1 className="colored-white">ARE YOU READY?</h1>
          <button
            onClick={HandleCTA}
            className={`${button.primary} ${button.sm_width} ${button.cta_action} button`}
          >
            Start Now
            <HiArrowNarrowDown className={button.cta_icon} />
          </button>
        </div>
        <div className={`${styles.nicks_acc} `}></div>
      </section>
      <section className="block-content v-align-gap-1 m-top-1 max-gl-wdh">
        <div className="v-align-gap-1 prest_grid">
          <h2 className="uppercase colored-white hd__prest">
            I'm<span className="colored-primary hd__anm"></span>
          </h2>
          <p className="colored-grey">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
            odit, rerum soluta.
          </p>
          <p className="colored-grey">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
            odit, rerum soluta fugit
          </p>
          <div className="train-process v-align-gap-1 m-top-1">
            <h4 className="colored-grey uppercase">
              how do i like to proceed when it comes to training?
            </h4>
            <div className="h-align-gap-1 h-justify-between v-align-center h-grid-auto">
              <div className="v-align-gap-005 h-justify-center-g">
                <Image src={mind} />
                <p className="colored-grey">Mind-First</p>
              </div>
              <div className="v-align-gap-005 h-justify-center-g">
                <Image src={dumbbell} />
                <p className="colored-grey">Loremp Ipsum</p>
              </div>
              <div className="v-align-gap-005 h-justify-center-g">
                <Image src={pullUp} />
                <p className="colored-grey">Ipsum Lorem</p>
              </div>
              <div className="v-align-gap-005 h-justify-center-g">
                <Image src={protein} />
                <p className="colored-grey">Lorem Ipsum</p>
              </div>
            </div>
          </div>
          <div className="nw_prss_img"></div>
        </div>
      </section>
      <FullTimeCoaching ref={ref} />
      <section className="block-content call-section_container mg_full-content">
        <div className="call-section_wrapper v-align-gap-1">
          <h4 className="colored-white uppercase text-center">
            Book a Free 15-minute Consultation Call
          </h4>
          <p className="colored-grey">
            Fill out the form below with your information and any questions you
            may have, I’ll get in touch with you as soon as posible
          </p>
          <button
            className={`${button.tertiary} button h-align-gap-1 v-align-center`}
          >
            <span className="colored-primary ">Open The Calendar</span>
            <FaArrowRightLong
              style={{
                transform: "rotate(-45deg)",
                height: "1.5rem",
                width: "1.5rem",
              }}
              className="icon--sm colored-primary"
            />
          </button>
        </div>
      </section>
      <section className="block-content bloodwork_block max-gl-wdh">
        <div className="bloodwork_wrapper v-align-gap-1 v-align-center">
          <h2 className="colored-black uppercase">
            Comprehensive <br />
            <span className="colored-primary">Bloodwork</span> Tests
          </h2>
          <p className="colored-black">
            I want to have a full picture of your health, that’s why I have
            partnered with the best professionals to ensure your maximum power
            everyday.
          </p>
          <p className="colored-black">
            These blood tests allow me to have several diagnostics, address
            possible risks, and make dietary changes if necessary.
          </p>
          <p className="colored-black bold">Starting at $399</p>
          <a
            href=""
            className={`${button.fourty} ${button.sm_width} button colored-black h-align-left v-align-center`}
          >
            Learn More <FaArrowRightLong className="icon--sm  colored-black" />
          </a>
        </div>
      </section>
      <section className="block-content nick__acc-grid max-gl-wdh">
        <h2 className="colored-white uppercase">
          WORK SO HARD THAT YOU DON’T HAVE OTHER OPTION BUT TO{" "}
          <span className="colored-primary">MAKE IT</span>
        </h2>
        <div className="nicks-hdns">
          <h2 className="colored-primary uppercase">Make it</h2>
          <h2 className="colored-primary uppercase">Make it</h2>
          <h2 className="colored-primary uppercase">Make it</h2>
          <h2 className="colored-primary uppercase">Make it</h2>
        </div>

        <div className="nicks-wrapper nicks-wrapperA v-align-gap-005">
          <div className="nicks-photo">
            <h5 className="colored-white">Ipsum Lorem</h5>
          </div>
          <p className="colored-grey">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
            quod!
          </p>
        </div>
        <div className="nicks-wrapper nicks-wrapperB v-align-gap-005">
          <div className="nicks-photo">
            <h5 className="colored-white">Lorem Ipsum</h5>
          </div>
          <p className="colored-grey">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
            quod!
          </p>
        </div>
        <div className="nicks-wrapper nicks-wrapperC"></div>
      </section>
      <InquirySection />
      <section className="block-content arm-guide max-gl-wdh v-align-gap-1">
        <h2 className="colored-white uppercase">
          MY <span className="colored-primary">MUTANT ARM</span> GUIDE
        </h2>
        <div className="arm_guide-container v-align-gap-1">
          <div className="arm-steps v-align-gap-1">
            <div className="v-align-gap-005">
              <h3 className="colored-white">1st</h3>
              <p className="colored-grey">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                vitae temporibus hic numquam, alias velit?
              </p>
            </div>
            <div className="v-align-gap-005">
              <h3 className="colored-white">2st</h3>
              <p className="colored-grey">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                vitae temporibus hic numquam, alias velit?
              </p>
            </div>

            <div className="v-align-gap-005">
              <h4 className="colored-white">3rd</h4>
              <p className="colored-grey">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="mutant-arm_imgA"></div>
          <div className="mutant-arm_imgB"></div>

          <a
            href=""
            className={`${button.primary} ${button.secondary} ${button.cta_action} button text-center `}
          >
            Start Now
          </a>
        </div>
      </section>
      <InstagramWidget />
      <Footer />
    </main>
  );
}
