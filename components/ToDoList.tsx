import { IBeer } from '@/types/beers';
import React from 'react';
import Beer from './Beer';

interface ToDoListProps {
  beers: IBeer[];
}

const ToDoList: React.FC<ToDoListProps> = ({ beers }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Brand</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {beers.map((beer) => (
            <Beer key={beer.id} beer={beer} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
