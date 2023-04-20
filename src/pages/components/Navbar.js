import React, { useState } from "react";
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
    if (!isOpen) positionMainDiv();
    else reset();
  }

  function layoutShift() {
    const mainScreen = document.querySelector(".Home_main__EtNt2");
    const slideBar = document.querySelector(".Navbar_slideNav__LQWI7");

    mainScreen.style.transition = "all .5s ease";
    mainScreen.style.transform =
      "perspective(1300px) rotateY(20deg) translateZ(230px) scale(0.5)";
    mainScreen.style.position = "absolute";
    mainScreen.style.right = "20%";

    slideBar.style.transition = "all .5s ease";
    slideBar.style.transform = "translate(0%, -50%)";
  }

  function bgAnimation() {
    const maxWidth = window.screen.width;
    const maxHeight = window.screen.height;

    function Random(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    }

    function Shadows(amount) {
      let shadow = "";
      for (let i = 0; i < amount; i++) {
        shadow +=
          Random(0, maxWidth) +
          "px " +
          Random(0, maxHeight) +
          "px " +
          "rgb(255," +
          Random(0, 256) +
          "," +
          Random(0, 256) +
          "), ";
      }
      shadow +=
        Random(0, maxWidth) +
        "px " +
        Random(0, maxHeight) +
        "px " +
        "rgb(255," +
        Random(0, 256) +
        "," +
        Random(0, 256) +
        ")";
      return shadow;
    }

    for (let i = 1; i <= 3; i++) {
      document.documentElement.style.setProperty("--shadows" + i, Shadows(100));
    }
  }

  function positionMainDiv() {
    layoutShift();
    bgAnimation();
  }

  function reset() {
    const mainScreen = document.querySelector(".Home_main__EtNt2");
    const slideBar = document.querySelector(".Navbar_slideNav__LQWI7");

    mainScreen.style.transform =
      "perspective(1300px) rotateY(0) translateZ(0) scale(1)";
    mainScreen.style.right = "0%";
    slideBar.style.transition = "all 1s ease";
    slideBar.style.transform = "translate(10000%, 50%)";
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <svg
          width="88"
          height="28"
          viewBox="0 0 88 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.2642 21V6.45455H16.8949V8.99006H10.3395V12.456H16.2557V14.9915H10.3395V21H7.2642ZM22.0387 6.45455V21H18.9634V6.45455H22.0387ZM24.5689 21V6.45455H27.6442V18.4645H33.88V21H24.5689ZM35.9165 21V6.45455H45.7177V8.99006H38.9918V12.456H45.2134V14.9915H38.9918V18.4645H45.7461V21H35.9165Z"
            fill="#fff"
          />
          <path
            d="M56.2642 21V6.45455H59.2898V11.9233H59.3821C59.5147 11.6297 59.7064 11.3314 59.9574 11.0284C60.2131 10.7206 60.5445 10.465 60.9517 10.2614C61.3636 10.053 61.875 9.94886 62.4858 9.94886C63.2813 9.94886 64.0152 10.1572 64.6875 10.5739C65.3598 10.9858 65.8973 11.6084 66.2997 12.4418C66.7022 13.2704 66.9034 14.3097 66.9034 15.5597C66.9034 16.7765 66.7069 17.804 66.3139 18.642C65.9257 19.4754 65.3954 20.1075 64.723 20.5384C64.0554 20.9645 63.3073 21.1776 62.4787 21.1776C61.8916 21.1776 61.392 21.0805 60.9801 20.8864C60.5729 20.6922 60.2391 20.4484 59.9787 20.1548C59.7183 19.8565 59.5194 19.5559 59.3821 19.2528H59.2472V21H56.2642ZM59.2259 15.5455C59.2259 16.1941 59.3158 16.7599 59.4957 17.2429C59.6757 17.7259 59.9361 18.1023 60.277 18.3722C60.6179 18.6373 61.0322 18.7699 61.5199 18.7699C62.0123 18.7699 62.429 18.6349 62.7699 18.3651C63.1108 18.0904 63.3688 17.7116 63.544 17.2287C63.724 16.741 63.8139 16.1799 63.8139 15.5455C63.8139 14.9157 63.7263 14.3617 63.5511 13.8835C63.3759 13.4053 63.1179 13.0312 62.777 12.7614C62.4361 12.4915 62.017 12.3565 61.5199 12.3565C61.0275 12.3565 60.6108 12.4867 60.2699 12.7472C59.9337 13.0076 59.6757 13.3769 59.4957 13.8551C59.3158 14.3333 59.2259 14.8968 59.2259 15.5455ZM68.9222 21V10.0909H71.9478V21H68.9222ZM70.4421 8.68466C69.9923 8.68466 69.6064 8.53551 69.2844 8.23722C68.9672 7.93419 68.8086 7.57197 68.8086 7.15057C68.8086 6.7339 68.9672 6.37642 69.2844 6.07812C69.6064 5.77509 69.9923 5.62358 70.4421 5.62358C70.8919 5.62358 71.2754 5.77509 71.5927 6.07812C71.9147 6.37642 72.0756 6.7339 72.0756 7.15057C72.0756 7.57197 71.9147 7.93419 71.5927 8.23722C71.2754 8.53551 70.8919 8.68466 70.4421 8.68466ZM77.397 14.6932V21H74.3714V10.0909H77.255V12.0156H77.3828C77.6243 11.3812 78.0291 10.8793 78.5973 10.5099C79.1655 10.1359 79.8544 9.94886 80.6641 9.94886C81.4216 9.94886 82.0821 10.1146 82.6456 10.446C83.209 10.7775 83.647 11.2509 83.9595 11.8665C84.272 12.4773 84.4283 13.2064 84.4283 14.054V21H81.4027V14.5938C81.4074 13.9261 81.237 13.4053 80.8913 13.0312C80.5457 12.6525 80.0698 12.4631 79.4638 12.4631C79.0566 12.4631 78.6967 12.5507 78.3842 12.7259C78.0765 12.901 77.835 13.1567 77.6598 13.4929C77.4893 13.8243 77.4018 14.2244 77.397 14.6932Z"
            fill="#000"
          />
          <rect
            x="1.5"
            y="1.5"
            width="51"
            height="25"
            stroke="#fff"
            strokeWidth="3"
          />
          <rect
            x="56"
            y="25"
            width="11"
            height="2"
            stroke="#000"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className={styles.hamburger} onClick={handleClick}>
        <span className={isOpen ? styles.bar1open : styles.bar1}></span>
        <span className={isOpen ? styles.bar2open : styles.bar2}></span>
        <span className={isOpen ? styles.bar3open : styles.bar3}></span>
      </div>

      <div className={styles.slideNav}>
        <ul>
          <li>Download Content</li>
          <li>Register As User</li>
          <li>About Developer</li>
          <li>More Settings</li>
        </ul>
      </div>
    </nav>
  );
}
