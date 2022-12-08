import { useEffect, useState } from 'react';
import Slider from '../components/Slider';

export default function Home() {
  const [movies, setMovies] = useState();

  async function getMovies() {
    const response = await fetch('/api/movies');
    const data = await response.json();
    setMovies(data);
  }

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="w-full">
      <div className="flex flex-col gap-5 w-full text-neutral-300 text-4xl font-bold my-5">
        <div className="flex flex-col gap-5 originals w-full">
          <h2 className="px-3">Originals</h2>
          <Slider movies={movies} />
        </div>
        <div className="flex flex-col gap-5 series">
          <h2 className="px-3">Series</h2>
          <Slider movies={movies} />
        </div>
        <div className="flex flex-col gap-5 movies">
          <h2 className="px-3">Movies</h2>
          <Slider movies={movies} />
        </div>
        <div className="flex flex-col gap-5 documentaries">
          <h2 className="px-3">Documentaries</h2>
          <Slider movies={movies} />
        </div>
      </div>
    </div>
  );
}
