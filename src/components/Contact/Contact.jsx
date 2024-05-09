import css from "./Contact.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

//екшен видалення контакту при кліку по кнопці видалення useDispatch

export default function Contact({ contact: { name, number, id } }) {
  const dispatch = useDispatch();
  console.log(dispatch);
  const isLoading = useSelector((state) => state.contacts.loading.delete);
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
        disabled={isLoading}
      >
        Delete
      </button>
    </div>
  );
}
