import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

export default function Row({ movies }) {
  const [width, setWidth] = useState(null);
  const carousel = useRef();
  const size = useWindowSize();

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    console.log(size);
  }, [size]);

  return (
    <motion.div
      key={size}
      ref={carousel}
      className="cursor-grab overflow-hidden w-full flex"
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="inline-flex gap-2"
      >
        {movies
          ? movies.movies?.map((movie, index) => (
              <div key={index} className="item min-w-[200px] h-[300px]">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="rounded w-full h-full pointer-events-none"
                />
              </div>
            )) ||
            movies.series?.map((movie, index) => (
              <div key={index} className="item min-w-[200px] h-[300px]">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="rounded w-full h-full pointer-events-none"
                />
              </div>
            ))
          : null}
      </motion.div>
    </motion.div>
  );
}
