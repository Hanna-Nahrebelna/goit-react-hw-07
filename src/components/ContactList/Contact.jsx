import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

import css from './ContactList.module.css'


export default function Contact({id, name, phone}) {
  const dispatch = useDispatch();

  const handledDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      <ul className={css.contactList}>
        <span className={css.contactSpan}>
          <li className={css.contactItem}><IoPerson size="20" /></li>
          <li><p className={css.contactText}>{name}</p></li>
        </span>
        <span className={css.contactSpan}>
          <li className={css.contactItem}><FaPhone size="20" /></li>
          <li><p className={css.contactText}>{phone}</p></li>
        </span>        
      </ul>
      
      <span className={css.contactBtnSpan}>
        <button className={css.contactBtn} onClick={handledDelete}>Delete</button>
      </span>
     
    </div>
  )  
}
