import Contact from '../ContactList/Contact.jsx';
import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter } from "../../redux/selectors.js";
import css from './ContactList.module.css'

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const visibleContacts = contacts.filter((contact) => {    
      if ("id" in contact && "name" in contact && "phone" in contact) {
        if (
          typeof contact.id === "string" &&
          typeof contact.name === "string" &&
          typeof contact.phone === "string"
        ) {
          return contact.name.toLowerCase().includes(filter.toLowerCase());
        }
      }
      return false;
  });


  return (
    <>
      <ul className={css.list}>
        {visibleContacts.map((contact) => {
          return (
            <li className={css.contactList} key={contact.id}>
              <Contact id={contact.id} name={contact.name} phone={contact.phone} />
            </li>
          )
        })}            
      </ul>
    </>    
  );
}
