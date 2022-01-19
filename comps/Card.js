import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import LikeButton from "./LikeButton";
import { Router, useRouter } from "next/router";
import Link from "next/link";

export default function Card({ pod, saved, setSaved }) {
  return (
    <Link href={"/photo/" + pod.date}>
      <Cont>
        <Img src={pod.url} />

        <Row>
          <Info>
            <Title>
              {pod.title.length > 40
                ? pod.title.slice(0, 40) + "..."
                : pod.title}
            </Title>
            <Date>{pod.date}</Date>
          </Info>
          <LikeButton pod={pod} saved={saved} setSaved={setSaved} />
        </Row>
      </Cont>
    </Link>
  );
}

const Cont = styled.a`
  display: flex;
  flex-direction: column;
  /* box-shadow: 0px 0px 10px rgba(229, 233, 246, 0.8); */
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  transition: 0.2s ease;
  height: 350px;
  justify-content: space-between;
  &:hover {
    box-shadow: 0px 0px 10px rgb(21, 65, 140, 0.8);
    transform: translateY(-2px);
    cursor: pointer;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Info = styled.div`
  width: 100%;
`;

const Title = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 18px;
  margin: 10px 0;
`;

const Date = styled.div`
  width: 100%;
`;
