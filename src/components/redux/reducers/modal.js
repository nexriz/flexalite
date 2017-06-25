let init = {
    isOpen: false
}


export default (state=init, action) => {
    return action.type === 'TOGGLE'
        ? { isOpen: !state.isOpen }
        : state
    }