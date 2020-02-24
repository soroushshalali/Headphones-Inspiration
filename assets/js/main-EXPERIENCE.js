

function showsidebar(){
    document.getElementById("sidebar").style.width="30%";
    document.getElementById("sidebar").style.height="35vh";
    document.getElementById("btn1").style.display="none";
    document.getElementById("btn2").style.display="inline-block";
}

function hidesidebar(){
    document.getElementById("sidebar").style.width="0%";
    document.getElementById("sidebar").style.height="0vh";
    document.getElementById("btn1").style.display="inline-block";
    document.getElementById("btn2").style.display="none";
    
}