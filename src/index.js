import React from 'react';
import ReactDOM from 'react-dom/client';

//TODO: add CSS
import './index.css';

//TODO: setup vars
const root = ReactDOM.createRoot(document.getElementById("root"));
const firstBook = {
  title: 'The Invisible Life of Addie LaRue',
  author: 'by V. E. Schwab',
  img: 'https://m.media-amazon.com/images/I/91Ql48Y0mqL._AC_UL640_QL65_.jpg'
}

const secondBook = {
  title: 'Second',
  author: ' V. E. Schwab',
  img: 'https://m.media-amazon.com/images/I/41CSAHVHk+L._SX327_BO1,204,203,200_.jpg'
}

const thirdBook = {
  title: 'Third',
  author: 'b. Schwab',
  img: 'https://images-na.ssl-images-amazon.com/images/I/41ZLnc34EiL._AC_UL900_SR900,600_.jpg'
}

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
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} />
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
      <Book img={thirdBook.img} title={thirdBook.title} author={thirdBook.author} />
    </section>
  )
}

const Book = (props) => {
  console.log("------>" + props)
  return <article className='book'>
    <img src={props.img} height={150} />
    <h1>{props.title}</h1>
    <h4>{props.author}</h4>
  </article>
}



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
