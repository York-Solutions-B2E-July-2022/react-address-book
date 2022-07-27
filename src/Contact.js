import {Button, Container, Row, Col} from "react-bootstrap";

export default function Contact(props) {
    console.log(props)
    const {
        contact: {id, firstName, lastName, email},
        deleteContact
    } = props;

    return <Container className={"border border-dark p-3 bg-primary text-white"}>
        <Row>
            <Col xs={8}>
                <div>{firstName} {lastName}</div>
                <div>{email}</div>
            </Col>

            <Col>
                <Button variant={"danger"} onClick={() => deleteContact(id)} >Delete</Button>
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