import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import css from "./App.module.css"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from '../../redux/contactsOps'
import { selectError, selectLoading } from "../../redux/contactsSlice";



export default function App() {  
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError)

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])
  
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      { isLoading && <Loader />}
      { isError && <ErrorMessage />}
      <SearchBox />      
      <ContactList />
    </div>
  );
}

