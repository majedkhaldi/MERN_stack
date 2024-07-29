import React, { useState } from 'react';

export default function SaleItem(props) {
  
  
  const [count, setCount] = useState(props.age);
  
  const handleClick = () => {
    setCount(count + 1);
  }
 

  return (
    <div>
        <h1>{props.lastname} {props.firstname}</h1>
        <h6>Age: {count}</h6>
        <h6>Hair Color: {props.color}</h6>
        <button onClick={ handleClick }>Birthday Button for {props.firstname}{props.lastname}</button>
    </div>
  )
}

// import React, { useState } from 'react';

// export default function SaleItem(props) {
//   const [count, setCount] = useState(props.age);

//   const handleClick = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h1>{props.lastname} {props.firstname}</h1>
//       <h6>Age: {count}</h6>
//       <h6>Hair Color: {props.color}</h6>
//       <button onClick={handleClick}>Birthday Button for {props.firstname} {props.lastname}</button>
//     </div>
//   );
// }

