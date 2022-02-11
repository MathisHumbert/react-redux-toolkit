import { useSelector } from 'react-redux';

const App = () => {
  const { value: userList } = useSelector((state) => state.users);

  return (
    <div className='App'>
      <div className='addUser'>
        <input type='text' placeholder='Name...' />
        <input type='text' placeholder='Username...' />
        <button>Add User</button>
      </div>
      <div className='displayUsers'>
        {userList.map((user) => {
          return <h1>{user.name}</h1>;
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
