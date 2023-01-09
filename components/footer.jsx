import Link from "next/link";
import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <div className="content">
        <div className="up">
          <Link href={"https://github.com/simsekfurkann07"} target={"_blank"}>
            <img src="/icons/github-mark-white.png" alt="github" />
          </Link>
        </div>
        <div className="down">
          <p>
            © 2023 Copyright: <span>simsekfurkann07</span>
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Footer;

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
  padding: 2rem;
  .content {
    width: 100%;
    margin: 0px auto;
    max-width: 1200px;
    padding: 0px 2rem;
    .up {
      display: flex;
      justify-content: center;
    }
    .down {
      margin-top: 1rem;
      p {
        text-align: center;
        font-size: 14px;
        span {
          font-weight: 500;
        }
      }
    }
    img {
      width: 30px;
      &:hover {
        transform: scale(1.1);
      }
      transition: 0.3s ease all;
    }
  }
`;
