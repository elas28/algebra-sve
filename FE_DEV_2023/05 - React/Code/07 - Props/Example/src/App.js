import './App.css';
import { Student, University, Comment } from './Components';

const comment = {
  date: new Date(),
  text: 'I love learning React!',
  author: {
    name: 'John Doe',
    url: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg'
  }
}

export default function App() {
  return (
    <div>
      <Comment date={comment.date} text={comment.text} author={comment.author} />
    </div>
  );
}
