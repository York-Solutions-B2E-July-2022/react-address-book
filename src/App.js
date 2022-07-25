import './App.css';
import AddressForm from "./AddressForm";
import {useState} from "react";

// app is the "root" component is it the component that is rendered first
// all other components are "children" of the app component
function App() {

    // this is "array destructuring" all that means is that the array that is reutrned from the useState() function
    // is "indexed" and stored into separate variables for us!
    // the array destructing is the same as saying
    /*
            const addressState = useState([]);
            const addressList = addressState[0];
            const setAddressList = addressState[1];
     */
    const [addressList, setAddressList] = useState([]);

    function addAddressToList(fistName, lastName, email) {
        setAddressList(
            [
                ...addressList,
                {fistName: fistName, lastName: lastName, email: email}
            ]
        )
    }

    return <div>
        {/*
            We are rendering the "AddressForm" component here and passing a "property" under the name "addAddress"
            Properties are just a way to pass data to a child component
                In this case we are using this property to pass a function (addAddressToList()) to the child it can call
                that function and have the ability to cause a re-render on its parent component. (in this case the App comp)
        */}
        <AddressForm addAddress={addAddressToList}></AddressForm>

        {/*
            We need to render an array of objects, so we can see each piece of address data the user has input
            React can render an array without issue (as long as we provide a unique key property to each item in the array),
            but React cannot render an object. So we are using the js map function to convert the array of objects into an array
            of JSX
        */}
        {addressList.map(
            (obj, idx) => <div key={idx}>
                Name: {obj.firstName} {obj.lastName}
                <br/>
                Email: {obj.email}
            </div>
        )}
    </div>
}

export default App;
