import React from "react";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";

const Page = async ({ params }) => {
  const id = params.id;

  const url = `https://ott-details.p.rapidapi.com/gettitleDetails?imdbid=${id}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "814802263emshaf7ac0cb7d01edbp1171c9jsn2bed398e860f",
      "X-RapidAPI-Host": "ott-details.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();

  return (
    <div className={styles.container}>
      <h2 className={styles.movie_title}>
        {" "}
        FlexOTT \<span>{` ${result.type}`}</span>
      </h2>
      <div className={styles.card_section}>
        <div>
          <img src={result.imageurl} />
        </div>

        <div>
          <h1>{result.title}</h1>
          <h2 className={styles.movie_title}>
            Genre -
            <span>{` ${result.genre[0]} - ${result.genre[1]} - ${result.genre[2]}`}</span>
          </h2>
          <h2 className={styles.movie_title}>
            Imdb Rating -<span>{` ${result.imdbrating} `}</span>
          </h2>
          <h2 className={styles.movie_title}>
            Released -<span>{` ${result.released} `}</span>
          </h2>

          <p>{result.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
