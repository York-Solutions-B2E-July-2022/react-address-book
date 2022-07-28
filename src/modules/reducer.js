/* Given a door. that starts closed
if  given the OPEN action
    reducer change our state to Open
if given the Close action
    reducer change our state to closed
* */
import {v4 as uuid} from "uuid";

export const OPEN = "OPEN";
export const SUBMIT_ADDRESS = "SUBMIT_ADDRESS";

const initialState = {
    doorState: false,
    addressList: [],
}
/*
{
 type: OPEN,
 data: {
    /any thing
 }
}
* */
export default function reducer(state=initialState, action){
    switch (action.type) {
        case OPEN: {
            return {...state, doorState: true}
        }
        case SUBMIT_ADDRESS: {
            let {firstName, lastName, email} = action?.data;
            return { ...state, addressList: [...state.addressList,  {id: uuid(), firstName, lastName, email}]}
        }
        default: {
            return state;
        }
    }
}