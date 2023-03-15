import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Header } from 'components/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <Link to="">Create New Post</Link>
      <main className="text-xl">
        <Outlet />
      </main>
    </>
  );
};
