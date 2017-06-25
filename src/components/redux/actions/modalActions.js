export function toggleModal() {
    return dispatch => {
        dispatch({
            type: 'TOGGLE',
            payload: 'false'
        })
    }
}