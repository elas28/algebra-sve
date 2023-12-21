// https://tv.skuflic.com

// Components
import Trending from './Components/Trending/Trending';

// Styles
import './Styles/App.scss';

// Images
import Streamer from './Images/Logo/streamer.svg';

export default function App() {
  return (
    <div className='main'>
      <div className='hero'>
        <img src={Streamer} alt='Stream+' className='logo' />
        <h1>A mountain of entertainment</h1>
        <p>Stream+, home to the world's favourite stars, stories and brands, is coming soon*. <br />Get ready to experience stellar originals, exclusive premieres, hit movies and the very best must-see TV.</p>
      </div>
      <div className='holder'>
        <Trending type='movie' timeframe='day' />
        <Trending type='tv' timeframe='day' />
        <Trending type='movie' timeframe='week' />
      </div>
    </div>
  );
}
