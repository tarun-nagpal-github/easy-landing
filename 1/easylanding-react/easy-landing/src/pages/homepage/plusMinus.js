import React, { useState } from 'react'; 

function PlusMinus() {
  const [count, setCount] = useState(0);

  return (
    <div>
      
      <button className="add"  onClick={() => setCount(count + 1)}> +</button>
      <input type="number" disabled id="1" value={count} />
  
      <button className="sub" onClick={() => setCount(count - 1)}> - </button>
    </div>
  );
}
 
export default PlusMinus;
