import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addFollowCat,deleteFollowCat,selectIsFollowCats,test } from "../store/FollowCatsSlice";
import { AppDispatch, useAppDispatch, useAppSelector } from "../store/store";
const Wrapper = styled.div`
  position: relative;
`;
const CatImage = styled.img`
  width: 300px;
  height: 300px;
`;
type data = {
  url: string;
  id: string;
};
const Heart = styled.div`
  display: none;
  position: absolute;
  bottom: 10px;
  right: 10px;
  ${Wrapper}:hover & {
    display: block;
  }
`;
interface CatItemProps {

  data: data;
}
const unfollowSrc = "icons/unfollow.svg";
const followSrc = "icons/follow.svg";


const CatItem: FC<CatItemProps> = ({ data }) => {
  console.log(data);
  const follow = useAppSelector(selectIsFollowCats(data.id));
  const dispatch = useAppDispatch();
  const clickHandler = () => {
    follow ? dispatch(deleteFollowCat(data)) : dispatch(addFollowCat(data))
  };
  const src = follow ? followSrc : unfollowSrc;
  console.log(followSrc)
  return (
    <Wrapper>
      <CatImage src={data.url} alt="" />
      <Heart onClick={clickHandler}>
        <img src={src} alt="" />
      </Heart>
    </Wrapper>
  );
};

export default CatItem;
