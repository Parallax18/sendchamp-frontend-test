import { useEffect, useState } from 'react';

const useMediaWidth = () => {
  const [mediaWidth, setMediaWidth] = useState<number>(0);
  const [padding, setPadding] = useState<number>(0);

  useEffect(() => {
    setMediaWidth(window.innerWidth);
    console.log({ mediaWidth });

    if (window.innerWidth > 1440) {
      setPadding(56);
    } else if (mediaWidth < 1440) {
      setPadding(3);
    } else {
      setPadding(20);
    }
  }, [mediaWidth]);

  return { mediaWidth, padding };
};

export default useMediaWidth;
