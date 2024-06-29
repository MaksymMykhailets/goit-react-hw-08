import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <span>Welcome, {user.name}</span>
      <button onClick={handleLogOut}>Log out</button>
    </div>
  );
};

export default UserMenu;
