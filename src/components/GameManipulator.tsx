import React from 'react';
import { useGrid } from '../contexts/GridProvider'; 
import gridPng from '@assets/grid.png'

const GameManipulator = () => {
  const { gridOn, toggleGrid } = useGrid();
  
  const bg = gridOn ? 'bg-green-500' : 'bg-red-500';
  const bgHover = gridOn ? 'hover:bg-green-600' : 'hover:bg-red-600'
  
  return (
    <div>
      <button
        className={`${bg} p-4 rounded-lg ml-4 w-[125px] h-[100px] font-bold ${bgHover} relative z-10 hover:animate-pulse`}
        onClick={toggleGrid}
        style={{ background: `url(${gridPng}) no-repeat center / contain ` }}
      >
      </button>
    </div>
  );
};

export default GameManipulator;
