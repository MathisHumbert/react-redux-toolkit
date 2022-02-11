import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPersons } from './features/persons';

const App = () => {
  const dispatch = useDispatch();
  const { persons } = useSelector((state) => state.persons);

  useEffect(() => {
    dispatch(getPersons());
  }, [dispatch]);

  return (
    <div className='App'>
      <h1>React Redux Toolkit Crash Course</h1>
      {persons && persons.map((user, i) => <h1 key={i}>{user.name}</h1>)}
    </div>
  );
};

export default App;
