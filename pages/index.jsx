import axios from "axios";
import React from "react";
import styled from "styled-components";
import Item from "../components/item";

function Cities({ cities }) {
  return (
    <Container>
      <h1 className="title">Most Visited 10 City</h1>
      <ul>
        {cities.map((city) => (
          <Item
            data={city}
            key={city.id}
            link={city.title.replaceAll(" ", "-").toLowerCase()}
          />
        ))}
      </ul>
    </Container>
  );
}

export const Container = styled.div`
  margin: 0px auto;
  max-width: 1200px;
  padding: 0px 2rem;
  width: 100%;
  .title {
    margin: 2rem 0px;
  }
`;

export default Cities;

Cities.getInitialProps = async () => {
  const cities = await getCities();
  return { cities };
};

const getCities = () => axios({ url: url + "/api/cities" }).then((r) => r.data);

export const url = process.env.URL || "http://localhost:3000";
