import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={styles.userMenu}>
      <span className={styles.welcome}>Welcome, {user.name}</span>
      <button onClick={handleLogOut} className={styles.button}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
