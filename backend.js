function showburgermenu(){
    console.log(document.querySelector("#burgerMenu"))
    if(document.querySelector("#burgerMenu").style.width =="0px"){
        document.querySelector("#burgerMenu").style.width ="90%"
    }
    else{
        document.querySelector("#burgerMenu").style.width ="0px"
    }
}
// omospondia
function showthirdmenu(){
    document.querySelector("#secondMenu").style.display="none"
    document.querySelector("#backbtn").style.display="block"
    document.querySelector("#thirdMenu").style.display="block"
    document.querySelector("#closefirstdrp").style.display="none"
    document.querySelector("#closeuser2").style.display="none"
}
// epistrofh
function showsecondmenu(){
    document.querySelector("#secondMenu").style.display="block"
    document.querySelector("#backbtn").style.display="none"
    document.querySelector("#thirdMenu").style.display="none"
    document.querySelector("#closefirstdrp").style.display="flex"
    document.querySelector("#closeuser2").style.display="block"
    
}
function closeDrpdw(){
    document.querySelector("#burgerMenu").style.width ="0px"
  
}  
      
