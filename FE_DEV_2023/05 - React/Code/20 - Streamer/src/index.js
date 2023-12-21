// Base React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import App from './App';

// React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import { Footer, MovieDetails, NavigationBar, Trending, Search, Rate, TVShowDetails, SeasonDetails, EpisodeDetails } from './Components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavigationBar />
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/view/movie/:movieID' element={<MovieDetails />} />

      <Route path='/trending/movie/week' element={<Trending type='movie' timeframe='week' title='Trending Movies' subtitle='Not happy with these? You can always use our search function.' display='list' />} />

      <Route path='/trending/tv/week' element={<Trending type='tv' timeframe='week' title='Trending TV Shows' subtitle='Not happy with these? You can always use our search function.' display='list' />} />

      <Route path='/search' element={<Search />} />

      <Route path='/rate/movie/:contentID' element={<Rate name='movie' type='movie' />} />
      <Route path='/rate/tv/:contentID' element={<Rate name='TV Show' type='tv' />} />

      <Route path='/view/tv/:tvID' element={<TVShowDetails />} />
      <Route path='/view/tv/:tvID/season/:seasonID' element={<SeasonDetails />} />
      <Route path='/view/tv/:tvID/season/:seasonID/episode/:episodeID' element={<EpisodeDetails />} />

    </Routes>
    <Footer />
  </BrowserRouter>
);
