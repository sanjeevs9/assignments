import { useState } from 'react'
import Card  from './component.jsx'
function App() {
  

  return (
    <>
     <Card>
      {{
        name:"sanjeev",
        description:"this is my description",
        linkedin:"https://www.linkedin.com/in/sanjeev-kumar-s91/",
        twitter:"https://twitter.com/sanjeev_91",
        interests:["coding","reading","music"],
      }}
     </Card>
    </>
  )
}

export default App
