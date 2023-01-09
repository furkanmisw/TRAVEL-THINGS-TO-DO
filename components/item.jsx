import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

function Item({ data, link }) {
  const { id, image, title, about, visitor } = data;
  const reverse = id % 2 === 0;
  return (
    <Container reverse={reverse}>
      <Link href={link}>
        <Image width={500} height={300} src={"/images/" + image} />
        <div className="text">
          <div>
            <h1>{title}</h1>
            {visitor && (
              <span>
                <span className="v">Visitor: </span>
                {visitor}
              </span>
            )}
          </div>
          <p>{about}</p>
        </div>
      </Link>
    </Container>
  );
}

export default Item;

const Container = styled.li`
  background-color: rgb(245, 245, 245);
  &:hover {
    background-color: rgb(230, 230, 230);
    img {
      transform: scale(1.02);
    }
  }
  overflow: hidden;
  border-radius: 1rem;
  margin: 3rem 0px;
  a {
    height: 300px;
    width: 100%;
    display: flex;
    align-items: center;
    ${({ reverse }) => reverse && `flex-direction: row-reverse;`}
    img {
      transition: 0.3s ease all;
      transform: scale(0.99);
    }
    .text {
      padding: 2rem;
      div {
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        h1 {
          font-size: 26px;
        }
        .v {
          font-weight: 400;
        }
        span {
          font-weight: 500;
          font-size: 20px;
          font-weight: 500;
        }
      }
      p {
        font-size: 18px;
        display: -webkit-box;
        width: 100%;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
`;
