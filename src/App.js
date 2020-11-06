import React, { useState } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Form from './components/Form';
import List from './components/List';

const ALL_EXPENSES = [
  { id: 1, name: 'Buy a book', amount: 20 },
  { id: 1, name: 'Buy a milk', amount: 5 },
  { id: 1, name: 'Book a flight ticket', amount: 225 }
]

function App() {
  const [expenses, setExpenses] = useState(ALL_EXPENSES);  
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleName = e => {
    setName(e.target.value);
  }

  const handleAmount = e => {
    setAmount(e.target.value);
  }

  const handleSubmitForm = e => {
    e.preventDefault();

    if (name !== '' && amount > 0) {
      const expense = { name, amount };
      setExpenses([...expenses, expense]);

      setName('');
      setAmount('');
    } else {
      window.alert('Invalid expense name or amount');
    }
  }

  return (
    <Container className='text-center'>
      <Jumbotron fluid>
        <h3 className='display-6'>
          React Expense Tracker App
        </h3>
        <div>
          <p>
            Total Expense:{' '}
            <span className='text-success'>
              ${' '}
              {
                expenses.reduce((accumulator, currentValue) => {
                  return (accumulator += parseInt(currentValue.amount))
                }, 0)
              }
            </span>
          </p>
        </div>
        <Form 
          name={name}
          amount={amount}
          handleName={handleName}
          handleAmount={handleAmount}
          handleSubmitForm={handleSubmitForm}
        />
        <List expenses={expenses} />
      </Jumbotron>
    </Container>
  );
} 

export default App;