"use client";
import { useState, useEffect, forwardRef } from "react";
import { HiChevronDown } from "react-icons/hi";
import buttons from "../buttons.module.css";

export const FullTimeCoaching = forwardRef(({}, ref) => {
  const [Plan, setPlan] = useState("a");
  const [Dropdown, setDropdown] = useState(false);
  const [Animation, setAnimation] = useState(false);

  function HandlePlanDropdown() {
    setDropdown(!Dropdown);
  }
  useEffect(() => {
    setDropdown(false);
  }, [Plan]);

  useEffect(() => {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 2000);
  }, [Plan]);

  return (
    <section
      className="block-content max-gl-wdh training_wrapper v-align-gap-1"
      ref={ref}
    >
      <h2 className="colored-white uppercase">
        Walker Nation - Full Time Coaching
      </h2>
      <div className="full-time_container v-align-gap-1">
        <div className="plans_pick-container">
          <button
            className={`${buttons.secondary} ${buttons.third} button v-align-center h-justify-between`}
            onClick={HandlePlanDropdown}
          >
            Choose the duration of your plan
            <HiChevronDown
              className={Dropdown ? "icon--sm chevron_d-active" : "icon--sm"}
            />
          </button>
          <div
            className={
              Dropdown
                ? "dropdown_container dropdown_active"
                : "dropdown_container"
            }
          >
            <button
              className={
                Plan === "a"
                  ? `${buttons.secondary} ${buttons.third} button plan_active`
                  : `${buttons.secondary} ${buttons.third} button`
              }
              onClick={() => setPlan("a")}
            >
              Monthly
            </button>
            <button
              className={
                Plan === "b"
                  ? `${buttons.secondary} ${buttons.third} button plan_active`
                  : `${buttons.secondary} ${buttons.third} button`
              }
              onClick={() => setPlan("b")}
            >
              3 Months
            </button>
            <button
              className={
                Plan === "c"
                  ? `${buttons.secondary} ${buttons.third} button plan_active`
                  : `${buttons.secondary} ${buttons.third} button`
              }
              onClick={() => setPlan("c")}
            >
              6 Months
            </button>
            <button
              className={
                Plan === "d"
                  ? `${buttons.secondary} ${buttons.third} button plan_active`
                  : `${buttons.secondary} ${buttons.third} button`
              }
              onClick={() => setPlan("d")}
            >
              Annual
            </button>
          </div>
        </div>
        <div className="v-align-gap-2 plans_faq">
          <div className="v-align-gap-005">
            <h6 className="colored-grey_dark uppercase">
              Let’s Talk About Purpose
            </h6>
            <p className="colored-grey_dark">
              Your health and fitness are priceless. Whether you’re aiming to
              shed pounds, build muscle, or boost your endurance, I’ve got you
              covered.
            </p>
          </div>
          <div className="v-align-gap-005">
            <h6 className="colored-grey_dark uppercase">
              We’re Building a Lifestyle
            </h6>
            <p className="colored-grey_dark">
              With my approach, every workout, every meal plan, and every piece
              of advice I give you will be focused on helping you achieve peak
              form.
            </p>
          </div>
          {/*    <div className="v-align-gap-005">
            <h6 className="colored-grey_dark">
              Can I take breaks between trainings?
            </h6>
            <p className="colored-grey_dark">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              vitae temporibus hic numquam, alias velit?
            </p>
          </div> */}
        </div>
        <div className="v-align-gap-1 plan-card_wrapper">
          <div
            className={
              Animation
                ? "full-time-plan_card plan_card-animation v-align-gap-1"
                : "full-time-plan_card v-align-gap-1"
            }
          >
            <h3 className="colored-white text-center">Training Plan</h3>
            <p className="colored-grey">
              We will develop a personalized workout and nutrition plan that can
              help you achieve your fitness goals. I will be there to provide
              guidance and motivation, focusing on your mental strength as well
              as your physique.
            </p>
            <div className="h-align-gap-005 v-align-end">
              <h2 className="colored-white">
                $
                {(() => {
                  switch (Plan) {
                    case "a":
                      return "395.00";
                    case "b":
                      return "1066.50";
                    case "c":
                      return "2014.50";
                    case "d":
                      return "3408.00";
                  }
                })()}
              </h2>
              <span className="colored-white">
                /
                {(() => {
                  switch (Plan) {
                    case "a":
                      return "Monthly ";
                    case "b":
                      return "3 Months ";
                    case "c":
                      return "6 Months ";
                    case "d":
                      return "Annually ";
                  }
                })()}
              </span>
            </div>
            <a
              href={(() => {
                switch (Plan) {
                  case "a":
                    return "https://payments.walkernationcoaching.com/ftc-monthly";
                  case "b":
                    return "https://payments.walkernationcoaching.com/ftc-3-months";
                  case "c":
                    return "https://payments.walkernationcoaching.com/ftc-6-months";
                  case "d":
                    return "https://payments.walkernationcoaching.com/ftc-annual";
                }
              })()}
              target="_blank"
              className={
                Animation
                  ? `${buttons.primary} ${buttons.secondary} button button-animation_active`
                  : `${buttons.primary} ${buttons.secondary} button `
              }
            >
              Purchase Now
            </a>
            <ul className="colored-grey plan-ul">
              <li>Frequent Check-Ins (Email/SMS)</li>
              <li>Customized Training and Nutrition Plan</li>
              <li>Health Monitoring for Well-Being</li>
              <li>Constant Motivation and Support</li>
            </ul>
          </div>
        </div>
        <h2 className="hd__trns uppercase colored-grey_dark">
          <span className=" txt_training">
            {(() => {
              switch (Plan) {
                case "a":
                  return "Monthly ";
                case "b":
                  return "3-Month ";
                case "c":
                  return "6-Month ";
                case "d":
                  return "Full-Year ";
              }
            })()}
          </span>
          <span
            className={
              Animation ? " txt_training anm_txt-active" : "txt_training"
            }
          >
            Training
          </span>
        </h2>
      </div>
    </section>
  );
});
export default FullTimeCoaching;
