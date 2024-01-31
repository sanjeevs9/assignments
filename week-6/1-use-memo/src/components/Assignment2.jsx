import React, { useEffect, useState,useMemo } from "react";

// In this assignment, you will create a component that renders a large list of sentences and includes an input field for filtering these items. 
// The goal is to use useMemo to optimize the filtering process, ensuring the list is only re-calculated when necessary (e.g., when the filter criteria changes).
// You will learn something new here, specifically how you have to pass more than one value in the dependency array

const words = ["hi", "my", "name", "is", "for", "to", "random", "word" ];
const length =1000;
const AllWords=[];

for(let i =0;i<length;i++){
    let sentence="";
    for(let j=0;j<words.length;j++){
        sentence+= (words[Math.floor(Math.random()*words.length)])
        sentence+=" "
    }
    AllWords.push(sentence);
}

export function Assignment2(){
    const[sentence,setSentence]= useState(AllWords);
    const[filter,setFilter]=useState("");

    const filtered=useMemo(()=>{
        return sentence.filter(x=>x.includes(filter))
 },[filter,sentence])

return(<>

<input type="text"  onChange={e=>{
    setFilter(e.target.value)
}}></input>

{filtered.map(word=>
    <div>
        {word}
    </div>
)}
</>
)
}

