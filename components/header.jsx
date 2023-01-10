import Link from "next/link";
import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <div className="content">
        <Link href={"/"} className="logo">
          <img src="/travel.png" alt="travel" />
        </Link>
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"https://github.com/simsekfurkann07"} target="_blank">
              <img src="/icons/github-mark-white.png" alt="github" />
            </Link>
          </li>
          <li>
            <Link href={"/"}>About me</Link>
          </li>
        </ul>
      </div>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  background: rgb(255, 255, 255);
  background: -moz-linear-gradient(
    135deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(151, 229, 255, 1) 100%
  );
  background: -webkit-linear-gradient(
    135deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(151, 229, 255, 1) 100%
  );
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(151, 229, 255, 1) 100%
  );
  .content {
    margin: 0px auto;
    max-width: 1200px;
    padding: 1rem 2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      img {
        &:hover {
          transform: rotate(-320deg);
        }
        transition: 0.3s ease all;
        width: 100px;
        height: 100px;
      }
    }
    ul {
      display: flex;
      li {
        margin: 0px 1rem;
        img {
          width: 30px;
          &:hover {
            transform: scale(1.1);
          }
          transition: 0.3s ease all;
        }
        a {
          font-size: 20px;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;
