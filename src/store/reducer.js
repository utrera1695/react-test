import {SAVE_POST} from "./constants/actions";

const INITIAL_STATE = {
    post: "test"
}

const reducer = (state  = INITIAL_STATE, action) => {
    switch (action.type) {
        case SAVE_POST: {
            return {
                ...state,
                post: action.payload
            }
        }
            default: return state;
    }
}

export default reducer