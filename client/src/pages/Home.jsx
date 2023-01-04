import { useEffect, useState } from "react";
import Row from "../components/Row";

export default function Home() {
  const [movies, setMovies] = useState();
  const [dramas, setDramas] = useState();
  const [series, setSeries] = useState();
  const [documentaries, setDocumentaries] = useState();

  async function getMovies() {
    const response = await fetch("/api/movies");
    const data = await response.json();
    console.log(data);
    setMovies(data);
  }

  async function getDramas() {
    const response = await fetch("/api/movies?genre=Drama");
    const data = await response.json();
    console.log(data);
    setDramas(data);
  }

  async function getSeries() {
    const response = await fetch("/api/series?page=4");
    const data = await response.json();
    console.log(data);
    setSeries(data);
  }

  async function getDocumentaries() {
    const response = await fetch("/api/movies?genre=Documentary&page=10");
    const data = await response.json();
    console.log(data);
    setDocumentaries(data);
  }

  useEffect(() => {
    getMovies();
    getDramas();
    getSeries();
    getDocumentaries();
  }, []);

  return (
    <div className="w-full">
      <div className="flex flex-col gap-5 w-full text-neutral-300 text-4xl font-bold my-5">
        <>
          {movies && (
            <div className="flex flex-col gap-5 originals w-full">
              <h2 className="px-3">Originals</h2>
              <Row movies={movies} />
            </div>
          )}
          {dramas && (
            <div className="flex flex-col gap-5 series">
              <h2 className="px-3">Dramas</h2>
              <Row movies={dramas} />
            </div>
          )}
          {series && (
            <div className="flex flex-col gap-5 movies">
              <h2 className="px-3">Series</h2>
              <Row movies={series} />
            </div>
          )}
          {documentaries && (
            <div className="flex flex-col gap-5 documentaries">
              <h2 className="px-3">Documentaries</h2>
              <Row movies={documentaries} />
            </div>
          )}
        </>
      </div>
    </div>
  );
}
