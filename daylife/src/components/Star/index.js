import Image from "next/image";
const Star = ({ border, color, width, height }) => {
  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 29 29"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m24.004 12.2689 4.9053 2.6926-4.9053 2.6854c-2.7191 1.4701-4.9568 3.6928-6.445 6.4021l-2.6855 4.9125-2.6209-4.9125c-1.4873-2.71-3.72519-4.933-6.44505-6.4021l-4.91253-2.6854 4.91253-2.6926c2.71986-1.469 4.95775-3.69204 6.44505-6.40201l2.6854-4.912544 2.6854 4.912544c1.4709 2.70029 3.6852 4.92211 6.3806 6.40201z"
        fill={color}
        stroke={border}
      />
    </svg>
  );
};

export default Star;
