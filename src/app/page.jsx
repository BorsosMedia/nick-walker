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
import YoutubeWidget from "./components/YoutubeWidget";
export default function Home() {
  const ref = useRef();
  const HandleCTA = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className={`main-wrapper`}>
      <div className="svc-cntr"> </div>
      <Header />
      <section className={`${styles.hero_section}  block-content `}>
        <div className={`${styles.hero_wrapper}  v-align-gap-1`}>
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
            Achieving your goals is an everyday job. I say keep dreaming and
            believing in yourself and your mind will help you achieve great
            things.
          </p>
          <p className="colored-grey">
            As a former Arnold Classic Champion, I know what it takes to
            transform your life. Believe in yourself and I’ll do my best to help
            you transform yours.
          </p>
          <div className="train-process v-align-gap-1 m-top-1">
            {/*   <h4 className="colored-grey uppercase">HOW DO I TRAIN?</h4> */}
            <div className="h-align-gap-1 h-justify-between v-align-center h-grid-auto">
              <div className="v-align-gap-005 h-justify-center-g">
                <Image src={mind} />
                <p className="colored-grey">Mind-First</p>
              </div>
              <div className="v-align-gap-005 h-justify-center-g">
                <Image src={dumbbell} />
                <p className="colored-grey">Hardcore Training</p>
              </div>
              <div className="v-align-gap-005 h-justify-center-g">
                <Image src={pullUp} />
                <p className="colored-grey">Strong Determination</p>
              </div>
              <div className="v-align-gap-005 h-justify-center-g">
                <Image src={protein} />
                <p className="colored-grey">Top Nutrition</p>
              </div>
            </div>
          </div>
          <div className="nw_prss_img"></div>
        </div>
      </section>
      <section className="block-content max-gl-wdh v-align-gap-2 m-top-1">
        <div className="v-align-gap-1 presentation-heading">
          <h2 className="colored-white">
            WALKER NATION, a coaching plan by NICK WALKER
          </h2>
          <h5 className="colored-grey">
            Everything that has worked for me, now{" "}
            <span className="colored-primary">available to you</span>
          </h5>
          <p className="colored-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            maximus vel orci a tristique. Curabitur pellentesque nisl at arcu
            convallis sagittis. Morbi eleifend leo eget condimentum
            sollicitudin.
          </p>
          <p className="colored-grey bold">Starting at $399</p>
        </div>
        <div className="v-align-gap-1 presentation-wrapper">
          <div className="v-align-gap-1 workouts">
            <h5 className="colored-white uppercase">
              Lorem-Planned <br className="presentation-break" />
              Workouts
            </h5>
            <div className="presentation-img "></div>
          </div>
          <div className="v-align-gap-1 nutrition">
            <h5 className="colored-white uppercase">
              Research-Based <br className="presentation-break" />
              Nutrition
            </h5>
            <div className="presentation-img"></div>
          </div>
          <div className="v-align-gap-1 communication">
            <h5 className="colored-white uppercase">
              Direct <br className="presentation-break" />
              Communication
            </h5>
            <div className="presentation-img "></div>
          </div>
          <div className="v-align-gap-1 description">
            <h5 className="colored-white">Who is this targeted to?</h5>
            <ul>
              <li className="colored-grey">Lorem ipsum dolor sit amet.</li>
              <li className="colored-grey">Lorem ipsum dolor sit amet.</li>
              <li className="colored-grey">Lorem ipsum dolor sit amet.</li>
              <li className="colored-grey">Lorem ipsum dolor sit amet.</li>
            </ul>
            <p className="colored-grey">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              aliquam cumque laborum iure distinctio debitis!
            </p>
          </div>
        </div>
      </section>
      <FullTimeCoaching ref={ref} />
      <InquirySection />

      {/* <section className="block-content call-section_container mg_full-content">
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
      </section> */}
      <section className="block-content bloodwork_block max-gl-wdh">
        <div className="bloodwork_wrapper v-align-gap-1 v-align-center">
          <h2 className="colored-black uppercase">
            Need Help <br />
            With <span className="colored-primary">Blood Work?</span>
          </h2>
          <p className="colored-black">
            I’m all for taking a comprehensive approach to your fitness routine.
            That means going beyond the surface to understand how your body
            works.
          </p>
          <p className="colored-black">
            Blood work analysis provides key information that can help me
            develop your workout routine and adjust your nutrition plan to
            address any health concerns.
          </p>
          {/*       <p className="colored-black">
            With my experience and in collaboration with healthcare
            professionals, I’m in a unique position to help interpret your blood
            work results to optimize your performance while preserving your
            health.
          </p> */}
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
            <h5 className="colored-white">10 Years Competing</h5>
          </div>
          <p className="colored-grey">
            I began competing in 2013 at a young age and never looked back. I
            strive to push the boundaries of what you can do in bodybuilding as
            my dedication remains unwavering.
          </p>
        </div>
        <div className="nicks-wrapper nicks-wrapperB v-align-gap-005">
          <div className="nicks-photo">
            <h5 className="colored-white">2021 Arnold Classic Winner</h5>
          </div>
          <p className="colored-grey">
            I came in first place in 2021’s Arnold Classic Ohio and came in
            third place at 2022’s Mr. Olympia, the two most prestigious
            bodybuilding competitions in the world.
          </p>
        </div>
        <div className="nicks-wrapper nicks-wrapperC"></div>
      </section>
      <section className="block-content arm-guide max-gl-wdh v-align-gap-1">
        <h2 className="colored-white uppercase">
          MY <span className="colored-primary">MUTANT ARM</span> GUIDE
        </h2>
        <div className="arm_guide-container v-align-gap-1">
          <div className="arm-steps v-align-gap-1">
            <div className="v-align-gap-005">
              <h3 className="colored-white">1st</h3>
              <p className="colored-grey">
                Unlock the knowledge necessary to explode your arm gains in the
                gym.
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
      <YoutubeWidget />
      <Footer />
    </main>
  );
}
