const HostingLogo = ({ className = "w-[170px] h-[30px]" }) => {
  return (
    <svg
      viewBox="0 0 170 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Hosting"
      role="img"
      className={className}
    >
      {/* ICON */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.000249566 14.046V0.000497794L7.08916 3.78046V10.1086L16.4735 10.1132L23.6774 14.046H0.000249566ZM18.3925 8.95058V0L25.6725 3.6859V13.1797L18.3925 8.95058ZM18.3924 26.1177V19.8441L8.93577 19.8375C8.9446 19.8793 1.6123 15.8418 1.6123 15.8418L25.6725 15.9547V30L18.3924 26.1177ZM0 26.1177L0.000252212 16.9393L7.08916 21.0683V29.8033L0 26.1177Z"
        fill="#252524"

      />

      {/* TEXT */}
      <text
        x="37"
        y="21"
        fill="#222220"
        fontSize="18"
        fontWeight="extrabold"
        style={{
          fontFamily: "var(--font-dm-sans)",
          fontVariationSettings: '"wght" 900',
          letterSpacing: "1.2px",
          textShadow: "0px 1px 2px rgba(0,0,0,0.18)",
        }}
      >
        HOSTING
      </text>
    </svg>
  );
};


const HLogo = ({ className = "w-10 h-10" }) => (
  <div
    className={`${className} rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center shadow-lg`}
  >
    <i className="ri-bank-line text-white text-2xl" />
  </div>
);

export default HLogo;

const HLogoB = ({ className = "w-[40px] h-[40px]" }) => {
  return (
    <svg
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="HLogo "
      role="img"
      className={className}
    >
      {/* ICON */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.000249566 14.046V0.000497794L7.08916 3.78046V10.1086L16.4735 10.1132L23.6774 14.046H0.000249566ZM18.3925 8.95058V0L25.6725 3.6859V13.1797L18.3925 8.95058ZM18.3924 26.1177V19.8441L8.93577 19.8375C8.9446 19.8793 1.6123 15.8418 1.6123 15.8418L25.6725 15.9547V30L18.3924 26.1177ZM0 26.1177L0.000252212 16.9393L7.08916 21.0683V29.8033L0 26.1177Z"
        fill="#2c54c2"

      />

    </svg>
  );
};

const CloseIcon = () => (
  <svg
    className="w-3.5 h-3.5"
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
  >
    <path
      d="M18 6L6 18M6 6l12 12"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const ArrowDownIcon = () => (
  <svg
    className="w-3.5 h-3.5"
    viewBox="0 0 24 24"
    stroke="currentColor"
    fill="none"
  >
    <path
      d="M6 9l6 6 6-6"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const ArrowUp = () => {
  return (
    <svg
      className="w-3 h-3"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
};

export { HostingLogo, HLogo, HLogoB, CloseIcon, ArrowDownIcon, ArrowUp };