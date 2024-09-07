import React from 'react';
import Blog from './component/Blog';
import AllBlog from './component/AllBlog'

const App = () => {
  return (
    <div className="flex justify-around py-10">
      <Blog/>
      <AllBlog/>
    </div>
  )
}

export default App