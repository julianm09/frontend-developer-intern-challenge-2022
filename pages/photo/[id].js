import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { AiFillCaretLeft } from "react-icons/ai";
import Link from "next/link";
import LikeButton from "@/comps/LikeButton";

export default function Photo({ saved, setSaved }) {
  const router = useRouter();
  const { id } = router.query;
  const [date, setDate] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=LFlfS7o4DC4xpWYYaqd1cOVpHgCOCbOpBZys2zyj&start_date=${id}&end_date=${id}`
        )
        .then((response) => {
          console.log(response.data);
          setDate(response.data[0]);
        });
    } else {
    }
  }, []);

  return (
    <Cont>
      <Header>
        <Link href={"/"}>
          <Back>
            <AiFillCaretLeft /> Back
          </Back>
        </Link>
      </Header>
      <Row>
        <a href={date && date.hdurl}>
          <Img src={date && date.url} />
        </a>
        <Column>
          <Title>{date && date.title}</Title>
          <Date>{date && date.date}</Date>
          <div>{date && date.explanation}</div>

        </Column>
      </Row>
    </Cont>
  );
}

const Cont = styled.div`
  width: 100%;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  margin: 10px 0;
  align-items: center;
`;

const Back = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  margin: 10px 0;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin: 0;
  }
`;

const Column = styled.div`
  margin: 0 0 0 20px;

  @media (max-width: 1000px) {
    margin: 0;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 18px;
`;

const Date = styled.div`
  margin: 10px 0 20px 0;
`;

const Explanation = styled.div``;

const Img = styled.img`
  height: 60vh;

  @media (max-width: 1000px) {
    margin: 20px 0;
    width: 100%;
    height: auto;
  } ;
`;

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
