import React, { useState } from 'react';
import { Button, Badge, Container } from 'react-bootstrap';
import counter from "./counter.module.css";

export function Counter() {

  const [count, setCount] = useState(0);
  const [color, setColor] = useState('black');


  const getRandomColor = () => {
    const colors = ['red', 'green', 'blue', 'purple', 'orange', 'white', 'bluesky'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  const incrementWithColors = () => {
    setCount(count + 1);
    setColor(getRandomColor());
    console.log(color)
  }


  const increment = () => {
    setCount(count + 1);
  }
 
  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <div>
    <p className={counter.title}>Cuantas veces podes presionar el contador?</p>
    <Container className="text-center">
      <Button variant="danger" className={counter.decrement} disabled={count <= 0} onClick={decrement}>-</Button>
      <Badge variant="secondary" style={{color: color}} className={counter.badge}>{count}</Badge>
      {console.log(color)}
      <Button variant="success" className={counter.increment} onClick={increment}>+</Button>
      <Button variant="success" onClick={incrementWithColors}>With Random Colors</Button>
    </Container>
    </div>
  )
}

