import React,{ useState } from 'react'
import { connect, useDispatch } from 'react-redux'

function PostForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useDispatch()
    function handlerChangeTitle(e){
        const inputTitle = e.target.value;
        setTitle(inputTitle)
    }
    function handlerChangeContent(e){
        const inputContent = e.target.value;
        setContent(inputContent)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            id: new Date(),
            title,
            content,
            editing: false
        }
        setTitle('');
        setContent('');
        console.log(data)
        dispatch({
            type:'ADD_POST',
            data
        })
    }

    return (
        <div className='post-container'>
            <h1 className='post_heading'>Create Post</h1>
            <form className='form' onSubmit={handleSubmit}>
                <input type='text' onChange={handlerChangeTitle} value={title} placeholder='Enter post title' required/>
                <br/><br/>
                <textarea cols='30' rows='5' onChange={handlerChangeContent} value={content} placeholder='Enter post' required/><br/>
                <button>Post</button>
            </form>
        </div>
    )
}


export default connect()(PostForm);