import React from "react";
import styles from "./UxSection.module.css";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 400 400"
      style={{
        width: "500px",
        height: "500px",
        position: "absolute",
        top: "-120px",
        left: "195px",
        zIndex: "200",
      }}
    >
      <g id="Base">
        <use
          width="149.684"
          height="14.069"
          x="170.513"
          y="392.216"
          transform="translate(95.277 87.832) translate(-95.277 -87.832) scale(.9979 .93797)"
          xlinkHref="#_Image1"
        ></use>
        <path
          fill="url(#_Linear2)"
          d="M146.408 237.745l2.838 30.786s.24 13.252-8.6 12.94l-39.27 3.856s-5.384 1.505.339 1.654l61.507.759s11.65-.039 15.065-.542l19.892-2.182s8.499 1.989 5.221-16.482l-7.971-32.406-49.021 1.617z"
          transform="translate(95.277 87.832)"
        ></path>
        <path
          fill="url(#_Linear3)"
          d="M198.848 281.777l-23.643 3.798s-8.943.743-17.785.652c0 0-56.856-.226-57.546-.516l42.968-4.54s7.577-2.378 6.352-12.734l-2.326-26.8 47.241-2.156 8.441 32.136s1.752 10.676-3.702 10.16z"
          transform="translate(95.277 87.832)"
        ></path>
      </g>
      <g id="Back" transform="translate(95.277 87.832)">
        <path
          fill="url(#_Linear4)"
          d="M41.448 99.122s-.723-7.039 8.87-8.38c9.592-1.34 230.561-49.396 230.561-49.396s8.324-3.981 10.942 9.725l-5.163 178.964s.361 7.944-11.234 8.114l-234.918 7.904s-10.922 2.276-11.821-8.955L41.448 99.122z"
        ></path>
        <path d="M40.973 97.801s.057-5.651 9.77-7.536l230.22-49.549s9.716-1.776 8.441 8.342l-5.541 178.183s.621 7.375-9.891 9.017l-237.543 7.813s-8.655 3.03-7.744-10.167L40.973 97.801z"></path>
        <ellipse
          cx="139.505"
          cy="233.94"
          fill="#838486"
          rx="2.117"
          ry="3.107"
        ></ellipse>
      </g>
      <path
        id="Screen"
        fill="url(#_Linear5)"
        d="M277.01 54.839L48.862 100.61 37.424 231.205l233.709-10.445 5.877-165.921z"
        transform="translate(95.277 87.832)"
      ></path>
      <path
        id="one"
        fill="var(--primary)"
        d="M73.471 167.822l1.872-28.568L337.57 88.246l-.651 34.423-263.448 45.153z"
      ></path>
      <path
        id="two"
        fill="var(--primary)"
        d="M72.535 177.696l139.286-22.927-2.07 58.883-141.227 17.14 4.011-53.096z"
      ></path>
      <path
        id="three"
        fill="var(--primary)"
        d="M221.487 153.062l114.225-18.798-1.72 142.924-117.322 6.702 4.817-130.828z"
      ></path>
      <path
        id="four"
        fill="var(--primary)"
        d="M67.366 239.556l60.424-6.214-2.525 57.661-61.158 3.525 3.259-54.972z"
      ></path>
      <path
        id="five"
        fill="var(--primary)"
        d="M139.883 231.678l68.086-7.53-2.151 60.716-68.427 4.898 2.492-58.084z"
      ></path>
      <path
        id="Glass"
        fill="url(#_Linear6)"
        d="M40.337 95.426s.057-5.651 9.77-7.536l230.856-47.174s9.716-1.776 8.441 8.342l-5.731 175.226s.621 7.375-9.891 9.017L36.429 248.645s-8.655 3.03-7.744-10.168L40.337 95.426z"
        transform="translate(-17.489 6.61) scale(1.06314)"
      ></path>
      <defs>
        <image
          id="_Image1"
          width="150"
          height="15"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAPCAYAAAAGaDZpAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACoklEQVRogdWYUXLDIAxEZTf3v3CbuD9RK29XKwFJm2qGkRAY2/CyEG/2/20bbMPc1oj/2o4XuMcxEl8e8USL9gwwlFdx1h7HWFnk2WtnrhsBJdaVV+U0ziPAqn7ZCgSWyxa+ysX6bj9hqXJ74tU7dhb8N/pkkGTxQeKs3IK/JXUvX/fJwOooBeZm4chUYxQIj3eIR8ob1Nnzjyxwt53lZ2Bxj0oSAUFoMlCuEGflIzyLj7UhWLNbSIwVFKq+AgSCEX2VU31RDdFGQFFtFSjumdI8Exj3MX4PuTgvh33P1Umx4gR2AFDbh1KBSim6AHTq3cLG6YDFbHRbm9mSsq3oSjyCwqCJxcF5u8fx/eN9M0U3s+8zFlMaBYeqdxZ5FoCVkt0Tn5lthSNgMcPrEawKmAwWBQ6WCMducCZK7sfGjop3hHFOP6gLvLRDtbL4l0au02cFHKWCSiVReTOwumdQlTf7uXVlwOBZydvitoTb1LvwmMOY1TPV83LaqjPFioCxhe/EI8BcyP3YguOe7hON+T3kUYGyegYUk3qV6/TF53dYmNKoRWewsPZsnA4wUaWiWmE5nf+qzw1Msn0ydjsv7Ha/MeuLoGQeD85sa1K57p+GKm9J/RE+GiqVUpkMDJbLoMlKBgtueZ1vWSfF8hM9AmGh3SfAFeXDcjhGQGCKkS14BYQCxEQbg2AEmJG2aB21ivDgwTs7B7GDfPZPkf1BMBPQEG9YZxOsFrsLQ3fhR5ViFQD23lXbyNgdwKLhYVnBgurClIZ9aqjURcHS+b5GrZqIauErdVC+28bqs23dPt3xZ8E049+dOkV9v8JxjXiMVW7asgmsJlLFrD6bf+X2FTjdqm9WnW1JxSr3VFMTWk32av+/GvNRY6/C6tZVlpcApmufeK0kaMs3TrUAAAAASUVORK5CYII="
        ></image>
        <linearGradient
          id="_Linear2"
          x1="0"
          x2="1"
          y1="0"
          y2="0"
          gradientTransform="matrix(104.88 -.90177 .90177 104.88 98.78 260.225)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#707070"></stop>
          <stop offset="0.04" stopColor="#F9F9F9"></stop>
          <stop offset="0.59" stopColor="#C6C6C6"></stop>
          <stop offset="0.64" stopColor="#878787"></stop>
          <stop offset="0.68" stopColor="#BABABA"></stop>
          <stop offset="0.75" stopColor="#D7D7D7"></stop>
          <stop offset="0.86" stopColor="#DDD"></stop>
          <stop offset="0.94" stopColor="#D1D1D1"></stop>
          <stop offset="1" stopColor="#A6A6A6"></stop>
        </linearGradient>
        <linearGradient
          id="_Linear3"
          x1="0"
          x2="1"
          y1="0"
          y2="0"
          gradientTransform="scale(45.88334) rotate(89.288 -.916 4.365)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#707070"></stop>
          <stop offset="0.69" stopColor="#fff"></stop>
          <stop offset="0.81" stopColor="#8A8A8A"></stop>
          <stop offset="0.9" stopColor="#ACABAB"></stop>
          <stop offset="1" stopColor="#9F9F9F"></stop>
        </linearGradient>
        <linearGradient
          id="_Linear4"
          x1="0"
          x2="1"
          y1="0"
          y2="0"
          gradientTransform="scale(276.843) rotate(-44.383 1.098 .276)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#4C4C4C"></stop>
          <stop offset="0.43" stopColor="#606163"></stop>
          <stop offset="0.62" stopColor="#6D6E70"></stop>
          <stop offset="0.65" stopColor="#A6A6A6"></stop>
          <stop offset="0.67" stopColor="#6A6A6A"></stop>
          <stop offset="0.69" stopColor="#808183"></stop>
          <stop offset="1" stopColor="#A1A2A3"></stop>
        </linearGradient>
        <linearGradient
          id="_Linear5"
          x1="0"
          x2="1"
          y1="0"
          y2="0"
          gradientTransform="scale(183.2703) rotate(31.084 -.92 1.358)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff"></stop>
          <stop offset="1" stopColor="#535758"></stop>
        </linearGradient>
        <linearGradient
          id="_Linear6"
          x1="0"
          x2="1"
          y1="0"
          y2="0"
          gradientTransform="scale(279.308) rotate(31.165 -.522 .404)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff" stopOpacity="0.07"></stop>
          <stop offset="0.23" stopColor="#FFFCFC" stopOpacity="0.11"></stop>
          <stop offset="0.33" stopColor="#fff" stopOpacity="0.23"></stop>
          <stop offset="0.45" stopColor="snow" stopOpacity="0.09"></stop>
          <stop offset="0.77" stopColor="#FFF5F5" stopOpacity="0.22"></stop>
          <stop offset="1" stopColor="#FFF2F2" stopOpacity="0.19"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

function UxSection() {
  return (
    <div className={styles.container}>
      <button style={{ marginBottom: "60px" }}>More Info</button>
      <div className={styles.uxTextContainer}>
        <div
          className="heroTitle"
          style={{ backgroundColor: "var(--darkGrey)" }}
        >
          <span style={{ color: "var(--lightGrey)" }}>UX</span>
          <span>UI</span>
        </div>
        <div className={styles.uxText}>
          User experience is key to the success of a website or application. I
          have extensive experience with Javascript and have utilized ReactJS in
          many projects. A background in Graphic Design helps support a strong
          UI foundation.
        </div>
      </div>
      <Icon />
    </div>
  );
}

export default UxSection;
