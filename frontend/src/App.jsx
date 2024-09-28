import React, { useState } from "react";
import Blog from "./component/Blog";
import AllBlog from "./component/AllBlog";

const App = () => {
  const [realtime, setrealtime] = useState(false);
  const makeRealtime = () => {
    setrealtime (!realtime);
  };
  return (
    <div className="flex justify-around py-10">
      <Blog  realtime = {makeRealtime}/>
      <AllBlog observerState= {realtime} />
    </div>
  );
};

export default App;
