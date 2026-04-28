import React, { useState } from 'react';

function Squire({ value, onSquireClick }) {


  return <button onClick={onSquireClick} className='bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg'>{value}</button>
}

const Board = () => {
  const [sqr, setSqr] = useState(Array(9).fill(null));
  const [nextX, setNextX] = useState(true)

  const onSquireClick = (i) => {
    if (sqr[i]) { return }
    const nextSqr = sqr.slice()
    nextX ? nextSqr[i] = "X" : nextSqr[i] = "O";
    setSqr(nextSqr)
    setNextX(!nextX)
  }
  return (
    <>
      <div className='flex'>
        <Squire onSquireClick={() => onSquireClick(0)} value={sqr[0]} />
        <Squire onSquireClick={() => onSquireClick(1)} value={sqr[1]} />
        <Squire onSquireClick={() => onSquireClick(2)} value={sqr[2]} />
      </div>
      <div className='flex'>
        <Squire onSquireClick={() => onSquireClick(3)} value={sqr[3]} />
        <Squire onSquireClick={() => onSquireClick(4)} value={sqr[4]} />
        <Squire onSquireClick={() => onSquireClick(5)} value={sqr[5]} />
      </div>
      <div className='flex'>
        <Squire onSquireClick={() => onSquireClick(6)} value={sqr[6]} />
        <Squire onSquireClick={() => onSquireClick(7)} value={sqr[7]} />
        <Squire onSquireClick={() => onSquireClick(8)} value={sqr[8]} />
      </div>

    </>
  );
};

export default Board;