import ImageColors from "react-native-image-colors";
import { useEffect, useRef, useState } from "react";


const useCardColor = (picture: string) => {

  const [bgColor, setBgColor] = useState<string>("grey");
  const isMounted = useRef(true);


  const setColors = async () => {
    const bgColor = await ImageColors.getColors(picture, { fallback: "grey" });

    if (!isMounted.current) return;

    bgColor.platform === "android"
      ? setBgColor(bgColor.dominant || "grey")
      : (bgColor.platform === "ios"
        ? setBgColor(bgColor.background || "grey")
        : "grey");
  };

  useEffect(() => {
    setColors();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return { bgColor };
};

export { useCardColor };
