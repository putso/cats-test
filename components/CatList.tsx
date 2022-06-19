import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { nanoid } from "nanoid";
import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import CatItem from "./CatItem";
const CatsListWrapper = styled(motion.div)`
  margin: 0 auto;
  width: 90%;
  padding: 50x;
  display: flex;
  flex-wrap: wrap;
  padding-inline: 30px;
  gap: 10px;
`;
type data = {
  url: string;
  id: string;
};
interface CatsListProps {
  data: data[];
}
const CatList: FC<CatsListProps> = ({ data }) => {
  return (
    <CatsListWrapper>
      <AnimatePresence  >
        {data.map((catItem, i) => {
          return <CatItem data={catItem} key={catItem.id}></CatItem>;
        })}
      </AnimatePresence>
    </CatsListWrapper>
  );
};

export default CatList;
