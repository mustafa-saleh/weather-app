import React from 'react';

const Location = ({city}) => {
  return ( 
    <div>
      {`${city.name}, ${city.country}`}
      <br/>
      <div>Updated a few minutes ago</div>
    </div>
   );
}
 
export default Location;