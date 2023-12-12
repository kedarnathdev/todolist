import React from 'react';
import ListOfTodos from './ListOfTodos';
import Navigationbar from './Navigationbar';
import { Toaster } from 'sonner';
const Home = () => {
  return (
    <div>
      <Navigationbar />
      <ListOfTodos />
    </div>
  );
};

export default Home;
