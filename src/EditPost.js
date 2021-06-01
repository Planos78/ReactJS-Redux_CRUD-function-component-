import React,{ useState } from 'react'
import { connect, useDispatch } from 'react-redux'

function EditPost({data}) {
    const [titles, setTitle] = useState(data.title);
    const [content, setContent] = useState(data.content);
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
        const newData = {
            id: new Date(),
            titles,
            content,
            editing: !data.editing
        }
        console.log(data)
        dispatch({
            type:'UPDATE_POST',
            id: data.id,
            newData
        })
    }
    return (
        <div className='post'>
            <h1>Edit Post</h1>
            <form className='form' onSubmit={handleSubmit}>
                <input type='text' onChange={handlerChangeTitle} defaultValue={data.title} placeholder='Enter post title' required/>
                <br/><br/>
                <textarea cols='30' rows='5' onChange={handlerChangeContent} defaultValue={data.content} placeholder='Enter post' required/><br/>
                <button>Update</button>
            </form>
        </div>
    )
}

export default connect()(EditPost)
