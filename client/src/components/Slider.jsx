import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Slider({ movies }) {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div
      ref={carousel}
      className="cursor-grab overflow-hidden w-full"
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex gap-2"
      >
        {movies
          ? movies.movies.map((movie, index) => (
              <motion.div className="item min-w-[250px] h-[400px]">
                <img
                  key={index}
                  src={movie.poster}
                  alt={movie.title}
                  className="rounded w-full h-full pointer-events-none"
                />
              </motion.div>
            ))
          : null}
      </motion.div>
    </motion.div>
  );
}
