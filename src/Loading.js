import React from 'react';
import { Spinner } from 'reactstrap';

function Loading() {
return (
  <div>
    <Spinner style={{width: '15rem', height: '15rem' }} type='grow' />{""}
        <h2>Loading...</h2>
      </div>
    )
}

export default Loading;