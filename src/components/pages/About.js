import React from 'react'

//we can either export in the same line here or separate to the end below
function About() {
  return (
    //  using <React.Fragment> when we dont what to show tag on the browser (ghost tag)
    <React.Fragment>
      <h1>About</h1>
      <p>This is the TodoList app v1.0.0. It is part of a React crash course</p>
    </React.Fragment>
  )
}


export default About;