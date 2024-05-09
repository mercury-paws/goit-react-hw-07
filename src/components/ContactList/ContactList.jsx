import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

export default function ContactList() {
  const selectContacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const foundContact = selectContacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <ul className={css.list}>
        {foundContact.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
    </>
  );
}
