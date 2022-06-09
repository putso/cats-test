import fetchCats from "../services/fetchCats";
import loadImages from "../services/loadImage";
import { LoadStatus,selectIsFollowCats, updateCats, updateStatus } from "../store/CatsSlice";
import { CatData } from "./FollowCatsSlice";
import { AppDispatch } from "./store";

const fetchCatsAction = (page:number) => async (dispatch:AppDispatch) => {
    const data:CatData[] = await fetchCats(page);
    const loadStatus:LoadStatus = {
        status:'pending',
        loadBar: {
            currentValue: 0,
            maxValue: data.length
        }
    
    }
    dispatch(updateStatus(loadStatus))

    const progresBarUpdate = (value:number, maxValue:number) => {
       loadStatus.loadBar.currentValue = value;
       dispatch(updateStatus(loadStatus));
    }
    await loadImages(data.map(el => el.url),progresBarUpdate);
    
    dispatch(updateStatus({
        status: 'sucsess'
    }));
    setTimeout(() => {
        dispatch(updateStatus({status: 'idle'}))
        dispatch(updateCats(data))
    }, 1000);


}