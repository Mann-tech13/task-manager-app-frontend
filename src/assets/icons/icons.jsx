/* eslint-disable react/prop-types */
export function Search() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.0928 15.9075L14.0011 12.8409C15.2012 11.3445 15.7824 9.44527 15.6251 7.5336C15.4679 5.62194 14.5842 3.84317 13.1557 2.56306C11.7273 1.28294 9.86265 0.59878 7.94524 0.651247C6.02784 0.703714 4.20341 1.48882 2.84709 2.84514C1.49078 4.20146 0.705667 6.02589 0.6532 7.94329C0.600733 9.86069 1.2849 11.7253 2.56501 13.1538C3.84513 14.5822 5.62389 15.466 7.53556 15.6232C9.44722 15.7804 11.3465 15.1993 12.8428 13.9992L15.9095 17.0659C15.9869 17.144 16.0791 17.206 16.1807 17.2483C16.2822 17.2906 16.3911 17.3124 16.5011 17.3124C16.6112 17.3124 16.7201 17.2906 16.8216 17.2483C16.9232 17.206 17.0153 17.144 17.0928 17.0659C17.243 16.9105 17.327 16.7028 17.327 16.4867C17.327 16.2706 17.243 16.0629 17.0928 15.9075ZM8.16781 13.9992C7.01408 13.9992 5.88627 13.6571 4.92698 13.0161C3.96769 12.3751 3.22002 11.4641 2.77851 10.3982C2.337 9.33227 2.22148 8.15938 2.44656 7.02783C2.67164 5.89627 3.22721 4.85687 4.04302 4.04107C4.85882 3.22526 5.89823 2.66969 7.02978 2.44461C8.16134 2.21953 9.33423 2.33505 10.4001 2.77656C11.466 3.21807 12.3771 3.96574 13.018 4.92503C13.659 5.88432 14.0011 7.01213 14.0011 8.16585C14.0011 9.71295 13.3866 11.1967 12.2926 12.2906C11.1986 13.3846 9.7149 13.9992 8.16781 13.9992Z"
        fill="#9B9B9B"
      />
    </svg>
  );
}

export function Hamburger() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4993 18.6667H29.4993C29.7204 18.6667 29.9323 18.5789 30.0886 18.4226C30.2449 18.2663 30.3327 18.0543 30.3327 17.8333C30.3327 17.6123 30.2449 17.4004 30.0886 17.2441C29.9323 17.0878 29.7204 17 29.4993 17H14.4993C14.2783 17 14.0664 17.0878 13.9101 17.2441C13.7538 17.4004 13.666 17.6123 13.666 17.8333C13.666 18.0543 13.7538 18.2663 13.9101 18.4226C14.0664 18.5789 14.2783 18.6667 14.4993 18.6667ZM29.4993 25.3333H14.4993C14.2783 25.3333 14.0664 25.4211 13.9101 25.5774C13.7538 25.7337 13.666 25.9457 13.666 26.1667C13.666 26.3877 13.7538 26.5996 13.9101 26.7559C14.0664 26.9122 14.2783 27 14.4993 27H29.4993C29.7204 27 29.9323 26.9122 30.0886 26.7559C30.2449 26.5996 30.3327 26.3877 30.3327 26.1667C30.3327 25.9457 30.2449 25.7337 30.0886 25.5774C29.9323 25.4211 29.7204 25.3333 29.4993 25.3333ZM29.4993 21.1667H14.4993C14.2783 21.1667 14.0664 21.2545 13.9101 21.4107C13.7538 21.567 13.666 21.779 13.666 22C13.666 22.221 13.7538 22.433 13.9101 22.5893C14.0664 22.7455 14.2783 22.8333 14.4993 22.8333H29.4993C29.7204 22.8333 29.9323 22.7455 30.0886 22.5893C30.2449 22.433 30.3327 22.221 30.3327 22C30.3327 21.779 30.2449 21.567 30.0886 21.4107C29.9323 21.2545 29.7204 21.1667 29.4993 21.1667Z"
        fill="#D2D2D2"
      />
    </svg>
  );
}

