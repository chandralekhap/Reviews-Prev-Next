import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [count, setCount] = useState(0);

  
  const { name, job, image, text } = people[count];
  
  

  const onRightHandler = () =>{

   
    if (count === 3) {
      setCount(0);
    } else {
      setCount((prevCount)=>(prevCount+1));
    }

  }
  const onLeftHndler = ()=>{

    if (count === 0) {
      setCount(3);
    } else {
      setCount((prevCount)=>(prevCount-1));
    }
   
  }
const  onSurpriseHandler =()=>{

 // setCount(Math.random())


 const random =Math.floor(Math.random()*4);
console.log(random)
 
setCount(random);


}


  return( <article className='review'>
  <div className='img-container'>
    <img src={image} alt={name} className='person-img' />
    <span className='quote-icon'>
      <FaQuoteRight />
    </span>
  </div>
  <h4 className='author'>{name}</h4>
  <p className='job'>{job}</p>
  <p className='info'>{text}</p>
  <div className='button-container'>
    <button className='prev-btn'  onClick = {onLeftHndler} >
      <FaChevronLeft />
    </button>
    <button className='next-btn' onClick = {onRightHandler}>
      <FaChevronRight />
    </button>
  </div>
  <button className='random-btn' onClick = {onSurpriseHandler} >
    surprise me
  </button >
</article>)
};

export default Review;
