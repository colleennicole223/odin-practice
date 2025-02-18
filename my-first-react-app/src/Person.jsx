import { useState } from 'react';

export default function Person() {
    const [person, setPerson] = useState({ fullName: "", age: 100 });
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const fullName = firstName + ' ' + lastName;

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
        person.fullName = fullName;
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
        person.fullName = fullName;
    }
  
    const handleIncreaseAge = () => {
        setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
      };
  
    console.log("during render: ", person);
  
    return (
      <>
        <label>
        First name:{' '}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
        </label>
        
        <label>
            Last name:{' '}
            <input
            value={lastName}
            onChange={handleLastNameChange}
            />
        </label>

        <button onClick={handleIncreaseAge}>Increase age</button>
        
        <p>
            Your ticket will be issued to: {fullName}, age of: {person.age}
        </p>
      </>
    );
  }
  