export function ManageSVG(props) {
  return (
    <svg
      width="18px"
      height="18px"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={props.fill}
        d="M18,12.382V17a1,1,0,0,1-1,1H12.277c.142-.125.278-.252.407-.379L14.329,16H16V14.353Zm0-6.17a3.129,3.129,0,0,0-3.328.685L13.553,8H2v8H6.3a3.49,3.49,0,0,0-.283,2H1a1,1,0,0,1-1-1V4A1,1,0,0,1,1,3H4V1A1,1,0,0,1,6,1V3h6V1a1,1,0,0,1,2,0V3h3a1,1,0,0,1,1,1V6.212Z"
      />
      <path
        fill={props.fill}
        d="M17.675,9.9l-6.4,6.3c-.437.431-2.762,2.005-3.2,1.571s1.169-2.714,1.6-3.145l6.4-6.3a1.135,1.135,0,0,1,1.59.008A1.1,1.1,0,0,1,17.675,9.9Z"
      />
    </svg>
  );
}

export function Cross() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.1746 22.0002L28.4246 16.7585C28.5815 16.6016 28.6697 16.3887 28.6697 16.1668C28.6697 15.9449 28.5815 15.7321 28.4246 15.5752C28.2677 15.4182 28.0549 15.3301 27.833 15.3301C27.611 15.3301 27.3982 15.4182 27.2413 15.5752L21.9996 20.8252L16.758 15.5752C16.601 15.4182 16.3882 15.3301 16.1663 15.3301C15.9444 15.3301 15.7315 15.4182 15.5746 15.5752C15.4177 15.7321 15.3295 15.9449 15.3295 16.1668C15.3295 16.3887 15.4177 16.6016 15.5746 16.7585L20.8246 22.0002L15.5746 27.2418C15.4965 27.3193 15.4345 27.4115 15.3922 27.513C15.3499 27.6146 15.3281 27.7235 15.3281 27.8335C15.3281 27.9435 15.3499 28.0524 15.3922 28.154C15.4345 28.2555 15.4965 28.3477 15.5746 28.4252C15.6521 28.5033 15.7443 28.5653 15.8458 28.6076C15.9474 28.6499 16.0563 28.6717 16.1663 28.6717C16.2763 28.6717 16.3852 28.6499 16.4868 28.6076C16.5883 28.5653 16.6805 28.5033 16.758 28.4252L21.9996 23.1752L27.2413 28.4252C27.3188 28.5033 27.4109 28.5653 27.5125 28.6076C27.614 28.6499 27.7229 28.6717 27.833 28.6717C27.943 28.6717 28.0519 28.6499 28.1534 28.6076C28.255 28.5653 28.3472 28.5033 28.4246 28.4252C28.5027 28.3477 28.5647 28.2555 28.607 28.154C28.6493 28.0524 28.6711 27.9435 28.6711 27.8335C28.6711 27.7235 28.6493 27.6146 28.607 27.513C28.5647 27.4115 28.5027 27.3193 28.4246 27.2418L23.1746 22.0002Z"
        fill="#D2D2D2"
      />
    </svg>
  );
}

export function CrossIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.9398 8.00012L13.1398 3.80679C13.2653 3.68125 13.3359 3.51099 13.3359 3.33346C13.3359 3.15592 13.2653 2.98566 13.1398 2.86012C13.0143 2.73459 12.844 2.66406 12.6665 2.66406C12.4889 2.66406 12.3187 2.73459 12.1931 2.86012L7.9998 7.06012L3.80646 2.86012C3.68093 2.73459 3.51066 2.66406 3.33313 2.66406C3.1556 2.66406 2.98533 2.73459 2.8598 2.86012C2.73426 2.98566 2.66374 3.15592 2.66374 3.33346C2.66374 3.51099 2.73426 3.68125 2.8598 3.80679L7.0598 8.00012L2.8598 12.1935C2.79731 12.2554 2.74771 12.3292 2.71387 12.4104C2.68002 12.4916 2.6626 12.5788 2.6626 12.6668C2.6626 12.7548 2.68002 12.8419 2.71387 12.9232C2.74771 13.0044 2.79731 13.0781 2.8598 13.1401C2.92177 13.2026 2.99551 13.2522 3.07675 13.2861C3.15798 13.3199 3.24512 13.3373 3.33313 13.3373C3.42114 13.3373 3.50827 13.3199 3.58951 13.2861C3.67075 13.2522 3.74449 13.2026 3.80646 13.1401L7.9998 8.94012L12.1931 13.1401C12.2551 13.2026 12.3288 13.2522 12.4101 13.2861C12.4913 13.3199 12.5785 13.3373 12.6665 13.3373C12.7545 13.3373 12.8416 13.3199 12.9228 13.2861C13.0041 13.2522 13.0778 13.2026 13.1398 13.1401C13.2023 13.0781 13.2519 13.0044 13.2857 12.9232C13.3196 12.8419 13.337 12.7548 13.337 12.6668C13.337 12.5788 13.3196 12.4916 13.2857 12.4104C13.2519 12.3292 13.2023 12.2554 13.1398 12.1935L8.9398 8.00012Z"
        fill="#9B9B9B"
      />
    </svg>
  );
}

