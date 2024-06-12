import Contact from '../ContactList/Contact.jsx';
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import css from './ContactList.module.css'

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  
   return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li className={css.contactList} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}
