import React, { useEffect } from "react";
import styles from "./FullstackSection.module.css";

function Laptop() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="1.5"
      clipRule="evenodd"
      viewBox="0 0 200 200"
      style={{
        width: "600px",
        height: "600px",
        position: "absolute",
        top: "650px",
        right: "200px",
        zIndex: "500",
      }}
    >
      <path
        fill="url(#_Linear1)"
        d="M71.902 30.286c3.088-9.347 11.897-16.098 22.271-16.098 11.13 0 20.459 7.771 22.852 18.176a21.635 21.635 0 0113.004 11.503 15.139 15.139 0 013.172-.335c8.329 0 15.092 6.763 15.092 15.092s-6.763 15.092-15.092 15.092a15.034 15.034 0 01-9.787-3.607 21.59 21.59 0 01-1.558 1.071c-3.588 8.131-11.725 13.813-21.179 13.813a23.045 23.045 0 01-14.917-5.455c-4.226 4.533-10.247 7.369-16.926 7.369a23.03 23.03 0 01-14.15-4.836 9.809 9.809 0 01-7.303 3.252c-5.426 0-9.831-4.405-9.831-9.831l.001-.117a11.407 11.407 0 01-3.616.585c-6.304 0-11.422-5.119-11.422-11.423s5.118-11.423 11.422-11.423c.505 0 1.003.033 1.49.097a22.857 22.857 0 01-.008-.642c0-13.823 11.223-25.046 25.046-25.046 4.121 0 8.011.997 11.439 2.763z"
        transform="matrix(.53757 0 0 .5512 66.652 1.672)"
      ></path>
      <use
        width="164.968"
        height="43.586"
        x="26.944"
        y="131.497"
        transform="scale(.9998 .9906)"
        xlinkHref="#_Image2"
      ></use>
      <path
        fill="url(#_Linear5)"
        d="M32.705 140.57s-1.885-.844-2.111-3.445l-1.8-83.081s-.115-4.168 4.252-4.153c4.366.015 105.785-2.153 105.785-2.153s1.436-.078 1.234 3.036c-.202 3.113.355 75.955.355 75.955s-.34 1.875-.496 1.96l-.52.463L32.705 140.57z"
        transform="translate(4.073 9.214)"
      ></path>
      <path
        d="M33.311 139.978s-1.623-.104-1.937-2.935L30.093 53.5s-.104-3.309 4.935-3.288c5.04.021 102.798-2.101 102.798-2.101s2.026.001 1.766 2.743c-.26 2.743.506 76.598.506 76.598s-.476 1.512-.957 1.548l-105.83 10.978z"
        transform="translate(4.073 9.214)"
      ></path>
      <path
        fill="url(#_Linear6)"
        d="M31.831 135.34l108.089-9.913s1.09 4.969-3.324 4.211L33.721 140.163s-2.395-.279-1.89-4.823z"
        transform="translate(4.073 9.214)"
      ></path>
      <path
        fill="#3B3B3B"
        d="M34.325 132.905l-1.526-77.146 104.368-3.133.373 70.981-103.215 9.298z"
        transform="translate(4.073 9.214)"
      ></path>
      <g>
        <path
          fill="#F2F2F2"
          d="M75.069 58.882a.73.73 0 00-.734-.725H36.314a.73.73 0 00-.735.725c0 .4.329.724.735.724h38.021a.73.73 0 00.734-.724z"
          transform="translate(0 3) matrix(.98553 -.03112 .03157 .9995 4.738 10.945)"
        ></path>
        <path
          fill="#F2F2F2"
          d="M75.069 58.882a.73.73 0 00-.734-.725H36.314a.73.73 0 00-.735.725c0 .4.329.724.735.724h38.021a.73.73 0 00.734-.724z"
          transform="translate(0 3) matrix(-.98512 .04209 -.04268 -.99909 167.355 146.7)"
        ></path>
        <path
          fill="#F2F2F2"
          d="M75.069 58.882a.73.73 0 00-.734-.725H36.314a.73.73 0 00-.735.725c0 .4.329.724.735.724h38.021a.73.73 0 00.734-.724z"
          transform="translate(0 3) matrix(.98427 -.05878 .0596 .99822 9.063 50.803)"
        ></path>
        <path
          fill="#F2F2F2"
          d="M75.069 58.882a.73.73 0 00-.734-.725H36.314a.73.73 0 00-.735.725c0 .4.329.724.735.724h38.021a.73.73 0 00.734-.724z"
          transform="translate(0 3) matrix(.98553 -.03112 .03156 .9995 34.375 16.158)"
        ></path>
        <path
          fill="#F2F2F2"
          d="M75.069 58.882a.73.73 0 00-.734-.725H36.314a.73.73 0 00-.735.725c0 .4.329.724.735.724h38.021a.73.73 0 00.734-.724z"
          transform="translate(0 3) matrix(-.9855 .03187 -.03232 -.99948 144.597 140.64)"
        ></path>
        <path
          fill="#F2F2F2"
          d="M75.069 58.882c0-.4-1.02-.725-2.278-.725H37.857c-1.257 0-2.278.325-2.278.725 0 .4 1.021.724 2.278.724h34.934c1.258 0 2.278-.324 2.278-.724z"
          transform="translate(0 3) matrix(-.31787 .01022 -.03214 -.99948 111.805 128.442)"
        ></path>
        <path
          fill="#F2F2F2"
          d="M75.069 58.882c0-.4-1.02-.725-2.278-.725H37.857c-1.257 0-2.278.325-2.278.725 0 .4 1.021.724 2.278.724h34.934c1.258 0 2.278-.324 2.278-.724z"
          transform="translate(0 3) matrix(.31738 -.02045 .06429 .99793 71.75 66.414)"
        ></path>
        <path
          fill="#F2F2F2"
          d="M75.069 58.882c0-.4-1.02-.725-2.278-.725H37.857c-1.257 0-2.278.325-2.278.725 0 .4 1.021.724 2.278.724h34.934c1.258 0 2.278-.324 2.278-.724z"
          transform="translate(0 3) matrix(.31786 -.01062 .03338 .99944 66.977 28.738)"
        ></path>
        <path
          fill="#F2F2F2"
          d="M75.069 58.882c0-.4-1.02-.725-2.278-.725H37.857c-1.257 0-2.278.325-2.278.725 0 .4 1.021.724 2.278.724h34.934c1.258 0 2.278-.324 2.278-.724z"
          transform="translate(0 3) matrix(-.31787 .01022 -.03214 -.99948 103.178 135.114)"
        ></path>
        <path
          fill="#F2F2F2"
          d="M75.069 58.882c0-.4-1.02-.725-2.278-.725H37.857c-1.257 0-2.278.325-2.278.725 0 .4 1.021.724 2.278.724h34.934c1.258 0 2.278-.324 2.278-.724z"
          transform="translate(0 3) matrix(.31786 -.01046 .0329 .99946 75.703 21.736)"
        ></path>
        <path
          fill="#F2F2F2"
          d="M75.069 58.882c0-.4-1.02-.725-2.278-.725H37.857c-1.257 0-2.278.325-2.278.725 0 .4 1.021.724 2.278.724h34.934c1.258 0 2.278-.324 2.278-.724z"
          transform="translate(0 3) matrix(-.31787 .01022 -.03214 -.99948 117.54 134.675)"
        ></path>
        <path
          fill="#F2F2F2"
          d="M75.069 58.882c0-.4-1.02-.725-2.278-.725H37.857c-1.257 0-2.278.325-2.278.725 0 .4 1.021.724 2.278.724h34.934c1.258 0 2.278-.324 2.278-.724z"
          transform="translate(0 3) matrix(.31738 -.02045 .06429 .99793 65.817 60.368)"
        ></path>
        <path
          fill="#F2F2F2"
          d="M75.069 58.882c0-.4-.292-.725-.653-.725H36.232c-.361 0-.653.325-.653.725 0 .4.292.724.653.724h38.184c.361 0 .653-.324.653-.724z"
          transform="translate(0 3) matrix(1.10854 -.0365 .0329 .99946 1.986 24.14)"
        ></path>
        <path
          fill="#F2F2F2"
          d="M75.069 58.882c0-.4-1.02-.725-2.278-.725H37.857c-1.257 0-2.278.325-2.278.725 0 .4 1.021.724 2.278.724h34.934c1.258 0 2.278-.324 2.278-.724z"
          transform="translate(0 3) matrix(-.31787 .01022 -.03214 -.99948 131.63 134.133)"
        ></path>
        <path
          fill="#F2F2F2"
          d="M75.069 58.882c0-.4-1.02-.725-2.278-.725H37.857c-1.257 0-2.278.325-2.278.725 0 .4 1.021.724 2.278.724h34.934c1.258 0 2.278-.324 2.278-.724z"
          transform="translate(0 3) matrix(.31738 -.02045 .06429 .99793 51.752 61.363)"
        ></path>
        <path
          fill="#F2F2F2"
          d="M75.069 58.882c0-.4-.551-.725-1.231-.725H36.81c-.68 0-1.231.325-1.231.725 0 .4.551.724 1.231.724h37.028c.68 0 1.231-.324 1.231-.724z"
          transform="translate(0 3) matrix(-.58815 .01891 -.03214 -.99948 146.261 127.337)"
        ></path>
        <path
          fill="#F2F2F2"
          d="M75.069 58.882c0-.4-.551-.725-1.231-.725H36.81c-.68 0-1.231.325-1.231.725 0 .4.551.724 1.231.724h37.028c.68 0 1.231-.324 1.231-.724z"
          transform="translate(0 3) matrix(.58724 -.03783 .06429 .99793 37.347 68.626)"
        ></path>
        <path
          fill="#F2F2F2"
          d="M75.069 58.882c0-.4-.551-.725-1.231-.725H36.81c-.68 0-1.231.325-1.231.725 0 .4.551.724 1.231.724h37.028c.68 0 1.231-.324 1.231-.724z"
          transform="translate(0 3) matrix(.58813 -.01964 .03338 .99944 32.523 29.886)"
        ></path>
        <path
          fill="#F2F2F2"
          d="M75.069 58.882c0-.4-.535-.725-1.194-.725H36.773c-.659 0-1.194.325-1.194.725 0 .4.535.724 1.194.724h37.102c.659 0 1.194-.324 1.194-.724z"
          transform="translate(0 3) matrix(.60658 -.01755 .02892 .99958 76.376 8.61)"
        ></path>
        <path
          fill="#F2F2F2"
          d="M75.069 58.882c0-.4-.535-.725-1.194-.725H36.773c-.659 0-1.194.325-1.194.725 0 .4.535.724 1.194.724h37.102c.659 0 1.194-.324 1.194-.724z"
          transform="translate(0 3) matrix(-.6057 .03706 -.06106 -.99813 111.016 185.042)"
        ></path>
        <path
          fill="#F2F2F2"
          d="M75.069 58.882c0-.4-.535-.725-1.194-.725H36.773c-.659 0-1.194.325-1.194.725 0 .4.535.724 1.194.724h37.102c.659 0 1.194-.324 1.194-.724z"
          transform="translate(0 3) matrix(-.60633 .02481 -.04089 -.99916 95.796 149.8)"
        ></path>
        <path
          fill="#F2F2F2"
          d="M75.069 58.882c0-.4-.535-.725-1.194-.725H36.773c-.659 0-1.194.325-1.194.725 0 .4.535.724 1.194.724h37.102c.659 0 1.194-.324 1.194-.724z"
          transform="translate(0 3) matrix(.60658 -.01755 .02892 .99958 21.815 16.528)"
        ></path>
        <path
          fill="#F2F2F2"
          d="M75.069 58.882c0-.4-.535-.725-1.194-.725H36.773c-.659 0-1.194.325-1.194.725 0 .4.535.724 1.194.724h37.102c.659 0 1.194-.324 1.194-.724z"
          transform="translate(0 3) matrix(-.60657 .018 -.02968 -.99956 157.156 140.261)"
        ></path>
        <path
          fill="#F2F2F2"
          d="M75.069 58.882c0-.4-.535-.725-1.194-.725H36.773c-.659 0-1.194.325-1.194.725 0 .4.535.724 1.194.724h37.102c.659 0 1.194-.324 1.194-.724z"
          transform="translate(0 3) matrix(.60567 -.03752 .06182 .99809 26.042 56.06)"
        ></path>
        <path
          fill="#F2F2F2"
          d="M75.069 58.882c0-.4-.535-.725-1.194-.725H36.773c-.659 0-1.194.325-1.194.725 0 .4.535.724 1.194.724h37.102c.659 0 1.194-.324 1.194-.724z"
          transform="translate(0 3) matrix(-.60656 .01808 -.02979 -.99956 86.574 129.327)"
        ></path>
        <path
          fill="#F2F2F2"
          d="M75.069 58.882c0-.4-.535-.725-1.194-.725H36.773c-.659 0-1.194.325-1.194.725 0 .4.535.724 1.194.724h37.102c.659 0 1.194-.324 1.194-.724z"
          transform="translate(0 3) matrix(.60654 -.01883 .03103 .99952 92.207 27.821)"
        ></path>
        <path
          fill="#F2F2F2"
          d="M75.069 58.882c0-.4-.535-.725-1.194-.725H36.773c-.659 0-1.194.325-1.194.725 0 .4.535.724 1.194.724h37.102c.659 0 1.194-.324 1.194-.724z"
          transform="translate(0 3) matrix(-.60564 .03805 -.0627 -.99803 94.481 166.665)"
        ></path>
        <path
          fill="var(--primary)"
          d="M75.069 58.882c0-.4-.866-.725-1.933-.725H37.513c-1.068 0-1.934.325-1.934.725 0 .4.866.724 1.934.724h35.623c1.067 0 1.933-.324 1.933-.724z"
          transform="translate(0 3) matrix(.37454 -.01067 .02846 .9996 67.766 8.894)"
        ></path>
        <path
          fill="var(--primary)"
          d="M75.069 58.882c0-.4-.866-.725-1.933-.725H37.513c-1.068 0-1.934.325-1.934.725 0 .4.866.724 1.934.724h35.623c1.067 0 1.933-.324 1.933-.724z"
          transform="translate(0 3) matrix(-.3744 .01483 -.03958 -.99922 104.353 149.452)"
        ></path>
        <path
          fill="var(--primary)"
          d="M75.069 58.882c0-.4-1.556-.725-3.474-.725H39.053c-1.917 0-3.474.325-3.474.725 0 .4 1.557.724 3.474.724h32.542c1.918 0 3.474-.324 3.474-.724z"
          transform="translate(0 3) matrix(.20837 -.0084 .04024 .99919 114.983 10.531)"
        ></path>
        <path
          fill="var(--primary)"
          d="M75.069 58.882c0-.4-1.556-.725-3.474-.725H39.053c-1.917 0-3.474.325-3.474.725 0 .4 1.557.724 3.474.724h32.542c1.918 0 3.474-.324 3.474-.724z"
          transform="translate(0 3) matrix(-.208 .0151 -.07237 -.99738 72.368 184.365)"
        ></path>
        <path
          fill="var(--primary)"
          d="M75.069 58.882c0-.4-1.556-.725-3.474-.725H39.053c-1.917 0-3.474.325-3.474.725 0 .4 1.557.724 3.474.724h32.542c1.918 0 3.474-.324 3.474-.724z"
          transform="translate(0 3) matrix(-.20836 .00865 -.04148 -.99914 63.946 146.653)"
        ></path>
        <path
          fill="var(--primary)"
          d="M75.069 58.882c0-.4-.68-.725-1.519-.725H37.098c-.838 0-1.519.325-1.519.725 0 .4.681.724 1.519.724H73.55c.839 0 1.519-.324 1.519-.724z"
          transform="translate(0 3) matrix(-.47663 .01399 -.02934 -.99957 102.849 128.812)"
        ></path>
        <path
          fill="var(--primary)"
          d="M75.069 58.882c0-.4-.68-.725-1.519-.725H37.098c-.838 0-1.519.325-1.519.725 0 .4.681.724 1.519.724H73.55c.839 0 1.519-.324 1.519-.724z"
          transform="translate(0 3) matrix(.47661 -.01458 .03058 .99953 75.933 28.357)"
        ></path>
        <path
          fill="var(--primary)"
          d="M75.069 58.882c0-.4-.68-.725-1.519-.725H37.098c-.838 0-1.519.325-1.519.725 0 .4.681.724 1.519.724H73.55c.839 0 1.519-.324 1.519-.724z"
          transform="translate(0 3) matrix(-.47591 .02968 -.06224 -.99806 110.73 165.614)"
        ></path>
        <path
          fill="var(--primary)"
          d="M75.069 58.882c0-.4-.427-.725-.953-.725H36.532c-.526 0-.953.325-.953.725 0 .4.427.724.953.724h37.584c.526 0 .953-.324.953-.724z"
          transform="translate(0 3) matrix(-.75958 .0223 -.02934 -.99957 104.273 135.225)"
        ></path>
        <path
          fill="var(--primary)"
          d="M75.069 58.882c0-.4-.427-.725-.953-.725H36.532c-.526 0-.953.325-.953.725 0 .4.427.724.953.724h37.584c.526 0 .953-.324.953-.724z"
          transform="translate(0 3) matrix(.75957 -.02287 .0301 .99955 74.608 21.627)"
        ></path>
        <path
          fill="var(--primary)"
          d="M75.069 58.882c0-.4-.427-.725-.953-.725H36.532c-.526 0-.953.325-.953.725 0 .4.427.724.953.724h37.584c.526 0 .953-.324.953-.724z"
          transform="translate(0 3) matrix(-.75844 .0473 -.06224 -.99806 112.365 171.976)"
        ></path>
      </g>
      <path
        fill="url(#_Linear7)"
        d="M32.693 142.211l.169-2.835s-.405-.981 4.349-1.184l6.894-.767.762.242 85.005-7.863-.365-.475 8.781-.717s3.533-.047 4.672.401l46.737 12.649s1.902.635.308 1.574c0 0 .161.721-11.65 2.239l-97.837 11.204s-3.667.435-6.141-.047l-40.47-14.073s-.942-.367-1.214-.348z"
        transform="translate(4.073 9.214)"
      ></path>
      <use
        width="64.023"
        height="11.098"
        x="98.66"
        y="161.071"
        transform="translate(4.073 9.214) translate(-4.073 -9.214) scale(.98498 .92486)"
        xlinkHref="#_Image8"
      ></use>
      <path
        fill="url(#_Linear9)"
        stroke="url(#_Linear10)"
        strokeWidth="0.25"
        d="M40.69 139.927l-.027-.48 98.617-9.544 18.799 5.209 4.571 1.381-102.334 10.786-19.626-7.352z"
        transform="translate(4.073 9.214)"
      ></path>
      <path
        fill="#595959"
        d="M32.701 142.154l.223-2.26 43.125 16.735 112.389-13.154s2.124-.453 2.049-1.368c0 0 2.441 2.067-11.054 3.246L78.93 156.92s-3.928.568-6.016-.764l-40.213-14.002z"
        transform="translate(4.073 9.214)"
      ></path>
      <path
        fill="#151516"
        d="M34.12 141.249l-.12.798 3.093 1.092.083-.815-3.056-1.075z"
        transform="translate(4.073 9.214)"
      ></path>
      <defs>
        <linearGradient
          id="_Linear1"
          x1="0"
          x2="1"
          y1="0"
          y2="0"
          gradientTransform="matrix(-1.11972 -74.33 76.2159 -1.09201 58.738 85.97)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#A7A7A7"></stop>
          <stop offset="1" stopColor="#fff"></stop>
        </linearGradient>
        <image
          id="_Image2"
          width="165"
          height="44"
          xlinkHref="data:image/png;base64,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"
        ></image>
        <linearGradient
          id="_Linear3"
          x1="0"
          x2="1"
          y1="0"
          y2="0"
          gradientTransform="matrix(-1.11972 -74.33 76.2159 -1.09201 58.738 85.97)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#C6C6C6"></stop>
          <stop offset="1" stopColor="#fff"></stop>
        </linearGradient>
        <linearGradient
          id="_Linear4"
          x1="0"
          x2="1"
          y1="0"
          y2="0"
          gradientTransform="matrix(-1.11972 -74.33 76.2159 -1.09201 58.738 85.97)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="silver"></stop>
          <stop offset="1" stopColor="#fff"></stop>
        </linearGradient>
        <linearGradient
          id="_Linear5"
          x1="0"
          x2="1"
          y1="0"
          y2="0"
          gradientTransform="matrix(-10.8715 -117.76 97.9328 -9.04112 113.39 129.751)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#A6A6A6"></stop>
          <stop offset="0.07" stopColor="#E8E8E8"></stop>
          <stop offset="1" stopColor="#6B6B6B"></stop>
        </linearGradient>
        <linearGradient
          id="_Linear6"
          x1="0"
          x2="1"
          y1="0"
          y2="0"
          gradientTransform="scale(-5.06928) rotate(84.88 6.205 -22.738)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0"></stop>
          <stop offset="1" stopColor="#404040"></stop>
        </linearGradient>
        <linearGradient
          id="_Linear7"
          x1="0"
          x2="1"
          y1="0"
          y2="0"
          gradientTransform="scale(-42.2515) rotate(71.806 1.2 -4.198)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#E4E4E4"></stop>
          <stop offset="1" stopColor="#6D6D6D"></stop>
        </linearGradient>
        <image
          id="_Image8"
          width="65"
          height="12"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAAMCAYAAAA9MdD3AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAC/UlEQVRIic2Wy07bQBSGz5imRiiS7TRiAb1I3bWqKtFNK+j9MXgBFtmx4SV4CNYs2WVpIYRERerQRZO4SKWolCQeB8eD5+7poqWq2nBLoqr/5ngWM57/+8+MBsF/JN/3kZTS0VrfNca4AOABgGdZlgcAHkLIQwi5AECNMQGl9D0h5N3i4qIa5b9oHJu/ira2tiYYY9Oc8xmttZvneQkAXPhhzgWAEkLItSzLmZiYsBBCYFkWXFQRQsAY60op64SQ4Pj4eLtSqZDr7m0sEDY3N23G2CyldFpK6WmtXQBwjTEl+JGmixDyAKD4uwHLsuDP8TD17DvLMnJ6evohSZLg4OBge2VlpT0yhCAIUJZlxX6/f4cQcktK6SqlvDzPPWOMBz+TBADPGGMDwNBGzjN23TlnyrJM9nq9j0mSBK1WaycIgk8bGxtmIIRqtfo4TdOyEMKTUrpaay/Pc9cY4+V57mmtHaXUjVGMjDPti9Y6T5xz026395MkqTebzVq1Wq3t7u7mvyCsr68/IIS8FkLMCyGmB5IaMaFxpn1evaq01nB4ePit1+sFYRjWfd/f/jV7bW3N5py/VEo911o/AYCbZwD+p7QH1ctkjIE0TU0URSdKKSyEwJRSnKYp9n2/OxDh6urqbcuy3iKEnhcKhXvDGPhXnYMQAmMMxHGsT05OYqUU5pxjxhgmhMQYY7y/vx/V6/UvzWYTA8Bf98KFfbS8vIwcx3k2NTX1wrbtp7ZtF8dl5DqQjDGAMeaMsVhKiaWUMaU0IoTgKIpwGIbRzs7O56Ojo/TSthigKx+mSqXilcvlt8ViccFxnIeFQgGNC4ZSCuI4PhVCxEopLKXEjDGcpmnc6XSiVqvV2dvb+9LpdOgwJscG4XctLS09mp2dfeU4znypVCpflirnHJIk6SulsNYaCyEiSmmcpinudru40Wgc12q1Q875SC+/YTXSY2lhYWFybm7uzczMzPzk5OR9Y0xPKRX9bFfc7/ejdruNwzD82mg02pTS/PJV/72+Ax/81v2LGSBvAAAAAElFTkSuQmCC"
        ></image>
        <linearGradient
          id="_Linear9"
          x1="0"
          x2="1"
          y1="0"
          y2="0"
          gradientTransform="scale(21.1194) rotate(60.722 -2.807 7.76)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#151516"></stop>
          <stop offset="1" stopColor="#5E5E5E"></stop>
        </linearGradient>
        <linearGradient
          id="_Linear10"
          x1="0"
          x2="1"
          y1="0"
          y2="0"
          gradientTransform="scale(1.2664) rotate(85.074 -23.17 91.29)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#D5D5D5"></stop>
          <stop offset="1" stopColor="#16161A"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

