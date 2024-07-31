import React, { useState } from 'react'
import StyledBox from './StyledDev';

function Boxgenerator() {
     const [color, setColor] = useState("");
     const [colors, setColors] = useState([]);

     const saveColor = (e) => {
          setColor(e.target.value);

     }
     const handelsubmit = (e) => {
          e.preventDefault();
          // console.log(e);
          setColors([...colors, color]);
          setColor("");
          // console.log(colors)
     }


     return (
          <>
               <div>
                    <form onSubmit={handelsubmit}>
                         <label htmlFor="batata">Color</label>
                         <input type="text" name="batata" value={color} onChange={saveColor} />
                         <button>add</button>
                    </form>
               </div>
               <div style={{ display: 'flex', justifyContent: 'center', maxWidth: '700px', flexWrap: 'wrap' }}>
                    {colors.map((color, index) => <div key={index} ><StyledBox bgColor={color} /></div>)}

               </div>
          </>
     )
}

export default Boxgenerator