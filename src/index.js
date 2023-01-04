import React from 'react';
import ReactDOM from 'react-dom';

//add CSS

import './index.css';

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
function Greeting(params) {
  return <div>
    <Person/>
    <Messsage/>
  </div>
}

const Person = () => <h1>Hello Chintan</h1>
const Messsage = ()=> {
  return <div>
    <p>This is my message</p>
    <p>Chintan sign</p>
  </div>
}


// TODO: Amamxon Book seller webpage

function BookList() {
  return (
    <section>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  )
}

const Book = ()=> {
  return <article>
    <Image/>
    <Title/>
    <Author/>
  </article>
}

const Image = ()=> {
  return <img src='https://m.media-amazon.com/images/I/91Ql48Y0mqL._AC_UL640_QL65_.jpg' height={150}/>
}

const Title = ()=> {
  return <h1>The Invisible Life of Addie LaRue</h1>
}

const Author = ()=> {
  return <h1>by V. E. Schwab</h1>
}


ReactDOM.render(<BookList/>,document.getElementById('root')); //TODO: first para: What we are goin to render second: where we are going to render
