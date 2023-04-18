import "@emotion/react";

declare module "@emotion/react" {
  interface PaletteOptions {
    primeLight?: string;
  }
  // interface Theme {
  //   fonts: Fonts;
  //   colors: Colors;
  // }
}

interface Colors {
  mainColor: string;
  subTextColor: string;
  lineColor: string;
  backgroundColor: string;
  titleBackgroudColor: string;
  accentColor: string;
  stageColor: string;
}

interface Fonts {
  mainFont: string;
  subFont: string;
  textFont: string;
  numberFont: string;
}
