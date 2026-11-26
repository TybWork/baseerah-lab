import * as React from "react";
import { SVGProps } from "react";

export const GooglePlayIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <mask
      id="a"
      width={24}
      height={26}
      x={7}
      y={3}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path
        fill="#C4C4C4"
        d="M30.048 14.4a1.82 1.82 0 0 1 0 3.2L9.756 28.766c-1.235.68-2.756-.203-2.756-1.6V4.834c0-1.397 1.52-2.28 2.756-1.6L30.048 14.4Z"
      />
    </mask>

    <g mask="url(#a)">
      <path
        fill="url(#b)"
        d="m7.635 28.547 12.657-12.73L7.843 3.3A1.807 1.807 0 0 0 7 4.834v22.332c0 .57.252 1.053.635 1.38Z"
      />

      <path
        fill="url(#c)"
        d="M30.048 14.4a1.82 1.82 0 0 1 0 3.2l-5.12 2.816-4.636-4.598 4.4-4.365 5.356 2.947Z"
      />

      <path
        fill="url(#d)"
        d="m24.93 20.417-4.638-4.6-12.657 12.73c.556.476 1.389.622 2.121.219l15.173-8.35Z"
      />

      <path
        fill="url(#e)"
        d="m7.843 3.299 12.449 12.519 4.4-4.365L9.756 3.234a1.859 1.859 0 0 0-1.913.065Z"
      />
    </g>

    <defs>
      <linearGradient
        id="b"
        x1={15.677}
        x2={7.071}
        y1={10.874}
        y2={19.551}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00C3FF" />
        <stop offset={1} stopColor="#1BE2FA" />
      </linearGradient>

      <linearGradient
        id="c"
        x1={20.292}
        x2={31.738}
        y1={15.818}
        y2={15.818}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFCE00" />
        <stop offset={1} stopColor="#FFEA00" />
      </linearGradient>

      <linearGradient
        id="d"
        x1={7.369}
        x2={22.595}
        y1={30.1}
        y2={17.894}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DE2453" />
        <stop offset={1} stopColor="#FE3944" />
      </linearGradient>

      <linearGradient
        id="e"
        x1={8.107}
        x2={22.597}
        y1={1.901}
        y2={13.736}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#11D574" />
        <stop offset={1} stopColor="#01F176" />
      </linearGradient>
    </defs>
  </svg>
);
