import {createSelector} from "reselect";


const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    // the following function get the return of the input selector added
    (user) => user.currentUser
)
