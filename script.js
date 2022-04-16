const twitter=document.getElementById('twitter-button');
const facebook=document.getElementById('facebook-button');
const nextQuote=document.getElementById('new-quote');
const quote=document.getElementById('quote');
const author=document.getElementById('author');
const quoteContainer=document.getElementById('quote-container');
const loader=document.getElementById('loader');


//loading animation
function showLoadingSpinner(){
   loader.hidden=false;
   quoteContainer.hidden=true;
}

function removeLoadingSpinner(){
    loader.hidden=true;
    quoteContainer.hidden=false;   
}

let apiQuotes=[];


//get random quote

function newQuote(){
    showLoadingSpinner();
    const quotes=apiQuotes[Math.floor(Math.random()*(apiQuotes.length))]
    console.log(Math.floor((Math.random()*apiQuotes.length)))
    quote.textContent=quotes.text;
    author.textContent=quotes.author;
    removeLoadingSpinner()

    
    
}
async function getQuotes(){
    // showLoadingSpinner();
    const url="https://type.fit/api/quotes";

    try{
        const response= await fetch(url);
        apiQuotes=await response.json();
        newQuote();
        
    }    
         catch(error){
             console.log(error);
            //  getQuotes();
         }
     

}
   




//functioning twitter button;
function tweetQuote(){
    const twitterUrl=`https://twitter.com/intent/tweet?text=${quote.textContent} - ${author.textContent}`;
    // const facebookUrl=`https://www.facebook.com/sharer/sharer.php?u=example.org?text=${quote.textContent} - ${author.textContent}`;
    window.open(twitterUrl, '_blank');
}

//adding eventListener;

nextQuote.addEventListener('click',newQuote);
twitter.addEventListener('click',tweetQuote);
getQuotes();





//working of async await;
//async always returns promise;

// async function one(){
//     return ('Hello');
// }

// one();
// // console.log('hello');


// let array;
// let response;
// async function getQuotes(){
//     const url="https://type.fit/api/quotes";

//     try{
//          response= await fetch(url);
//         array=await response.json();
//         console.log((array));
        
       
//     }    
//          catch(error){
//              console.log(error);
//             //  getQuotes();
//          }
     

// }
// getQuotes();
// for(let i=1;i<100000;i++){
//     if(i==99998){
//         console.log(array[1]);
//     }
//     console.log(i);
// }
//  async function one(){
//      return 'hello';
//  }  
//  one().then(
//      function(val){
//          console.log(val);
//      },function(val){
//          console.log(val)
//      }
//  );







