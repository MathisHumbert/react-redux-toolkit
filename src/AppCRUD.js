import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser, updateUsername } from './features/users';

const AppCRUD = () => {
  const dispatch = useDispatch();
  const { value: userList } = useSelector((state) => state.users);

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [newUsername, setNewUsername] = useState('');

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
              <input
                type='text'
                placeholder='New Username...'
                onChange={(e) => setNewUsername(e.target.value)}
              />
              <button
                onClick={() =>
                  dispatch(
                    updateUsername({ id: user.id, username: newUsername })
                  )
                }
              >
                Update Username
              </button>
              <button onClick={() => dispatch(deleteUser(user.id))}>
                Delete User
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AppCRUD;