function Arrows() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 100 100"
      style={{
        width: "300px",
        height: "300px",
        position: "absolute",
        top: "850px",
        right: "155px",
        zIndex: "1000",
      }}
    >
      <path
        id="in"
        fill="var(--dark)"
        d="M18.533 53.594v-9.528h59.899v-8.848L97.588 48.83 78.432 62.442v-8.848H18.533z"
        transform="matrix(-.96288 0 0 -1.35509 94.073 122.646)"
      ></path>
      <path
        id="out"
        fill="var(--dark)"
        d="M18.533 53.594v-9.528h59.899v-8.848L97.588 48.83 78.432 62.442v-8.848H18.533z"
        transform="matrix(.96288 0 0 1.35509 5.707 -24.793)"
      ></path>
    </svg>
  );
}

function FullstackSection() {
  useEffect(() => {
    let inArrow = document.getElementById("in");
    let outArrow = document.getElementById("out");
    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        outArrow.classList.remove(styles.primaryColor);
        inArrow.classList.add(styles.primaryColor);
      } else {
        inArrow.classList.remove(styles.primaryColor);
        outArrow.classList.add(styles.primaryColor);
      }
      lastScrollTop = st <= 0 ? 0 : st;
    });
  });

  return (
    <div className={styles.container}>
      <div className={styles.fullstackTextContainer}>
        <div className="heroTitle">
          <span style={{ color: "var(--lightGrey)" }}>Full</span>
          <span>Stack</span>
        </div>
        <div className={styles.fullstackText}>
          I have firm fundamentals in REST API development and Server-Side
          N-Tier archetecture for interaction with databases with CRUD
          operations. My development style involves sing SOLID primciples and
          software development best practices.
        </div>
      </div>
      <Laptop />
      <Arrows />
      <button style={{ marginTop: "30px", marginRight: "40px" }}>
        More Info
      </button>
    </div>
  );
}

export default FullstackSection;
