import Contact from "./Contact";

export default function AddressList(props) {
    const {
        addressList,
        deleteContact,
    } = props;

    console.log(addressList)
    return <div>
        {addressList.map(
            contactData => {
                return <Contact key={contactData.id} contact={contactData} deleteContact={deleteContact}></Contact>
            }
        )}
    </div>
}