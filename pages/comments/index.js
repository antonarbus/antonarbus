// pages/comments/index.js
import { useState } from "react"

export default function Component() {
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')
  const updateInputVal = (e) => setComment(e.target.value)

  const getComments = async () => { 
    const response = await fetch('api/comments')
    const result = await response.json()
    setComments(result)
  }

  const submitComment = async () => { 
    const response = await fetch('api/comments', {
      method: 'POST',
      body: JSON.stringify({comment: comment}),
      headers: { 'Content-Type': 'Application/json' }
    })
    const data = await response.json()
  }

  const deleteComment = async (commentId) => { 
    const response = await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE'
    })
    const data = await response.json()
    console.log(data)
    getComments()
  }

  return (
    <>
      <input type="text" value={comment} onChange={updateInputVal} />
      <button onClick={submitComment}>Submit comment</button>
      <button onClick={getComments}>Get comments</button>
      { 
        comments.map(comment => (
          <div key={comment.id}>
            {comment.text}
            <button onClick={() => deleteComment(comment.id)}>Delete</button>
            <hr/>
          </div>
        )) 
      }
    </>
  )
}