export function RightForwardSVG(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 100 100"
      width="26"
      height="26"
    >
      <g>
        <polygon
          fill={props.fill}
          points="38.7,34.4 32.1,34.4 47.7,50 32,65.6 38.7,65.6 54.5,50"
        />
        <polygon
          fill={props.fill}
          points="68.7,24 68.7,30.5 88.1,50 68.6,69.5 68.6,76 94.9,50"
        />
        <polygon
          fill={props.fill}
          points="11.8,34.4 5.2,34.4 20.7,50 5.1,65.6 11.7,65.6 27.5,50"
        />
        <polygon
          fill={props.fill}
          points="25.3,34.4 18.6,34.4 34.2,50 18.6,65.6 25.2,65.6 41,50"
        />
        <polygon
          fill={props.fill}
          points="52.2,34.4 45.6,34.4 61.1,50 45.5,65.6 52.1,65.6 68,50"
        />
        <polygon
          fill={props.fill}
          points="65.7,34.4 59.1,34.4 74.6,50 59,65.6 65.7,65.6 81.4,50"
        />
      </g>
    </svg>
  );
}

export function LeftBackwardSVG(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 100 100"
      width="26"
      height="26"
    >
      <g>
        <polygon
          fill={props.fill}
          points="61.3, 65.6, 67.9, 65.6, 52.3, 50, 68, 34.4, 61.3, 34.4, 45.5, 50"
        />
        <polygon
          fill={props.fill}
          points="31.3,24 31.3,30.5 11.9,50 31.4,69.5 31.4,76 5.1,50"
        />
        <polygon
          fill={props.fill}
          points="88.2,34.4 94.8,34.4 79.3,50 94.9,65.6 88.3,65.6 72.5,50"
        />
        <polygon
          fill={props.fill}
          points="74.7,34.4 81.4,34.4 65.8,50 81.4,65.6 74.8,65.6 59,50"
        />
        <polygon
          fill={props.fill}
          points="47.8,34.4 54.4,34.4 38.9,50 54.5,65.6 47.9,65.6 32,50"
        />
        <polygon
          fill={props.fill}
          points="34.3,34.4 40.9,34.4 25.4,50 40.9,65.6 34.3,65.6 18.6,50"
        />
      </g>
    </svg>
  );
}

