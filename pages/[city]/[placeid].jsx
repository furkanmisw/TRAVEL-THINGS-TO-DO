import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { url } from "..";

const Place = ({ place }) => {
  const { city, image, title, about, location } = place;
  const link = `/${city.replaceAll(" ", "-").toLowerCase()}`;
  return (
    <Container>
      <div className="h">
        <Link href={link}>
          <img src="/icons/back.svg" alt="back" />
          <h1>back {city} things to do</h1>
        </Link>
      </div>
      <Image width={1200} height={600} src={"/images/" + image} />
      <div className="about">
        <h1>{title}</h1>
        <p>{about}</p>
        {location && (
          <div>
            Location: <span>{location}</span>
          </div>
        )}
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: 0px auto;
  max-width: 1200px;
  padding: 2rem;
  border-radius: 1rem;
  .h {
    height: 30px;
    margin: 2rem 0px;
    a {
      display: flex;
      align-items: center;
      width: fit-content;
      img {
        height: 24px;
        width: 24px;
        margin-right: 10px;
      }
      h1 {
        text-transform: capitalize;
        font-weight: 500;
        font-size: 18px;
      }
    }
  }
  img {
    width: 100%;
    height: 100%;
    max-height: 600px;
  }
  .about {
    margin: 3rem 0px;
    width: 100%;
    text-align: center;
    h1 {
      margin: 1rem 0px;
    }
    p {
      margin-bottom: 2rem;
    }
    div {
      display: block;
      text-align: end;
      width: 100%;
      opacity: 0.9;
      span {
        opacity: 1;
        font-weight: 500;
      }
    }
  }
`;

export default Place;

Place.getInitialProps = async ({ query }) => {
  const { city, placeid } = query;
  const place = await getPlace(city, placeid);
  return { place };
};

const getPlace = (city, id) =>
  axios({ url: url + `/api/${city}/${id}` }).then((r) => r.data);
