import axios from "axios";
import Link from "next/link";
import React from "react";
import { url } from "..";

const Place = ({ place }) => {
  const { city } = place;
  const link = `/${city.replaceAll(" ", "-").toLowerCase()}`;
  return (
    <div>
      <h1>Place</h1>
      <Link href={link}>
        <img src="/icons/back.svg" alt="back" />
        <p>{city}</p>
      </Link>
      <h1>{JSON.stringify(place)}</h1>
    </div>
  );
};

export default Place;

Place.getInitialProps = async ({ query }) => {
  const { city, placeid } = query;
  const place = await getPlace(city, placeid);
  return { place };
};

const getPlace = (city, id) =>
  axios({ url: url + `/api/${city}/${id}` }).then((r) => r.data);
