import React from 'react';
import Postview from './components/postview';


const App = () => {
  const arr=[{id:'21041','title':'Sometitle','imsrc':'orkero.jpg', content:'hehe'}, {id:'21041','title':'Sometitle','imsrc':'orkero.jpg', content:'hehe'}]
  return (
    <div className="App">
    <Postview 
    postarray={arr}
    />
    </div>
  );
}

export default App;
