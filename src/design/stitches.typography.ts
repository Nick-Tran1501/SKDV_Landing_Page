/* eslint-disable import/no-anonymous-default-export */
export default {
  fontSizes: {
    "10px": "calc(10rem / 16)",
    "12px": "calc(12rem / 16)",
    "13px": "calc(13rem / 16)",
    "14px": "calc(14rem / 16)",
    "16px": "calc(16rem / 16)",
    "18px": "calc(18rem / 16)",
    "20px": "calc(20rem / 16)",
    "24px": "calc(24rem / 16)",
    "28px": "calc(28rem / 16)",
    "32px": "calc(32rem / 16)",
    "36px": "calc(36rem / 16)",
    "40px": "calc(40rem / 16)",
    "48px": "calc(48rem / 16)",
    "64px": "calc(64rem / 16)",
  },
  fontWeights: {
    lighter: 300,
    light: 400,
    normal: 500,
    semiBold: 600,
    bold: 700,
  },
  lineHeights: {
    x1: "10px",
    x2: "20px",
    x3: "30px",
  },
  letterSpacings: {},
  fonts: {
    headerFont: "Lora, sans-serif",
    bodyFont: "Inter, sans-serif",
  },
};

export const typoUtils = {
  boldHeader: (size: "number" | "string") => ({
    fontFamily: "$headerFont",
    fontWeight: "$bold",
    fontSize: size,
  }),
  boldBody: (size: "number" | "string") => ({
    fontFamily: "$bodyFont",
    fontWeight: "$bold",
    fontSize: size,
  }),
  semiBoldBody: (size: "number" | "string") => ({
    fontFamily: "$bodyFont",
    fontWeight: "$semiBold",
    fontSize: size,
  }),
  normalBody: (size: "number" | "string") => ({
    fontFamily: "$bodyFont",
    fontWeight: "$normal",
    fontSize: size,
  }),
  lightBody: (size: "number" | "string") => ({
    fontFamily: "$bodyFont",
    fontWeight: "$light",
    fontSize: size,
  }),
};

export const globalTypo = {
  [`input, textarea, select`]: {
    fontSize: "$16px",
    "&::placeholder": {
      color: "#7c7c7c",
    },
  },
  label: { fontSize: "$16px" },
};
