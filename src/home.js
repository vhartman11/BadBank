import React      from 'react'; 
import Card       from 'react-bootstrap/Card';
import BankImage  from './bank.png';

export function Home() {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={BankImage} />
      <Card.Body>
        <Card.Title>Bad Bank by Vince Hartman</Card.Title>
        <Card.Subtitle>Welcome to the bank, bad bank.</Card.Subtitle>
        <Card.Text>
          Use the navigation bar to move arround.
        </Card.Text>
      </Card.Body>
    </Card>
  );  
};