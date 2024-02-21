import React, { useState } from 'react';
import './Greetings.css';

function Square() {
  const [color, setColor] = useState('white');

  const handleMouseEnter = () => {
    setColor('black');
  };

  return (
    <button
      style={{ backgroundColor: color }}
      onMouseEnter={handleMouseEnter}
      
      className='square'>
    </button>
  );
}

function MyComponent() {
  const [resetKey, setResetKey] = useState(0);

  const handleClick = () => {
    setResetKey(resetKey => resetKey + 1);
  
  };

  return (
    <>
      
      <div className='board-row'>
        <Square key={resetKey + '1'} />
        <Square key={resetKey + '2'} />
        <Square key={resetKey + '3'} />
        <Square key={resetKey + '4'} />
        <Square key={resetKey + '5'} />
        <Square key={resetKey + '6'} />
        <Square key={resetKey + '7'} />
        <Square key={resetKey + '8'} />
        <Square key={resetKey + '9'} />
        <Square key={resetKey + '10'} />
        <Square key={resetKey + '11'} />
      </div>
      <div className='board-row'>
        <Square key={resetKey + '12'} />
        <Square key={resetKey + '13'} />
        <Square key={resetKey + '14'} />
        <Square key={resetKey + '15'} />
        <Square key={resetKey + '16'} />
        <Square key={resetKey + '17'} />
        <Square key={resetKey + '18'} />
        <Square key={resetKey + '19'} />
        <Square key={resetKey + '20'} />
        <Square key={resetKey + '21'} />
        <Square key={resetKey + '22'} />
      </div>
      <div className='board-row'>
        <Square key={resetKey + '12'} />
        <Square key={resetKey + '13'} />
        <Square key={resetKey + '14'} />
        <Square key={resetKey + '15'} />
        <Square key={resetKey + '16'} />
        <Square key={resetKey + '17'} />
        <Square key={resetKey + '18'} />
        <Square key={resetKey + '19'} />
        <Square key={resetKey + '20'} />
        <Square key={resetKey + '21'} />
        <Square key={resetKey + '22'} />
      </div>
      <div className='board-row'>
        <Square key={resetKey + '12'} />
        <Square key={resetKey + '13'} />
        <Square key={resetKey + '14'} />
        <Square key={resetKey + '15'} />
        <Square key={resetKey + '16'} />
        <Square key={resetKey + '17'} />
        <Square key={resetKey + '18'} />
        <Square key={resetKey + '19'} />
        <Square key={resetKey + '20'} />
        <Square key={resetKey + '21'} />
        <Square key={resetKey + '22'} />
      </div>
      <div className='board-row'>
        <Square key={resetKey + '12'} />
        <Square key={resetKey + '13'} />
        <Square key={resetKey + '14'} />
        <Square key={resetKey + '15'} />
        <Square key={resetKey + '16'} />
        <Square key={resetKey + '17'} />
        <Square key={resetKey + '18'} />
        <Square key={resetKey + '19'} />
        <Square key={resetKey + '20'} />
        <Square key={resetKey + '21'} />
        <Square key={resetKey + '22'} />
      </div>
      <div className='board-row'>
        <Square key={resetKey + '12'} />
        <Square key={resetKey + '13'} />
        <Square key={resetKey + '14'} />
        <Square key={resetKey + '15'} />
        <Square key={resetKey + '16'} />
        <Square key={resetKey + '17'} />
        <Square key={resetKey + '18'} />
        <Square key={resetKey + '19'} />
        <Square key={resetKey + '20'} />
        <Square key={resetKey + '21'} />
        <Square key={resetKey + '22'} />
      </div>
      <div className='board-row'>
        <Square key={resetKey + '12'} />
        <Square key={resetKey + '13'} />
        <Square key={resetKey + '14'} />
        <Square key={resetKey + '15'} />
        <Square key={resetKey + '16'} />
        <Square key={resetKey + '17'} />
        <Square key={resetKey + '18'} />
        <Square key={resetKey + '19'} />
        <Square key={resetKey + '20'} />
        <Square key={resetKey + '21'} />
        <Square key={resetKey + '22'} />
      </div>
      <div className='board-row'>
        <Square key={resetKey + '12'} />
        <Square key={resetKey + '13'} />
        <Square key={resetKey + '14'} />
        <Square key={resetKey + '15'} />
        <Square key={resetKey + '16'} />
        <Square key={resetKey + '17'} />
        <Square key={resetKey + '18'} />
        <Square key={resetKey + '19'} />
        <Square key={resetKey + '20'} />
        <Square key={resetKey + '21'} />
        <Square key={resetKey + '22'} />
      </div>
      <div className='board-row'>
        <Square key={resetKey + '12'} />
        <Square key={resetKey + '13'} />
        <Square key={resetKey + '14'} />
        <Square key={resetKey + '15'} />
        <Square key={resetKey + '16'} />
        <Square key={resetKey + '17'} />
        <Square key={resetKey + '18'} />
        <Square key={resetKey + '19'} />
        <Square key={resetKey + '20'} />
        <Square key={resetKey + '21'} />
        <Square key={resetKey + '22'} />
      </div>
      <div className='board-row'>
        <Square key={resetKey + '12'} />
        <Square key={resetKey + '13'} />
        <Square key={resetKey + '14'} />
        <Square key={resetKey + '15'} />
        <Square key={resetKey + '16'} />
        <Square key={resetKey + '17'} />
        <Square key={resetKey + '18'} />
        <Square key={resetKey + '19'} />
        <Square key={resetKey + '20'} />
        <Square key={resetKey + '21'} />
        <Square key={resetKey + '22'} />
      </div>
      <button className='button' onClick={handleClick}>Delete This</button>
    </>
  );
}

export default MyComponent;
