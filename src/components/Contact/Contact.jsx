import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

//екшен видалення контакту при кліку по кнопці видалення useDispatch

export default function Contact({ contact: { name, number, id } }) {
  const dispatch = useDispatch();

  return (
    <div className={css.contactInfo}>
      <div>
        <p className={css.text}>{name}</p>
        <p className={css.text}>{number}</p>
      </div>
      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
}
