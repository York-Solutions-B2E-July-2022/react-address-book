import {useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {SUBMIT_ADDRESS} from "../modules/reducer";

export default function AddressForm(props) {
    const dispatch = useDispatch();
    // useState is a function provided by React to allow us to persist data through re-rendering
    // this function returns an array with 2 items [the value, a function to update the value]
    // NEVER change the value directly ONLY ONLY ONLY change the value via the function provided (the set function)
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [shown, setShown] = useState(false);
    // this is the function that I want to run when the form submit button is clicked by the user
    // this is my programs "reaction" to the user submitting the form
    function onAddressFormSubmit(event) {
        // the default action of a form submit is to refresh the page
        // this will prevent the default action (this will stop the page from refreshing)
        event.preventDefault();
        console.log(event)
        // when the form is submitted we want to run the function on the app component to add the address to the screen
        // the function we want to run is stored in the props object under the name "addAddress"
        // so when I call this function here I am actually running a function on my App component
        //props.addAddress(firstName, lastName, email)
        dispatch({type: SUBMIT_ADDRESS, data: { firstName, lastName, email}})
        setShown(false);
    }

    return (
        <>
            <Button onClick={()=>setShown(true)}>Add Contact</Button>
            <Modal show={shown}>

                <Form onSubmit={onAddressFormSubmit}>
                    <Modal.Body>

                        <Form.Group>
                            <Form.Label>
                                First Name
                                {/* We are setting the value of the input to whatever value is stored in the state for "firstName"*/}
                            </Form.Label>
                            <Form.Control required type={'text'} value={firstName} onChange={e => setFirstName(e.target.value)}/>

                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Last Name
                                {/* the "onChange" prop here is setting up a function that will call the set function for the state variable lastName*/}
                                {/* We are updating the state with the new value for the input box */}
                                {/* We are saving the user input in the lastName state */}
                            </Form.Label>
                            <Form.Control required type={'text'} value={lastName} onChange={e => setLastName(e.target.value)}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Email
                            </Form.Label>
                            <Form.Control type={'email'} value={email} onChange={e => setEmail(e.target.value)}/>
                        </Form.Group>
                    </Modal.Body>
                    {/* If a button is inside a form element its default is to submit the form */}
                    {/* this is why we do not need to add an "onClick" prop */}
                    <Modal.Footer>
                        <Button type={"submit"}>Submit</Button>
                        <Button variant={"warning"} onClick={()=>setShown(false)}>Close</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}