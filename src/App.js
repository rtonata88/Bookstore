import { Routes, Route } from 'react-router-dom';
import BooksContainer from './components/BooksContainer';
import CategoriesContainer from './components/CategoriesContainer';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BooksContainer />} />
      <Route path="/categories" element={<CategoriesContainer />} />
    </Routes>
  );
}

export default App;
