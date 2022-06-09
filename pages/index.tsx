import type { GetServerSideProps, NextApiResponse, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { urlToHttpOptions } from "url";
import CatList from "../components/CatList";
// import CatsList from "../components/CatsList";
import MainLayout from "../components/MainLayout";
import { Spinner } from "../components/Spinner";
import useEndScroll from "../hooks/useEndScroll";
import useImageListLoaded from "../hooks/useImageListLoaded";
import fetchCats from "../services/fetchCats";
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
const Home: NextPage<props> = ({ data }) => {
  console.log(data);

  //console.log('indexREnder')
  
  const [pages, setPages] = useState(data);
  const RefFetching = useRef(false);
  const refPage = useRef(1);
  const loadImages = useImageListLoaded(data.map((el) => el.url));
  const endScrollHandler = async () => {
    if (!RefFetching.current) {
      console.log("fetching");
      RefFetching.current = true;
      const data = await fetchCats(refPage.current);
      const urls = data.map((el) => el.url);
      let test = await loadImages(urls);
      console.log(test);
      setPages((value) => [...value, ...data]);
      RefFetching.current = false;
      refPage.current++;
    }
  };
  useEndScroll(endScrollHandler);
  return (
    <>
      <MainLayout>
        <Main>
          <CatList data={pages}></CatList>
          <Spinner text="Loading cats"/>
        </Main>
      </MainLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const data = await fetchCats(1);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
};
export default Home;
