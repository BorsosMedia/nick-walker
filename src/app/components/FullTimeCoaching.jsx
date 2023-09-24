"use client";
import { useState, useEffect, forwardRef } from "react";
import { HiChevronDown } from "react-icons/hi";
import buttons from "../buttons.module.css";

export const FullTimeCoaching = forwardRef(({}, ref) => {
  const [Plan, setPlan] = useState("a");
  const [Dropdown, setDropdown] = useState(false);

  function HandlePlanDropdown() {
    setDropdown(!Dropdown);
  }
  useEffect(() => {
    setDropdown(false);
  }, [Plan]);

  const [Animation, setAnimation] = useState();

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
      <h2 className="colored-white uppercase">Full Time Custom Training</h2>
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
            <h6 className="colored-grey_dark">
              Can I take breaks between trainings?
            </h6>
            <p className="colored-grey_dark">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              vitae temporibus hic numquam, alias velit?
            </p>
          </div>
          <div className="v-align-gap-005">
            <h6 className="colored-grey_dark">Lorem ipsum dolor sit amet</h6>
            <p className="colored-grey_dark">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              vitae temporibus hic numquam, alias velit?
            </p>
          </div>
          <div className="v-align-gap-005">
            <h6 className="colored-grey_dark">
              Can I take breaks between trainings?
            </h6>
            <p className="colored-grey_dark">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              vitae temporibus hic numquam, alias velit?
            </p>
          </div>
        </div>
        <div className="v-align-gap-1 plan-card_wrapper">
          <div
            className={
              Animation
                ? "full-time-plan_card plan_card-animation v-align-gap-1"
                : "full-time-plan_card v-align-gap-1"
            }
          >
            <h3 className="colored-white text-center">Full Time Plan</h3>
            <p className="colored-grey">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              consequuntur natus amet mollitia maiores? Debitis!
            </p>
            <div className="h-align-gap-005 v-align-end">
              <h2 className="colored-white">
                $
                {(() => {
                  switch (Plan) {
                    case "a":
                      return "399 ";
                    case "b":
                      return "1066.5 ";
                    case "c":
                      return "2014.5 ";
                    case "d":
                      return "3408 ";
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
            <button
              className={
                Animation
                  ? `${buttons.primary} ${buttons.secondary} button button-animation_active`
                  : `${buttons.primary} ${buttons.secondary} button `
              }
            >
              Purchase Now
            </button>
            <ul className="colored-grey plan-ul">
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing</li>
              <li>Lorem ipsum dolor, sit amet consectetur</li>
              <li>Lorem ipsum dolor, sit amet</li>
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
