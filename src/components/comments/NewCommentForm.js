import { useEffect, useRef } from 'react';
import useHttp from '../../hook/useHttp';
import { addComment } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
  const { status, error, sendRequest } = useHttp(addComment);
  const commentTextRef = useRef();
  const { onAddedComment } = props; //Địa chỉ vẫn là A1; 

  console.log(status);
  useEffect(() => {
    if (status === 'completed' && !error) {
      props.onAddedComment();
    }
  }, [status, error, onAddedComment])


  const submitFormHandler = (event) => {
    event.preventDefault();
    //Validate
    const commentedValue = commentTextRef.current.value
    if (commentedValue.trim() === '') {
      return
    }

    // send comment to server
    const quoteId = props.quoteId;
    sendRequest({ commentData: { text: commentedValue }, quoteId });
  };



  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === 'pending' && (
        <div className='centered'>
          <LoadingSpinner />
        </div>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>

      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
