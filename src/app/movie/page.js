import React from "react";
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css";

const Movie = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const url =
    "https://ott-details.p.rapidapi.com/advancedsearch?start_year=2015&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest&page=1";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "814802263emshaf7ac0cb7d01edbp1171c9jsn2bed398e860f",
      "X-RapidAPI-Host": "ott-details.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const data = result.results;
  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movie</h1>
          <div className={styles.card_section}>
            {data.map((curElem) => {
              return <MovieCard key={curElem.imdbid} {...curElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
