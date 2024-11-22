var quote =document.getElementById("quotetext");
var author=document.getElementById("authorname");
var quotecontainer=[
    {
        quote:"“Be the change that you wish to see in the world.”",
        author:"-- Mahatma Gandhi"
    },
    {
        quote:"“You only live once, but if you do it right, once is enough.”",
        author:"-- Mae West"
    },
    {
        quote:"“Do not take life too seriously. You will not get out alive.”",
        author:"--Elbert Hubbard"
    },
    {
        quote:"“You miss 100% of the shots you don't take.”",
        author:"--Wayne Gretzy"
    },
    {
        quote:"“It's not what happens to you, but how you react to it that matters.”",
        author:"--Epictetus"
    },
    {
        quote:"“The best revenge is massive success.”",
        author:"--Frank Sinatra"
    }
];
var current_index=0;
function displayquote(){
    var random=updateNum(current_index);
    current_index=random;
    var cartoona = `<p id="quotetext">${quotecontainer[random].quote}</p>
                    <p id="authorname">${quotecontainer[random].author}</p>`;
    document.getElementById("text").innerHTML = cartoona;
}
function updateNum(current_index) {
    for (let i = 0; i < 999; i++) {
        var num = Math.floor(Math.random() * quotecontainer.length);
        if (num != current_index) {
            return num;
        }
    }
}