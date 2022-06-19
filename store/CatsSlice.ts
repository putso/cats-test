import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store';
type status = 'idle' | 'pending' | 'loadImage' |  'sucsess' | 'error';

interface CatData {
    id: string,
    url: string,
}
interface LoaddingCats {
    status: Extract<status, 'pending'>;
    loadBar : LoadBar

}
interface CreateStatus<T,C> {
    status: T,
    loadBar: C
}
interface LoadBar {
    currentValue: number;
    maxValue: number;
}
interface NotLoadingCats {
    status: Exclude<status,  'pending'>,
    loadBar: null;
}
export type LoadStatus = CreateStatus<Extract<status, 'loadImage'>,LoadBar> | CreateStatus<Exclude<status, 'loadImage'>,null>  ;
interface CatsState {
    data: CatData[];
    loadStatus: LoadStatus;
}

const initialCats:CatsState = {
    data: [],
    loadStatus: {
        status: 'idle',
        loadBar: null
    }

}
const CatsSlice = createSlice({
    name:'cats',
    initialState: initialCats,
    reducers: {
        updateCats(state,action:PayloadAction<CatData[]>) {

            state.data = [...state.data,...action.payload];
        },
        updateStatus(state,action: PayloadAction<LoadStatus>) {
            state.loadStatus = action.payload;
        }
        
    }
    



})
export default CatsSlice.reducer;

export const {updateCats,updateStatus} = CatsSlice.actions;
export const selectCats = (state: RootState) => state.cats.data;
export const selectStatus = (state:RootState) => state.cats.loadStatus.status;
export const selectLoadBar = (state:RootState) => state.cats.loadStatus.loadBar;