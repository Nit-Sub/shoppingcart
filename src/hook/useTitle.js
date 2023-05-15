import React, { useEffect } from 'react'

export const useTitle = (title) => {
 useEffect(()=>{
    document.title=`${title} |Cart`
 },[title])
  return (
    <div>useTitle</div>
  )
}
