import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import styles from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.contactItem}>
      <span>
        <p>
          {name}: {number}
        </p>
      </span>
      <button onClick={handleDelete} className={styles.deleteButton}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
