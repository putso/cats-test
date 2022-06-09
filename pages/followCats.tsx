import React from 'react'
import { useSelector } from 'react-redux'
import FollowCatList from '../components/FollowCatList';
import MainLayout from '../components/MainLayout';
import { selectFollow } from '../store/FollowCatsSlice';
import { RootState, useAppSelector } from '../store/store';
const followCats = () => {
  return (
    <MainLayout>
      <FollowCatList/>
    </MainLayout>
  ) 

}

export default followCats