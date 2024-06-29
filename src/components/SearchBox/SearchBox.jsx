import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/selectors';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        name="search"
        value={filter}
        id="search"
        onChange={handleChange}
        className={styles.input}
      />
    </div>
  );
};

export default SearchBox;
