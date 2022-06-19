import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store';
type status = 'idle' | 'pending' | 'sucsess' | 'error';
export interface CatData {
    id: string,
    url: string,
}

const initiaFollowCats:CatData[] = [];
const followSlice = createSlice({
    name:'followCats',
    initialState: initiaFollowCats,
    reducers: {
        deleteFollowCat(state,action:PayloadAction<CatData>) {
            return state.filter(el => el.id!==action.payload.id); 
        },
        addFollowCat(state,action:PayloadAction<CatData>) {
            return [...state,action.payload];
        }
        
    }
    



})
export default followSlice.reducer;

export const {deleteFollowCat, addFollowCat} = followSlice.actions;
export const selectFollow = (state: RootState) => state.followCats;
export const selectIsFollowCats = (id:string) => (state:RootState) => state.followCats.map(el => el.id).includes(id);