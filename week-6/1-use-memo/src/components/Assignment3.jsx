import React, { useState, useMemo, useEffect } from 'react';
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        // Add more items as needed
    ]);

    const[itemName,setItemName]=useState("");
    const[itemValue,setItemValue]=useState(0);

    // Your code starts here
    const totalValue = useMemo(()=>{
        let sum=0;
        items.map((x)=>{
            sum+=x.value;
        })
        return sum;
    },[items]);

    function addToCart(){
        setItems([...items,{name:itemName,value:Number(itemValue)}]);
    }

    // Your code ends here
    return (
        <div>
          <input type="text" onChange={(e)=>{
            setItemName(e.target.value);
          }}/>
           
          <input type="number" onChange={(e)=>{
            setItemValue(e.target.value)
          }}/>
            <button onClick={()=>{addToCart()}}>Add to cart</button>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value: ${totalValue}</p>
        </div>
    );
};
