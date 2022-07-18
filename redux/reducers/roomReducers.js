import { ALL_ROOMS_FAIL, ALL_ROOMS_LOADING, ALL_ROOMS_SUCCESS,CLEAR_ERRORS } from "../constants/roomConstants";

export const allRoomsReducer = (state = {},action)=>{
    switch (action.type) {
        case ALL_ROOMS_LOADING:
            return {loading:true}
        case ALL_ROOMS_SUCCESS:
            const {rooms,pages,page,roomsCount}=action.payload
            return {loading:false,rooms,pages,page,roomsCount}
        case ALL_ROOMS_FAIL:
            return {loading:false,error:action.payload}
        case CLEAR_ERRORS:
            return {error:null}
        default:
            return state
    }
}