import Contact from "./Contact";
import {ListGroup, Form} from "react-bootstrap";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {DELETE_ADDRESS} from "../modules/reducer";

export default function AddressList(props) {
    const dispatch = useDispatch();
    const addressList = useSelector(state => {
        return state.addressList;
    })
    const [search, setSearch] = useState('');
    function filterBy(search){
        setSearch(search);
    }
    return <ListGroup>
        <Form.Control type={"text"} onChange={({target})=>filterBy(target.value)}></Form.Control>
        {addressList.filter(elem => elem.firstName.toLowerCase().includes(search)).map(
            contactData => {
                return <ListGroup.Item key={contactData.id}>
                    <Contact
                             contact={contactData}/>

                </ListGroup.Item>
            }
        )}

    </ListGroup>
}
