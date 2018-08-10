import React from 'react';
function Logo(props) {
  return (
    <div className='logoComponents'>
     	<a href='/'><img src={props.srcLogo}/></a>
    </div>
  );
}

export default Logo