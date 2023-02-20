import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const useAnimateSection = () => {
  const { ref, inView: sectionInView } = useInView({
    threshold: 0.1,
  });
  const control = useAnimation();

  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (sectionInView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, sectionInView]);

  return { ref, sectionVariants, control };
};
