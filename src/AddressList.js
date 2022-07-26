import Contact from "./Contact";

export default function AddressList(props) {
    const {
        addressList,
        deleteContact,
    } = props;

    return <div>
        {addressList.map(
            (obj, idx) => <Contact key={idx} contact={obj} deleteContact={deleteContact} idx={idx}></Contact>
        )}
    </div>
}