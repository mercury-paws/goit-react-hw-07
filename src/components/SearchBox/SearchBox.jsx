import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

//екшен зміни фільтра при введенні в текстове поле

export default function SearchBox() {
  const dispatch = useDispatch();

  return (
    <div className={css.search}>
      <label>Find contacts by name</label>
      <input
        type="text"
        name="search"
        onChange={(event) => dispatch(changeFilter(event.target.value))}
        className={css.inputSearch}
      ></input>
    </div>
  );
}
