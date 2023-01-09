//rafce for sniipet

import React from 'react'

// TODO: seecond way to use props
const Book = (props) => { //TODO: intead of props we can add  img, title, author: { firstN, secondN }, children }
    const { img, title, author: { firstN, secondN }, children } = props.book; //TODO: if we use {...book} then we can write only props instead of props.book
    //attributes, eventHandler
    // onclick, onMpuseHover
    const clickHandler = (e) => {
        alert('Hello ' + title)
    }

    const complexExample = (author) => {
        //  console.log("---->  " + author.firstN);
    }
    return <article className='book' onMouseOver={() => {
        console.log("Title" + title)
    }}>
        <img src={img} height={150} />
        <h1 onClick={() => console.log(title)}>{title}</h1>
        <h4>{firstN + ' ' + secondN}</h4>
        <button type='button' onClick={clickHandler}>Referenfce Button</button>
        <button type='button' onClick={() => complexExample(firstN)}>Referenfce Button</button>
    </article>
}

export default Book
