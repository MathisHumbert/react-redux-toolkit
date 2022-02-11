import { useDispatch } from 'react-redux';
import { login } from '../features/user';

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
        Login
      </button>
    </div>
  );
};

export default Login;
