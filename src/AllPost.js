import React from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import EditPost from './EditPost'
function AllPost(props) {
    return (
        <div>
            <h1 className='post_heading'>All Posts</h1>
            {props.posts.map((item)=>
            (
               <div key={item.id}>
                   {item.editing ? <EditPost data={item}/>:<Post data={item}/>}
               </div>
            )
            )}
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
        posts:state
    }
}

export default connect(mapStateToProps)(AllPost)