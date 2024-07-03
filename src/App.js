
import './App.css';
import HomePage from './Component/HomePage';

// import React, { useRef } from 'react';
// import ReactToPrint from 'react-to-print';

const App = () => {
  // const componentRef = useRef();

  return (
    <div>
      {/* <ReactToPrint
        trigger={() =>
          <button type="button" class="btn btn-dark">Print pdf</button>}
        content={() => componentRef.current}
      /> */}
      {/* <HomePage ref={componentRef} /> */}
      <HomePage />
    </div>
  );
};

export default App;
