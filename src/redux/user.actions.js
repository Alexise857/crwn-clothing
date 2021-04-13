export const setCurrentUser = user => (
    {
        type: 'SET_CURRENT_USER', // make sure that developer always align the action creators type with the reduced type expectation
        //This is so we cn create the appropriate effects in our reducer
        payload: user
    }
)
