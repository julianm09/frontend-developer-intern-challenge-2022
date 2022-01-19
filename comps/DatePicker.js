import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import LikeButton from "./LikeButton";
import Nasa from "./Animation";

export default function Card({ date, setDate, search, setSearch }) {
  return (
    <Cont>
      <Row>
        <Nasa />
        <Logo>
          <Head>Spacestagram</Head>
          <Sub>
            Brought to you by NASA's <br></br> Astronomy Photo of the Day API
          </Sub>
        </Logo>
      </Row>

      <Search
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <DateCont>
        <Date
          type={"date"}
          onChange={(e) => setDate({ start: e.target.value, end: date.end })}
          value={date.start}
        />
        <Date
          type={"date"}
          onChange={(e) => setDate({ start: date.start, end: e.target.value })}
          value={date.end}
        />
      </DateCont>
    </Cont>
  );
}

const Cont = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 150px;

  @media (max-width: 1100px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const Logo = styled.div`
  width: 500px;

  @media (max-width: 1100px) {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

const Head = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const Sub = styled.div`
  font-size: 14px;
`;

const Search = styled.input`
  width: 250px;
  height: 25px;
  font-family: "Outfit", sans-serif;

  display: flex;
  padding: 0 5px;

  @media (max-width: 1100px) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 10px 0;
  }
`;

const DateCont = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 400px;

  @media (max-width: 1100px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const Date = styled.input`
  font-family: "Outfit", sans-serif;
  width: 150px;
  height: 25px;
  padding: 0 5px;
  margin: 0 0 0 10px;

  @media (max-width: 1100px) {
    margin: 0 0 0 0px;
    width: calc(50% - 5px);
  }
`;
