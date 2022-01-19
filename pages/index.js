import styled from "styled-components";
import { useState, useEffect } from "react";
import Card from "@/comps/Card";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";
import axios from "axios";
import DatePicker from "@/comps/DatePicker";

export default function Home({ saved, setSaved }) {
  const [data, setData] = useState();
  const [date, setDate] = useState({ start: "2022-01-01", end: "2022-01-18" });
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const scrollRef = useHorizontalScroll();

  let yourDate = new Date();
  let today = yourDate.toISOString().split("T")[0];

  useEffect(() => {
    setDate({ start: "2022-01-01", end: today });
  }, []);

  useEffect(() => {
    if (date.start <= date.end) {
      setLoading(true);
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=LFlfS7o4DC4xpWYYaqd1cOVpHgCOCbOpBZys2zyj&start_date=${date.start}&end_date=${date.end}`
        )
        .then((response) => {
          setData(response.data);
          setLoading(false);
        });
    } else {
    }
  }, [date]);

  console.log(data);

  return (
    <Cont ref={scrollRef}>
      <DatePicker
        date={date}
        setDate={setDate}
        search={search}
        setSearch={setSearch}
      />
      <Grid>
        {loading && (
          <>
            <Skeleton /> <Skeleton /> <Skeleton /> <Skeleton /> <Skeleton />{" "}
            <Skeleton />
          </>
        )}

        {data &&
          data
            .filter(
              (x) =>
                x.title.toLowerCase().includes(search.toLowerCase()) ||
                x.date.includes(search)
            )
            .map(
              (pod) => pod.url.includes("jpg") && !loading && <Card pod={pod} saved={saved} setSaved={setSaved} />
            )}
      </Grid>
    </Cont>
  );
}

const Cont = styled.div`
  width: 100%;
  padding: 0 5%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  grid-gap: 20px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin: 20px 0;

  @media (max-width: 1400px) {
    grid-template-columns: 2fr 2fr;
  }

  @media (max-width: 900px) {
    grid-template-columns: 2fr;
  }
`;

const Skeleton = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(229, 233, 246, 0.8);
  border-radius: 10px;
  padding: 10px;
  height: 350px;
  animation: skeleton 1s linear infinite;
`;