export function CalendarSVG(props) {
  return (
    <svg
      width="22px"
      height="22px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" />
      <g filter="url(#filter0_d_15_268)">
        <path
          d="M3 8.26667V19C3 19.5523 3.44772 20 4 20H20C20.5523 20 21 19.5523 21 19V8.26667M3 8.26667V5C3 4.44772 3.44772 4 4 4H20C20.5523 4 21 4.44772 21 5V8.26667M3 8.26667H21"
          stroke={props.fill}
          strokeLinejoin="round"
        />
      </g>
      <g filter="url(#filter1_d_15_268)">
        <path
          d="M7 2V5"
          stroke={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g filter="url(#filter2_d_15_268)">
        <path
          d="M17 2V5"
          stroke={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g filter="url(#filter3_d_15_268)">
        <path
          d="M18 11H16"
          stroke={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g filter="url(#filter4_d_15_268)">
        <path
          d="M18 17H16"
          stroke={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g filter="url(#filter5_d_15_268)">
        <path
          d="M13 11H11"
          stroke={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g filter="url(#filter6_d_15_268)">
        <path
          d="M13 17H11"
          stroke={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g filter="url(#filter7_d_15_268)">
        <path
          d="M8 11H6"
          stroke={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g filter="url(#filter8_d_15_268)">
        <path
          d="M8 17H6"
          stroke={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g filter="url(#filter9_d_15_268)">
        <path
          d="M18 14H16"
          stroke={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g filter="url(#filter10_d_15_268)">
        <path
          d="M13 14H11"
          stroke={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g filter="url(#filter11_d_15_268)">
        <path
          d="M8 14H6"
          stroke={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_15_268"
          x="1.5"
          y="3.5"
          width="21"
          height="19"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_15_268"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_15_268"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_15_268"
          x="5.5"
          y="1.5"
          width="3"
          height="6"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_15_268"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_15_268"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_15_268"
          x="15.5"
          y="1.5"
          width="3"
          height="6"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_15_268"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_15_268"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_d_15_268"
          x="14.5"
          y="10.5"
          width="5"
          height="3"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_15_268"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_15_268"
            result="shape"
          />
        </filter>
        <filter
          id="filter4_d_15_268"
          x="14.5"
          y="16.5"
          width="5"
          height="3"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_15_268"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_15_268"
            result="shape"
          />
        </filter>
        <filter
          id="filter5_d_15_268"
          x="9.5"
          y="10.5"
          width="5"
          height="3"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_15_268"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_15_268"
            result="shape"
          />
        </filter>
        <filter
          id="filter6_d_15_268"
          x="9.5"
          y="16.5"
          width="5"
          height="3"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_15_268"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_15_268"
            result="shape"
          />
        </filter>
        <filter
          id="filter7_d_15_268"
          x="4.5"
          y="10.5"
          width="5"
          height="3"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_15_268"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_15_268"
            result="shape"
          />
        </filter>
        <filter
          id="filter8_d_15_268"
          x="4.5"
          y="16.5"
          width="5"
          height="3"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_15_268"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_15_268"
            result="shape"
          />
        </filter>
        <filter
          id="filter9_d_15_268"
          x="14.5"
          y="13.5"
          width="5"
          height="3"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_15_268"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_15_268"
            result="shape"
          />
        </filter>
        <filter
          id="filter10_d_15_268"
          x="9.5"
          y="13.5"
          width="5"
          height="3"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_15_268"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_15_268"
            result="shape"
          />
        </filter>
        <filter
          id="filter11_d_15_268"
          x="4.5"
          y="13.5"
          width="5"
          height="3"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_15_268"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_15_268"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export function AuthSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      width="400"
      height="400"
      viewBox="0 0 866.52362 637.05628"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M971.73819,768.52814v-72.34S999.92985,747.47411,971.73819,768.52814Z"
        transform="translate(-166.73819 -131.47186)"
        fill="#f1f1f1"
      />
      <path
        d="M973.47966,768.51541,920.19,719.59417S977.03523,733.5097,973.47966,768.51541Z"
        transform="translate(-166.73819 -131.47186)"
        fill="#f1f1f1"
      />
      <path
        d="M743.26636,577.44241a9.09535,9.09535,0,0,1,9.85146-9.872l9.60661-18.431,12.62434,3.10614-13.932,25.83764a9.14461,9.14461,0,0,1-18.15045-.64078Z"
        transform="translate(-166.73819 -131.47186)"
        fill="#ffb7b7"
      />
      <polygon
        points="633.871 625.527 623.218 625.526 618.15 584.437 633.873 584.438 633.871 625.527"
        fill="#ffb7b7"
      />
      <path
        d="M803.32565,767.32462l-34.34883-.00127v-.43446a13.37025,13.37025,0,0,1,13.36952-13.36931h.00085l20.9791.00085Z"
        transform="translate(-166.73819 -131.47186)"
        fill="#2f2e41"
      />
      <polygon
        points="719.549 617.569 709.271 620.371 693.57 582.063 708.739 577.927 719.549 617.569"
        fill="#ffb7b7"
      />
      <path
        d="M891.62477,758.288,858.486,767.32462l-.11432-.41915a13.37025,13.37025,0,0,1,9.38068-16.416l.00082-.00022L887.99322,744.97Z"
        transform="translate(-166.73819 -131.47186)"
        fill="#2f2e41"
      />
      <polygon
        points="614.423 448.033 609.109 528.727 620.524 619.261 639.221 613.554 640.009 532.663 654.966 486.018 699.25 610.602 719.521 603.123 702.792 522.232 693.345 446.262 614.423 448.033"
        fill="#2f2e41"
      />
      <path
        d="M832.82255,437.80621,801.33678,442.449,789.994,453.66711l-3.5219,40.30669,2.18745,35.702-9.11869,62.959s22.93018-12.72919,40.70053,3.20519,42.63547,2.816,43.147-7.784Z"
        transform="translate(-166.73819 -131.47186)"
        fill="#cbcbcb"
      />
      <path
        d="M816.83429,488.35732l-.00043-.04526,15.64133-50.984.20211-.01318c1.11327-.07248,27.33679-1.618,33.20236,11.33006l.02836.06246-1.78163,52.983,2.45371,82.97939-48.50061,10.50471-.35252.07678Z"
        transform="translate(-166.73819 -131.47186)"
        fill="#2f2e41"
      />
      <path
        d="M799.50072,484.833l2.86926-43.2209c-20.40666,1.2694-20.09926,15.73786-20.07577,16.3687l-.223,64.64973-4.08709,69.1641,14.86038-1.11441Z"
        transform="translate(-166.73819 -131.47186)"
        fill="#2f2e41"
      />
      <path
        d="M753.48519,563.47709l18.11738-42.04748L784.248,498.208l6.60212,41.88934-22.9224,34.38352Z"
        transform="translate(-166.73819 -131.47186)"
        fill="#2f2e41"
      />
      <path
        d="M828.36,548.00623a9.09534,9.09534,0,0,1,12.32532-6.52638l14.61634-14.77674,11.14617,6.69216L845.51367,553.973A9.14461,9.14461,0,0,1,828.36,548.00623Z"
        transform="translate(-166.73819 -131.47186)"
        fill="#ffb7b7"
      />
      <path
        d="M840.65123,536.08544,870.45248,503.393,850.72593,475.2442l2.03043-13.762L864.38293,447.12l.2269.29336c1.23932,1.60372,30.36218,39.43935,31.19784,53.76257.83853,14.37622-41.02087,50.74162-42.80336,52.28232l-.24766.21428Z"
        transform="translate(-166.73819 -131.47186)"
        fill="#2f2e41"
      />
      <circle cx="647.9164" cy="281.61187" r="21.18132" fill="#ffb7b7" />
      <path
        d="M834.57593,396.15035l1.02686-2.06675-5.1669-2.56715s-5.69991-9.27437-16.01412-6.66807-14.95472,4.16612-14.95472,4.16612l-5.15383,2.59323,2.58668,2.57367-4.6404,1.55986,3.10011,1.54028-3.60707,2.07328,1.94177,10.62831s3.22513-8.06117,9.42537-4.98062,17.5414-1.59245,17.5414-1.59245l9.853,19.06862s2.03267-6.6845,5.65681-4.9021C836.17091,417.57661,845.42963,402.83144,834.57593,396.15035Z"
        transform="translate(-166.73819 -131.47186)"
        fill="#2f2e41"
      />
      <path
        d="M594.90728,516.06962,272.80489,604.901,166.73819,220.3032l322.10239-88.83134Z"
        transform="translate(-166.73819 -131.47186)"
        fill="#fff"
      />
      <path
        d="M594.90728,516.06962,272.80489,604.901,166.73819,220.3032l322.10239-88.83134ZM276.92016,597.65144l310.73759-85.69709-102.93244-373.233-310.7376,85.6971Z"
        transform="translate(-166.73819 -131.47186)"
        fill="#f1f1f1"
      />
      <path
        d="M418.744,303.76532l-80.741,22.26726a4.46018,4.46018,0,0,1-5.47917-3.11031l-22.26725-80.74105a4.46017,4.46017,0,0,1,3.11031-5.47917l80.74105-22.26725a4.46016,4.46016,0,0,1,5.47916,3.11031l22.26726,80.74105A4.46016,4.46016,0,0,1,418.744,303.76532ZM313.8406,238.42a2.676,2.676,0,0,0-1.86619,3.2875l22.26726,80.74105a2.676,2.676,0,0,0,3.2875,1.86619l80.741-22.26726a2.676,2.676,0,0,0,1.86619-3.2875l-22.26726-80.741a2.676,2.676,0,0,0-3.2875-1.86619Z"
        transform="translate(-166.73819 -131.47186)"
        fill="#e5e5e5"
      />
      <path
        d="M398.2766,320.03913l-80.741,22.26726a4.01409,4.01409,0,0,1-4.93125-2.79928L290.337,258.76606a4.01409,4.01409,0,0,1,2.79928-4.93125l80.741-22.26726a4.01409,4.01409,0,0,1,4.93125,2.79928l22.26726,80.74105A4.01408,4.01408,0,0,1,398.2766,320.03913Z"
        transform="translate(-166.73819 -131.47186)"
        fill="#6c63ff"
      />
      <rect
        x="263.48929"
        y="361.96862"
        width="233.72825"
        height="9.03209"
        transform="translate(-250.48374 -17.16149) rotate(-15.41811)"
        fill="#f1f1f1"
      />
      <rect
        x="269.75017"
        y="384.67055"
        width="233.72825"
        height="9.03209"
        transform="translate(-256.29398 -14.67996) rotate(-15.41811)"
        fill="#f1f1f1"
      />
      <rect
        x="276.01104"
        y="407.37248"
        width="233.72825"
        height="9.03209"
        transform="translate(-262.10422 -12.19843) rotate(-15.41811)"
        fill="#f1f1f1"
      />
      <rect
        x="287.03019"
        y="447.32789"
        width="233.72825"
        height="9.03209"
        transform="translate(-272.33023 -7.83093) rotate(-15.41811)"
        fill="#f1f1f1"
      />
      <rect
        x="293.29106"
        y="470.02982"
        width="233.72825"
        height="9.03209"
        transform="translate(-278.14047 -5.34939) rotate(-15.41811)"
        fill="#f1f1f1"
      />
      <rect
        x="299.55194"
        y="492.73176"
        width="233.72825"
        height="9.03209"
        transform="translate(-283.9507 -2.86786) rotate(-15.41811)"
        fill="#f1f1f1"
      />
      <path
        d="M698.0144,603.61617H363.88724V204.66055H698.0144Z"
        transform="translate(-166.73819 -131.47186)"
        fill="#fff"
      />
      <path
        d="M698.0144,603.61617H363.88724V204.66055H698.0144Zm-328.23263-5.89454H692.11986V210.55508H369.78177Z"
        transform="translate(-166.73819 -131.47186)"
        fill="#e5e5e5"
      />
      <rect
        x="279.40817"
        y="244.69464"
        width="191.03421"
        height="9.03209"
        fill="#6c63ff"
      />
      <rect
        x="279.40817"
        y="268.17807"
        width="191.03421"
        height="9.03209"
        fill="#6c63ff"
      />
      <rect
        x="279.40817"
        y="291.66149"
        width="191.03421"
        height="9.03209"
        fill="#6c63ff"
      />
      <circle cx="263.87741" cy="250.53394" r="5.89453" fill="#6c63ff" />
      <rect
        x="279.40817"
        y="143.50512"
        width="191.03421"
        height="9.03209"
        fill="#e5e5e5"
      />
      <rect
        x="279.40817"
        y="166.98855"
        width="191.03421"
        height="9.03209"
        fill="#e5e5e5"
      />
      <rect
        x="279.40817"
        y="190.47198"
        width="191.03421"
        height="9.03209"
        fill="#e5e5e5"
      />
      <circle cx="263.87741" cy="148.36201" r="5.89453" fill="#e5e5e5" />
      <rect
        x="279.40817"
        y="346.86657"
        width="191.03421"
        height="9.03209"
        fill="#e5e5e5"
      />
      <rect
        x="279.40817"
        y="370.35"
        width="191.03421"
        height="9.03209"
        fill="#e5e5e5"
      />
      <rect
        x="279.40817"
        y="393.83343"
        width="191.03421"
        height="9.03209"
        fill="#e5e5e5"
      />
      <circle cx="263.87741" cy="351.72346" r="5.89453" fill="#e5e5e5" />
      <circle cx="515.67691" cy="438.20509" r="68.29339" fill="#6c63ff" />
      <path
        d="M701.33633,565.32032V552.25311a18.92123,18.92123,0,1,0-37.84245,0v13.06721a9.83809,9.83809,0,0,0-9.39555,9.82325v30.87926h56.63355V575.14357A9.83809,9.83809,0,0,0,701.33633,565.32032ZM682.4151,539.99384a12.27276,12.27276,0,0,1,12.25846,12.25927v13.04444H670.15665V552.25311A12.27275,12.27275,0,0,1,682.4151,539.99384Z"
        transform="translate(-166.73819 -131.47186)"
        fill="#fff"
      />
      <path
        d="M687.50571,580.56948a5.09061,5.09061,0,1,0-7.95433,4.207v11.065H685.278v-11.065A5.08421,5.08421,0,0,0,687.50571,580.56948Z"
        transform="translate(-166.73819 -131.47186)"
        fill="#6c63ff"
      />
      <path
        d="M1032.26181,768.12193h-381a1,1,0,0,1,0-2h381a1,1,0,0,1,0,2Z"
        transform="translate(-166.73819 -131.47186)"
        fill="#cbcbcb"
      />
    </svg>
  );
}
