import React, { FC, ReactNode } from 'react'
import styled from 'styled-components';
import CatItem from './CatItem';
const CatsListWrapper = styled.div`
  margin: 0 auto;
  padding: 50x;
  display: flex;
  gap: 10px 10px;
  flex-wrap: wrap;
  padding-inline: 30px;
`;
type data = {
  url: string;
  id: string;
};
interface CatsListProps {
   data: data[]; 
}
const CatList: FC<CatsListProps> = ({data}) => {
  return (
    <CatsListWrapper>
        {
            data.map( (catItem,i) => {
                return (<CatItem data={catItem} key={catItem.id}></CatItem>)
            })
        }
    </CatsListWrapper>
  )
}

export default CatList