import React from 'react';
import { Spinner } from 'reactstrap';

function Loading() {
return (
  <div>
    <Spinner style={{width: '12rem', height: '12rem' }} />{""}
        <h2>Loading...</h2>
      </div>
    )
}

export default Loading;