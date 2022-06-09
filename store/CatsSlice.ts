import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store';
type status = 'idle' | 'pending' | 'sucsess' | 'error';
interface CatData {
    id: string,
    url: string,
}
interface LoaddingCats {
    status: Extract<status, 'pending'>
    loadBar: {
        currentValue: number;
        maxValue: number;
    }
}
interface NotLoadingCats {
    status: Exclude<status,  'pending'>
}
export type LoadStatus = LoaddingCats | NotLoadingCats;
interface FollowCatsState {
    data: CatData[];
    loadStatus: LoadStatus;
}

const initiaFollowCats:FollowCatsState = {
    data: [],
    loadStatus: {
        status: 'idle'
    }

}
const followSlice = createSlice({
    name:'cats',
    initialState: initiaFollowCats,
    reducers: {
        updateCats(state,action:PayloadAction<CatData[]>) {
            state.data = [...state.data,...action.payload];
        },
        updateStatus(state,action: PayloadAction<LoadStatus>) {
            state.loadStatus = action.payload;
        }
        
    }
    



})
export default followSlice.reducer;

export const {updateCats,updateStatus} = followSlice.actions;
export const selectCats = (state: RootState) => state.followCats;
export const selectIsFollowCats = (id:string) => (state:RootState) => state.followCats.data.map(el => el.id).includes(id);