import React from 'react'
import { connect, useDispatch } from 'react-redux'

function Post({ data }) {
    const dispatch = useDispatch()
    const deleteOnclick = () => {
        dispatch({
            type: 'DELETE_POST',
            id: data.id
        })
    }

    const editOnclick = () => {
        dispatch({
            type: 'EDIT_POST',
            id: data.id
        })
    }


    return (
        <div className='post'>
            <h2 className='post_title'>{data.title}</h2>
            <p className='post_message'>{data.content}</p>
            <div className='control-buttons'>
                <button className='edit' onClick={editOnclick}>Edit</button>
                <button className='delete' onClick={deleteOnclick}>Delete</button>
            </div>
        </div>
    )
}

export default connect()(Post)
