import { createStitches } from "@stitches/react";
import { mint, mintDark } from "@radix-ui/colors";
import { reset, utilityClass, commonStyle } from "./stitches.global";
import typography, { typoUtils, globalTypo } from "./stitches.typography";
import sizes from "./stitches.sizes";
import utils from "./stitches.utils";
import color from "./stitches.color";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    ...color,
    ...sizes,
    ...typography,
  },

  media: {
    mobile: "(max-width: 630px)",
    tablet: "(max-width: 1000px)",
    laptop: "(max-width: 1450px)",
  },
  utils: {
    ...utils,
    ...typoUtils,
  },
});

export const darkTheme = createTheme({
  colors: {
    ...mintDark,
    accent1: "$mintDark1",
    accent2: "$mintDark2",
    accent3: "$mintDark3",
    accent4: "$mintDark4",
    accent5: "$mintDark5",
    accent6: "$mintDark6",
    accent7: "$mintDark7",
    accent8: "$mintDark8",
    accent9: "$mintDark9",
    accent10: "$mintDark10",
    accent11: "$mintDark11",
    accent12: "$mintDark12",
  },
});
