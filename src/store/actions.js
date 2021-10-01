import {SAVE_POST} from "./constants/actions";

export const SavePost = (payload) => {
    return {
        type: SAVE_POST,
        payload: payload
    }
}