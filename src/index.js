import React from 'react';
import ReactDOM from 'react-dom/client';

//TODO: add CSS
import './index.css';
import { books } from './booksData';  // it is js file so we do not need extension
import Book from './Book';

//TODO: setup vars
const root = ReactDOM.createRoot(document.getElementById("root"));


// TODO: JSX rules
// Always return one element
// div, section, articlem React.fragment

// stateless funcational component
// always return JSX 

/* function Greeting(params) {
  return <h4 className="root">Chintan</h4>
} */

// Using arrow funcation
// const Greeting = () =>{
//   return React.createElement('h1',{},"Hello Chintan Here")
// }

//TODO: Nested componenet and react tool
/*function Greeting(params) {
  return <div>
    <Person/>
    <Messsage/>
  </div>
};*/

// TODO: Amamxon Book seller webpage

function BookList() {
  return (
    <section className='bookList'>
      {books.map((book) => {
        const { img, title, author: { firstN, secondN } } = book
        return <Book key={book.id} book={book} />;  //TODO: book={book} we can use {...book} which means you spreadout the all property and send it
      })}
    </section>
  )
}
/*
// TODO: first way to use props
const Book = (props) => {
  console.log("------>" + props)
  return <article className='book'>
    <img src={props.img} height={150} />
    <h1>{props.title}</h1>
    <h4>{props.author}</h4>
  </article>
}*/

const Title = () => {
  return <h1>The Invisible Life of Addie LaRue</h1>
}

const Author = () => {
  return <h1 style={{
    color: '#617d98', fontSize: '0.75rem',
    marginTop: '0.25rem'
  }}>by V. E. Schwab</h1>
}


root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);

//ReactDOM.render(<BookList/>,document.getElementById('root')); //TODO: first para: What we are goin to render second: where we are going to render
