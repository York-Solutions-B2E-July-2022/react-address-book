import Contact from "./Contact";
import {ListGroup, Form} from "react-bootstrap";
import {useState} from "react";

export default function AddressList(props) {
    const {
        addressList,
        deleteContact,
    } = props;
    console.log(addressList)
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
                             contact={contactData}
                             deleteContact={deleteContact}/>
                </ListGroup.Item>
            }
        )}

    </ListGroup>
}
