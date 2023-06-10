import "./stackcards.css";
import {useRef, React, useState, useEffect} from 'react';

/*
export default function StackCards(){

    return(
        <>
        <div className="background">
            <div className="stack">
                <div className="card">
                    1
                </div>
                <div className="card">
                    2
                </div>
                <div className="card">
                    3
                </div>
                <div className="card">
                    4
                </div>
                <div className="card">
                    5
                </div>
            </div>
       
        </div>
        
        </>

    );
}
*/



/*const itemEls = useRef(new Array());
const stackRef= useRef(null);

   const cards=[1,2,3,4,5].reverse();
    const javascriptCards= cards.map((i)=>{return <div key={i} ref={(e)=>itemEls.current.push(e)} className="card">{i}</div>});
    
console.log(stackRef);
    function swap(e) {
        let card= itemEls[4];
        console.log(card);
        if (e.target!=card) return;
        card.current.style.animation="swap 700ms forwards";
    setTimeout(()=>{
        card.style.animation="";
    cards.prepend(card);
    }, 700);
        } */

export default function StackCards(){
    const stackRef= useRef(null);
    const [card, setCard]=useState(null);
    console.log("stack ref: "+stackRef.current.style);
   const cards= [...stackRef.current.children]; //cards is an array of <div "card=5">
   console.log("cards originally: "+ cards[0].innerHTML); //prints 5
  // cards.reverse().forEach(i=>{stackRef.current.append(i);});
  cards.reverse();
console.log(cards[0].innerHTML); //prints 1
console.log(cards[4].innerHTML); //prints 5

stackRef.current.onclick=swap;
console.log("stackREF: "+stackRef.current.onclick);


    function swap(e){
        let lastCard = cards[4];

        console.log("last card is: "+ lastCard.innerHTML);
        if (e.target!=card.current) return;
        card.current.style.animation="swap 700ms forwards";
        console.log(card.current.style.animation);
    setTimeout(()=>{
        card.current.style.animation="";
setCard(card.current);

}, 700);    }

    console.log(stackRef);
   // [...stackRef.current.children].reverse().forEach(i=>stackRef.append(i));

    useEffect(()=>{
        setCard(stackRef.current.children[4]);
    },[]);



    return (
        <>
                <div className="background">

            <div ref={stackRef} className="stack">
            <div className="card">
                    1
                </div>
                <div className="card">
                    2
                </div>
                <div className="card">
                    3
                </div>
                <div className="card">
                    4
                </div>
                <div className="card">
                    5
                </div>
                
            </div>
            </div>
        
        </>
    )
}
