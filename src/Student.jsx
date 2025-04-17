import React from 'react'

const Student = (props) => {
  return (
    <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent ? "Yes" : "No"} </p>
    </div>
  )
}

export default Student;