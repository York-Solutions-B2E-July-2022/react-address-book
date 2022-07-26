export default function Contact(props) {
    const {
        contact: {firstName, lastName, email},
        deleteContact,
        idx
    } = props;

    return <div style={{border: "1px solid", margin: "1rem", textAlign: "center"}}>
        <div>{firstName} {lastName}</div>
        <div>{email}</div>
        <button onClick={() => deleteContact(idx)} >Delete</button>
    </div>
}
// <div key={idx}>
//     {idx}
//     <br />
//     Name: {obj.firstName} {obj.lastName}
//     <br/>
//     Email: {obj.email}
//     <button onClick={() => deleteContact(idx)}> Delete</button>
// </div>