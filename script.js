var a1, a2, a3, a4, a5, k = 0, t = 0, o = 0, h = 0, z = 0;
var val,k;
const titanic = document.getElementById("t");
const kalank = document.getElementById("k");
const harry = document.getElementById("h");
const zero = document.getElementById("z");
const santi = document.getElementById("o");

titanic.addEventListener("click", () => {
    val = titanic.innerHTML;
    //console.log(val);
    music(val);


})
kalank.addEventListener("click", () => {
    val = kalank.innerHTML
    console.log(val);
    music(val);


})
harry.addEventListener("click", () => {
    val = harry.innerHTML
    console.log(val);
    music(val);


})
zero.addEventListener("click", () => {
    val = zero.innerHTML
    console.log(val);
    music(val);


})
santi.addEventListener("click", () => {
    val = santi.innerHTML
    console.log(val);
    music(val);


})
document.addEventListener("keypress",(e)=>
{
    k=e.key;
    music(k);
    
})
function music(index) {
    
        if (index=="T" || index=="t")
        {
            t=t+1;
            
            if(k>0)
            {
                a2.pause();
            }
            if(h>0)
            {
                a3.pause();
            }
            if(z>0)
            {
                a4.pause();
            }
            if(o>0)
            {
                a5.pause();
            }
            a1 = new Audio("titanic.mp3");
            a1.play();
            
            
        }
        else if (index=="K" || index=="k")
        {
            if(t>0)
            {
                a1.pause();
                console.log(t);
            }
            if(h>0)
            {
                a3.pause();
            }
            if(z>0)
            {
                a4.pause();
            }
            if(o>0)
            {
                a5.pause();
            }
            a2 = new Audio("Kalank Flute.mp3");
            a2.play();
            k=k+1;
        }
        else if (index=="H" || index=="h")
        {
            
            if(t>0)
            {
                a1.pause();
            }
            if(k>0)
            {
                a2.pause();
            }
            if(z>0)
            {
                a4.pause();
            }
            if(o>0)
            {
                a5.pause();
            }
            a3 = new Audio("harry.mp3");
            a3.play();
            h=h+1;
        }
        else if (index=="Z" || index=="z")
        {
            if(t>0)
            {
                a1.pause();
            }
            if(k>0)
            {
                a2.pause();
            }
            if(h>0)
            {
                a3.pause();
            }
            if(o>0)
            {
                a5.pause();
            }
            a4 = new Audio("naam.mp3");
            a4.play();
            z=z+1;
        }
        else if (index=="O" || index=="o")
        {
            if(t>0)
            {
                a1.pause();
            }
            if(k>0)
            {
                a2.pause();
            }
            if(h>0)
            {
                a3.pause();
            }
            if(z>0)
            {
                a4.pause();
            }
            a5 = new Audio("om.mp3");
            a5.play();
            o=o+1;
        }


        else{
            alert("enter something proper");
        }
    }

