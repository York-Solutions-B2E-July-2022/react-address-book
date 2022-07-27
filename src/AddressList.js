import Contact from "./Contact";
import {ListGroup} from "react-bootstrap";

export default function AddressList(props) {
    const {
        addressList,
        deleteContact,
    } = props;

    console.log(addressList)
    return <ListGroup>
        {addressList.map(
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
