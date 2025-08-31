import { Manrope, Urbanist } from "next/font/google";

export const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

// Afacad isn't available directly via Google Fonts; if you have a local or
// hosted source replace the below with the correct import. We'll use Inter
// as a sensible fallback for now and export it as `afacad` so Tailwind's
// `font-afacad` utility has a loaded font-class available.
// Use Manrope as a fallback for Afacad if Afacad is not available locally.
export const afacad = manrope;
