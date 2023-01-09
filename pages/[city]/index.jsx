import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Container, url } from "../";
import Item from "../../components/item";

function Places({ city, places }) {
  const { title, visitor, about, image } = city;
  const link = (place) =>
    `${place.city.replaceAll(" ", "-").toLowerCase()}/${place.title
      .replaceAll(" ", "-")
      .toLowerCase()}`;

  return (
    <Container>
      <TitleHeader>
        <Image height={600} width={1200} src={"/images/" + image} />
        <div className="about">
          <h1>{title}</h1>
          <span>
            Visitor: <span className="b">{visitor}</span>
          </span>
          <p>{about}</p>
        </div>
      </TitleHeader>
      <StyledPlacesTitle>{title} things to do</StyledPlacesTitle>
      <ul>
        {places.map((place) => (
          <Item data={place} link={link(place)} key={place.id} />
        ))}
      </ul>
    </Container>
  );
}

const StyledPlacesTitle = styled.h1`
  margin-top: 5rem;
  text-transform: capitalize;
`;

const TitleHeader = styled.div`
  margin: 2rem 0px;
  max-height: 400px;
  display: flex;
  overflow: hidden;
  align-items: center;
  background-color: rgb(250, 250, 250);
  border-radius: 1rem;
  img {
    object-fit: cover;
    height: 600px;
    width: 50%;
  }
  .about {
    padding: 20px;
    h1 {
      margin-bottom: 10px;
    }
    span {
      font-size: 18px;
      .b {
        font-weight: 500;
      }
    }
    p {
      overflow: hidden;
      max-height: 300px;
      margin-top: 10px;
    }
  }
`;

export default Places;

Places.getInitialProps = async ({ query }) => {
  let { city: _city } = query;
  _city = _city.replaceAll("-", " ");
  const { places, city } = await getPlaces(_city);
  return { city, places };
};

const getPlaces = (city) =>
  axios({ url: url + `/api/${city}/places` }).then((r) => r.data);
