import axios from "axios";
import Link from "next/link";
import React from "react";
import { Container, url } from "../";
import Item from "../../components/item";

function Places({ city, places }) {
  const link = (place) =>
    `${place.city.replaceAll(" ", "-").toLowerCase()}/${place.title
      .replaceAll(" ", "-")
      .toLowerCase()}`;

  return (
    <Container>
      <h1 className="title">{city}</h1>
      <Link href={"/"}>
        <img src="/icons/back.svg" alt="back" />
      </Link>
      <ul>
        {places.map((place) => (
          <Item data={place} link={link(place)} key={place.id} />
        ))}
      </ul>
    </Container>
  );
}

export default Places;

Places.getInitialProps = async ({ query }) => {
  let { city } = query;
  city = city.replaceAll("-", " ");
  const places = await getPlaces(city);
  return { city, places };
};

const getPlaces = (city) =>
  axios({ url: url + `/api/${city}/places` }).then((r) => r.data);
