"use client";
import { useEffect, useState } from "react";
import { getFonts } from "@/lib/fonts/fuentes";

export default function FontLoader() {
  const [fonts, setFonts] = useState(null);

  useEffect(() => {
    async function loadFonts() {
      const loadedFonts = await getFonts();
      setFonts(loadedFonts);
    }
    loadFonts();
  }, []);

  if (!fonts) return null;

  return (
    <style>{`
      @font-face {
        font-family: '${fonts.primaryFont}';
        src: url('${fonts.primaryFontUrl}') format('truetype');
      }
      @font-face {
        font-family: '${fonts.secondaryFont}';
        src: url('${fonts.secondaryFontUrl}') format('truetype');
      }
      :root {
        --primary-font: '${fonts.primaryFont}', sans-serif;
        --secondary-font: '${fonts.secondaryFont}', serif;
      }
    `}</style>
  );
}
