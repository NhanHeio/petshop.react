import {SET_INDEX } from './constants';

const initState = {
    activeIndex: 0,
}

function reducer(state, action){
    switch(action.type){
        case SET_INDEX:
            return {
                activeIndex: action.payload
            }
        default:
            throw new Error(`Invalid action ${action.type}`)
    }
}

export { initState }
export default reducer