import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home';
import { About } from 'pages/About';
import { Post } from 'pages/Post';
import { Notfound } from 'pages/Notfound';
import { PostDetails } from 'pages/PostDetails';

import { Layout } from 'components/Layout';
import { CreatePost } from 'pages/CreatePost';
import { EditPost } from 'pages/EditPost';
export const App = () => {
  return (
    <div className="text-3xl font-bold">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/post" element={<Post />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/post/:id/edit" element={<EditPost />} />
          <Route path="/post/new" element={<CreatePost />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </div>
  );
};
