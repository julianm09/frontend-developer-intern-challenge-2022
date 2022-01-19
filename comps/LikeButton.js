import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export default function LikeButton({ pod, saved, setSaved }) {
  const [like, setLike] = useState(false);
  useEffect(() => {
    if (saved.includes(pod.date)) {
      setLike(true);
    }
  }, []);

  const handleLike = (e) => {
    e.preventDefault();
    setLike(!like);

    if (!like) {
      setSaved([...saved, pod.date]);
    } else {
      setSaved(saved.filter((x) => x !== pod.date));
    }
    console.log(saved);
  };

  return (
    <>
      {like ? (
        <AiFillHeart size={24} onClick={handleLike}></AiFillHeart>
      ) : (
        <AiOutlineHeart
          size={24}
          onClick={handleLike}
          like={like}
        ></AiOutlineHeart>
      )}
    </>
  );
}

const Cont = styled.div`
  width: 20px;
  height: 20px;
`;
