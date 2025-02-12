
import React from 'react'
import {motion,AnimatePresence} from "framer-motion";
import { useContext } from 'react';
//component
import FeedbackItem from './FeedbackItem'
//context file
import FeedbackContext from '../context/FeedbackContext';

const FeedbackList = () => {
   const { feedback} = useContext(FeedbackContext)
    if(!feedback || feedback.length === 0){
        return <p>No Feedback Yet</p>
    }
  return (
    <div className='feedback-list'>
      
      <AnimatePresence>
      {feedback.map((item)=>
      <motion.div 
      key={item.id}
      initial ={{opacity: 0}}
      animate ={{opacity: 1}}
      exit={{opacity:0}}
      >

     <FeedbackItem 
     key={item.id}
     item ={item}
      />
     </motion.div>
    )}
    </AnimatePresence>
    </div>
  )
}


export default FeedbackList
