import { motion, MotionStyle, Transition, usePresence } from "framer-motion";
import React, { ComponentType, FC, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  addFollowCat,
  deleteFollowCat,
  selectIsFollowCats,
} from "../store/FollowCatsSlice";
import { AppDispatch, useAppDispatch, useAppSelector } from "../store/store";
interface WrapperProps {
  src: string
}
const Wrapper = styled.div<WrapperProps>`
  width: 300px;
  height: 300px;
  position: relative;
  background-color: ${(props) => props.src};
`;
const CatImage = styled.img`
  width: 100%;
  height: 100%;
`;
type data = {
  url: string;
  id: string;
};
interface HeartProps {
  follow: boolean;
}
const Heart = styled.div<HeartProps>`
  display: none;
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: ${(props) => (props.follow ? "block" : "none")};
  ${Wrapper}:hover & {
    display: block;
  }
`;
interface CatItemProps {
  data: data;
}
const unfollowSrc = "icons/unfollow.svg";
const followSrc = "icons/follow.svg";
const transition= { type: "spring", stiffness: 500, damping: 50, mass: 1, };
const CatItem: FC<CatItemProps> = ({ data }) => {
  //console.log(data);
  const follow = useAppSelector(selectIsFollowCats(data.id));
  const dispatch = useAppDispatch();
  const [isPresent, safeToRemove] = usePresence();
  const clickHandler = () => {
    console.log("click");
    follow ? dispatch(deleteFollowCat(data)) : dispatch(addFollowCat(data));
  };
  const src = follow ? followSrc : unfollowSrc;
  //console.log(followSrc);
  const animations = {
    layout: true,
    initial: "out",
    style: {
      position: isPresent ? "relative" as const : "absolute" as const
    },
    animate: isPresent ? "in" : "out",
    whileTap: "tapped",
    variants: {
      in: { scaleY: 1, opacity: 1, zIndex: 1 },
      out: { scaleY: 0, opacity: 0, zIndex: -1 },
      tapped: { scale: 0.98, opacity: 0.5, transition: { duration: 0.1 } }
    },
    onAnimationComplete: () => !isPresent && safeToRemove(),
    transition
  };
  return (
    <Wrapper as= {motion.div}
    {...animations}
    src={data.url}
    onClick={clickHandler}
    layout= {true}
    >
      <CatImage src={data.url} alt="" />
      <Heart follow={follow} >
      <img src={src} alt="" />
      </Heart>
    </Wrapper>
    // <motion.div {...animations} onClick= {clickHandler}>
    //       <CatImage src={data.url} alt="" />
    //  <Heart follow={follow} >
    //   <img src={src} alt="" />
    //   </Heart>
    // </motion.div>
  );
};

export default CatItem;
