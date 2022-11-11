//dialog box

//schedule box display

const a1=document.getElementById("m1");
const a2=document.getElementById("m2");

const box1=document.getElementById("box1");
const box2=document.getElementById("box2");


a1.addEventListener('click', box1Click);

function box1Click(){
block1();
a1.style.backgroundColor=" rgba(174, 167, 167, 0.7)";
a1.style.color= "rgba(3, 36, 85, 0.83)";
a1.style.textDecoration="underline";

a2.style.background="none";
a2.style.color= "rgba(200, 193, 193, 0.914)";
a2.style.textDecoration="none";


box1.style.display="inline";
}

function block1(){
    box2.style.display="hidden";
}



a2.addEventListener('click', box2Click);


function box2Click(){
block2();
a2.style.backgroundColor=" rgba(174, 167, 167, 0.7)";
a2.style.color= "rgba(3, 36, 85, 0.83)";
a2.style.textDecoration="underline";

a1.style.background="none";
a1.style.color= "rgba(200, 193, 193, 0.914)";
a1.style.textDecoration="none";

box2.style.display="inline";


}

function block2(){
    box1.style.display="hidden";
}



//images display

const i11=document.getElementById("img11");
const i12=document.getElementById("img12");
const i13=document.getElementById("img13");
const i14=document.getElementById("img14");

const i21=document.getElementById("img21");
const i22=document.getElementById("img22");
const i23=document.getElementById("img23");
const i24=document.getElementById("img24");

const i31=document.getElementById("img31");
const i32=document.getElementById("img32");
const i33=document.getElementById("img33");
const i34=document.getElementById("img34");


//buttons 1, 2 and 3
const b1= document.getElementById("btn1");
const b2=document.getElementById("btn2");
const b3=document.getElementById("btn3");


b1.addEventListener('click', () =>{

    b1.style.backgroundColor='white';
    b1.style.opacity="1";

    b2.style.backgroundColor="grey";
    b2.style.opacity="0.6";

    b3.style.backgroundColor="grey";
    b3.style.opacity="0.6";

    i11.style.display="inline";
    i12.style.display="inline";
    i13.style.display="inline";
    i14.style.display="inline";

    i21.style.display="hidden";
    i22.style.display="hidden";
    i23.style.display="hidden";
    i24.style.display="hidden";

    i31.style.display="hidden";
    i32.style.display="hidden";
    i33.style.display="hidden";
    i34.style.display="hidden";
})

b2.addEventListener('click', () =>{
    b2.style.backgroundColor='white';
    b2.style.opacity="1";

    b1.style.backgroundColor="grey";
    b1.style.opacity="0.6";

    b3.style.backgroundColor="grey";
    b3.style.opacity="0.6";

    i21.style.display="inline";
    i22.style.display="inline";
    i23.style.display="inline";
    i24.style.display="inline";

    i11.style.display="hidden";
    i12.style.display="hidden";
    i13.style.display="hidden";
    i14.style.display="hidden";

    i31.style.display="hidden";
    i32.style.display="hidden";
    i33.style.display="hidden";
    i34.style.display="hidden";
})


b3.addEventListener('click', function(){
    b3.style.backgroundColor="white";
    b3.style.opacity="1";

    b1.style.backgroundColor="grey";
    b1.style.opacity="0.6";

    b2.style.backgroundColor="grey";
    b2.style.opacity="0.6";

    i31.style.display="inline";
    i32.style.display="inline";
    i33.style.display="inline";
    i34.style.display="inline";

    i11.style.display="hidden";
    i12.style.display="hidden";
    i13.style.display="hidden";
    i14.style.display="hidden";

    i21.style.display="hidden";
    i22.style.display="hidden";
    i23.style.display="hidden";
    i24.style.display="hidden";
})
