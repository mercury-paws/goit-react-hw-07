import ContactForm from "./ContactForm/ContactForm.jsx";
import SearchBox from "./SearchBox/SearchBox.jsx";
import ContactList from "./ContactList/ContactList.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contactsOps.js";
import Loader from "./Loader/Loader.jsx";

export default function App() {
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.contacts.loading.fetch);
  const isError = useSelector((state) => state.contacts.error);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {isError && <p>Ooops, smth went wrong</p>}
      <ContactList contacts={contacts} />
    </div>
  );
}
