import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <header className="text-4xl text-white font-bold py-6 px-4 bg-cyan-600 flex justify-center gap-6">
        <NavLink to="/">home</NavLink>
        <NavLink to="/post">posts</NavLink>
        <NavLink to="/about">about</NavLink>
      </header>
    </div>
  );
};
