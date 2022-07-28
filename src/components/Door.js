import { useSelector, useDispatch} from "react-redux";
import {OPEN, TOGGLE} from "../modules/reducer"
export default function Door(){
    /*
        useSelector take a function as its argument
        that function will return the portion or all  the state held in the store
    * */
    const doorState = useSelector(state => {
        console.log(state);
        return state.doorState
    });
    /*
        useDispatch returns a function to talk to our dispatcher which select a store and gives it the action

    * */
    const dispatch = useDispatch();

    return (
        <>
            <div>Door works {doorState?"OPEN": "CLOSE"}</div>
            <button onClick={()=>dispatch({type: TOGGLE})}>Change doors state</button>
        </>
    )
}