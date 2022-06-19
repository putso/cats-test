import fetchCats from "../services/fetchCats";
import loadImages from "../services/loadImage";
import { LoadStatus, updateCats, updateStatus } from "../store/CatsSlice";
import { CatData } from "./FollowCatsSlice";
import { AppDispatch, RootState } from "./store";
export const fetchCatsAction =
  (page: number) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState();
    const status = state.cats.loadStatus.status;
    if (status == "loadImage" || status == "pending") return;
    let loadStatus: LoadStatus = {
      status: "pending",
      loadBar: null,
    };
    dispatch(updateStatus(loadStatus));
    const data: CatData[] = await fetchCats(page);
    loadStatus = {
      status: "loadImage",
      loadBar: {
        currentValue: 0,
        maxValue: data.length,
      },
    };
    dispatch(updateStatus(loadStatus));
    const progresBarUpdate = (value: number, maxValue: number) => {
      dispatch(
        updateStatus({
          status: "loadImage",
          loadBar: {
            currentValue: value,
            maxValue: maxValue,
          },
        })
      );
    };
    await loadImages(
      data.map((el) => el.url),
      progresBarUpdate
    );

    dispatch(
      updateStatus({
        status: "sucsess",
        loadBar: null,
      })
    );
    dispatch(updateStatus({ status: "idle", loadBar: null }));
    console.log("delay update");
    dispatch(updateCats(data));
  };
