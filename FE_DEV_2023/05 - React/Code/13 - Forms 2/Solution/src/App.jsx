import { useState } from 'react';
import { User, NewUser } from './User';

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Ivan', years: 30 },
    { id: 2, name: 'Marko', years: 35 },
    { id: 3, name: 'Ana', years: 25 },
  ]);

  const handleButtonPress = () => {
    const newUsers = users.map(user => ({ ...user, years: user.years + 1 }));
    setUsers(newUsers);
  };

  const handleNameChange = (event, index) => {
    const newUsers = [...users];
    newUsers[index].name = event.target.value;
    setUsers(newUsers);
  };

  const handleDeleteUser = index => {
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };

  const addNewUser = ({ name, years }) => {
    const newUser = {
      id: crypto.randomUUID(),
      name,
      years,
    };

    setUsers([...users, newUser]);
  };

  return (
    <div>
      <h1>React aplikacija</h1>
      <p>Ovo zbilja radi</p>
      <button onClick={handleButtonPress}>Promjena godina</button>

      {users.map((user, index) => (
        <User
          key={user.id}
          id={user.id}
          name={user.name}
          years={user.years}
          onNameChange={event => handleNameChange(event, index)}
          onDelete={() => handleDeleteUser(index)}
        />
      ))}

      <NewUser onUserSubmit={addNewUser} />
    </div>
  );
};

export default App;

