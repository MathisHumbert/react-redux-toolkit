import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user';

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({ name: 'Mathis', age: 23, email: 'mathis@gmail.com' })
          );
        }}
      >
        LOGIN
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        LOGOUT
      </button>
    </div>
  );
};

export default Login;
