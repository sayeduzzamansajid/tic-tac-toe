import React, { useState } from 'react';

function Squire({ value, onSquireClick }) {


  return <button onClick={onSquireClick} className='bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg'>{value}</button>
}

const Board = () => {
  const [sqr, setSqr] = useState(Array(9).fill(null));
  const [nextX, setNextX] = useState(true)
  const winner = CalculateWinner(sqr);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (nextX ? "X" : "O");
  }

  const onSquireClick = (i) => {
    if (sqr[i]||winner) { return }
    const nextSqr = sqr.slice()
    nextX ? nextSqr[i] = "X" : nextSqr[i] = "O";
    setSqr(nextSqr)
    setNextX(!nextX)
  }
  return (
    <>
    <div>{status}</div>
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

function CalculateWinner(sqr) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (sqr[a] && sqr[a] === sqr[b] && sqr[a] === sqr[c]) {
      return sqr[a];
    }
  }
  return null;
}