var a=[[]]
a=[[3,3,3],[3,4,3],[3,3,3]]
idx=0
draw=0
ii=0
var p=document.getElementById("win") 

var b1=document.getElementById("1")
b1.addEventListener("click",function (params) {
    shape(b1,1)
})

var b2=document.getElementById("2")
b2.addEventListener("click",function (params) {
    shape(b2,2)
})

var b3=document.getElementById("3")
b3.addEventListener("click",function (params) {
    shape(b3,3)
})

var b4=document.getElementById("4")
b4.addEventListener("click",function (params) {
    shape(b4,4)
})

var b5=document.getElementById("5")
b5.addEventListener("click",function (params) {
    shape(b5,5)
})

var b6=document.getElementById("6")
b6.addEventListener("click",function (params) {
    shape(b6,6)
})

var b7=document.getElementById("7")
b7.addEventListener("click",function (params) {
    shape(b7,7)
})

var b8=document.getElementById("8")
b8.addEventListener("click",function (params) {
    shape(b8,8)
})

var b9=document.getElementById("9")
b9.addEventListener("click",function (params) {
    shape(b9,9)
})


function shape(b,ii)
{
    if(idx==0 && b.innerText!="O")
    {
        value(ii)
        idx=1
        b.innerHTML="<h1>X</h1>"
    }
    else if(idx==1 && b.innerText!="X")
    {
        value(ii)
        idx=0
        b.innerHTML="<h1>O</h1>"
    }
     /*    for (let i = 0; i< 3; i++) {
            console.log(a[i][0],a[i][1],a[i][2])
        
    } */
    if(draw==9)
    p.innerHTML="<h1>Draw</h2>"
}

function value(ii) {
    if(ii==1)
        a[0][0]=idx

    else if(ii==2)
         a[0][1]=idx

    else if(ii==3)
        a[0][2]=idx

    else if(ii==4)
        a[1][0]=idx

    else if(ii==5)
        a[1][1]=idx

    else if(ii==6)
        a[1][2]=idx

    else if(ii==7)
        a[2][0]=idx

    else if(ii==8)
        a[2][1]=idx
        
    else if(ii==9)
        a[2][2]=idx

    logic()
}

function logic() {
    for (i = 0; i < 3; i++) 
    {
        for (j = 0; j < 3; j++) 
        {
            if(a[i][j]!=idx)
                break;
        }
        if(j==3)
        { 
            gameover()
            indicate(a[i][0],a[i][1],a[i][2])
            return;
        }
    }

    for (i = 0; i < 3; i++) 
    {
        for (j = 0; j < 3; j++) 
        {
            if(a[j][i]!=idx)
                break;
        }
        if(j==3)
        { 
            gameover()
            indicate(a[0][i],a[1][i],a[2][i])
            return;
        }
    }
    if((a[0][0]==idx && a[1][1]==idx && a[2][2]==idx) )
    {
            gameover()
            indicate(a[0][0],a[1][1],a[2][2])
            return
    }
    if(a[0][2]==idx && a[1][1]==idx && a[2][0]==idx)
    {
            gameover()
            indicate(a[0][2],a[1][1],a[2][0])
            return
    }
    draw=draw+1
    
}

function gameover()
{
    console.log("over")
    var over=document.getElementById("over")
    over.style.display="block"
    if(idx==0)
        p.innerHTML="<h1>Player 1 wins</h2>"
    else 
        p.innerHTML="<h1>Player 2 wins</h2>"

    setInterval(() => {
        for(i=0;i<9;i++)
        document.getElementsByClassName("bt")[i].disabled=true
    }, 800);
}

function indicate(m,n,p)
{
    if(m==a[0][0] && n==a[0][1] && p==a[0][2])
    {
        b1.classList.add("line")
        b2.classList.add("line")
        b3.classList.add("line")
    }
    else if(m==a[1][0] && n==a[1][1] && p==a[1][2])
    {
        b4.classList.add("line")
        b5.classList.add("line")
        b6.classList.add("line")
    }
    else if(m==a[2][0] && n==a[2][1] && p==a[2][2])
    {
        b7.classList.add("line")
        b8.classList.add("line")
        b9.classList.add("line")
    }
    else if(m==a[0][0] && n==a[1][0] && p==a[2][0])
    {
        b1.classList.add("line")
        b4.classList.add("line")
        b7.classList.add("line")
    }
    else if(m==a[0][1] && n==a[1][1] && p==a[2][1])
    {
        b2.classList.add("line")
        b5.classList.add("line")
        b8.classList.add("line")
    }
    else if(m==a[0][2] && n==a[1][2] && p==a[2][2])
    {
        b3.classList.add("line")
        b6.classList.add("line")
        b9.classList.add("line")
    }
    else if(m==a[0][0] && n==a[1][1] && p==a[2][2])
    {
        b1.classList.add("line")
        b5.classList.add("line")
        b9.classList.add("line")
    }
    else if(m==a[0][2] && n==a[1][1] && p==a[2][0])
    {
        b3.classList.add("line")
        b5.classList.add("line")
        b7.classList.add("line")
    }
}
