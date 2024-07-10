import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MoviesList';
import MovieDetails from './components/MovieDetails';
import BookingForm from './components/BookingForm';
import Confirmation from './components/BookingConfirmation';
import NotFound from './components/NotFound'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
        <Route path="/book/:id" element={<BookingForm />} />
        <Route path="/confirmation/:id/:bookingId" element={<Confirmation />} />
        <Route path="*" element={<NotFound />} /> {/* Handle 404 errors */}
      </Routes>
    </Router>
  );
}

export default App;

const movies = [
  { id: 1, title: 'Movie 1', image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Movie 2', image: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Movie 3', image: 'https://via.placeholder.com/150' },
  { id: 4, title: 'Movie 4', image: 'https://via.placeholder.com/150' },
  { id: 5, title: 'Movie 5', image: 'https://via.placeholder.com/150' },
  { id: 6, title: 'Movie 6', image: 'https://via.placeholder.com/150' },
  { id: 7, title: 'Movie 7', image: 'https://via.placeholder.com/150' },
  { id: 8, title: 'Movie 8', image: 'https://via.placeholder.com/150' },
  { id: 9, title: 'Movie 9', image: 'https://via.placeholder.com/150' },
  { id: 10, title: 'Movie 10', image: 'https://via.placeholder.com/150' }
];

export { movies };
