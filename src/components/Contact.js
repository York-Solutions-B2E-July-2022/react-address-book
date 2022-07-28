import {Button, Container, Row, Col} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {DELETE_ADDRESS} from "../modules/reducer";

export default function Contact(props) {
    console.log(props)
    const dispatch = useDispatch();
    const {
        contact: {id, firstName, lastName, email},
    } = props;

    return <Container className={"border border-dark p-3 bg-primary text-white"}>
        <Row>
            <Col xs={8}>
                <div>{firstName} {lastName}</div>
                <div>{email}</div>
            </Col>

            <Col>
                <Button variant={"danger"} onClick={() => dispatch({type: DELETE_ADDRESS, data: {id}})} >Delete</Button>
            </Col>
        </Row>
    </Container>
}
// <div key={idx}>
//     {idx}
//     <br />
//     Name: {obj.firstName} {obj.lastName}
//     <br/>
//     Email: {obj.email}
//     <button onClick={() => deleteContact(idx)}> Delete</button>
// </div>