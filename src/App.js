import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from './features/users';

const App = () => {
  const dispatch = useDispatch();
  const { value: userList } = useSelector((state) => state.users);

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  return (
    <div className='App'>
      <div className='addUser'>
        <input
          type='text'
          placeholder='Name...'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Username...'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
              })
            );
          }}
        >
          Add User
        </button>
      </div>
      <div className='displayUsers'>
        {userList.map((user) => {
          return (
            <div key={user.id}>
              <h1>{user.name}</h1>
              <h1>{user.username}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;

// old App
// import Profile from './components/Profile';
// import Login from './components/Login';
// import ChangeColor from './components/ChangeColor';

// const App = () => {
//   return (
//     <div className='container'>
//       <Profile />
//       <Login />
//       <ChangeColor />
//     </div>
//   );
// };

// export default App;
