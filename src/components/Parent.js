import React, { useState } from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'

function Parent() {
  const [parentData, setParentData] = useState('Parent Data')
  const [isChildAAlive, setIsChildAAlive] = useState(true)
  return (
    <>
      <button
        onClick={() => {
          setIsChildAAlive(!isChildAAlive)
        }}
      >
        {isChildAAlive ? 'Child bye' : 'Child display'}
      </button>
      {isChildAAlive && <ChildA parentData={parentData} />}
      
      <ChildB setParentData={setParentData} />
    </>
  )
}

export default Parent
