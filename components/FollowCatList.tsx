import React from 'react'
import { useSelector } from 'react-redux';
import { selectFollow } from '../store/FollowCatsSlice';
import { RootState, useAppSelector } from '../store/store';
import CatList from './CatList';

const FollowCatList = () => {
const urlsCats = useAppSelector(selectFollow);
console.log(urlsCats);
  return (
    <CatList data={urlsCats}/>
  )
}

export default FollowCatList