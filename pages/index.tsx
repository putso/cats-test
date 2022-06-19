import type { GetServerSideProps, NextApiResponse, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { off } from "process";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { urlToHttpOptions } from "url";
import CatList from "../components/CatList";
import LoaderSpinner from "../components/LoaderSpinner";
// import CatsList from "../components/CatsList";
import MainLayout from "../components/MainLayout";
import { Spinner } from "../components/Spinner";
import useEndScroll from "../hooks/useEndScroll";
import useImageListLoaded from "../hooks/useImageListLoaded";
import fetchCats from "../services/fetchCats";
import { fetchCatsAction } from "../store/asyncFetchAction";
import { selectCats, selectStatus, updateCats } from "../store/CatsSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import styles from "../styles/Home.module.css";

type data = {
  url: string;
  id: string;
};
type props = {
  data: data[];
};
type CatsListProps = {
  checkLoad?: boolean;
};
const CatsImage = styled.img`
  width: 300px;
  height: 300px;
  display: block;
`;
const Main = styled.main``;
const Loader = styled.div`
  margin: 0 auto;
  width: max-content;
  font-size: 30px;
  padding: 10px;
`;
let count = 1;
const Home: NextPage<props> = ({ data }) => {
  const cats = useAppSelector(selectCats);
  const dispatch = useAppDispatch();
  const endScrollHandler = () => {
      dispatch(fetchCatsAction(count++));
  }
  useEndScroll(endScrollHandler);
  useEffect(()=> {
    dispatch(fetchCatsAction(1));

  },[]);
  return (
    <>
      <MainLayout>
        <Main>
          <CatList data={cats}></CatList>
          
          <LoaderSpinner></LoaderSpinner>
        </Main>
      </MainLayout>
    </>
  );
};

export default Home;
