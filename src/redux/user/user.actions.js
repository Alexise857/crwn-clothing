import {UserActionTypes} from "./user.types";

export const setCurrentUser = user => (
    {
        type: UserActionTypes.SET_CURRENT_USER, // make sure that developer always align the action creators type with the reducer type expectation
        //This is so we cn create the appropriate effects in our reducer
        payload: user
    }
)
