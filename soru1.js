//Birinci yol
function WriteTable(){   
    let getinfo=document.getElementsByClassName("getinfo");
    let writeinfo=document.getElementsByClassName("info");  
    var getinfos=[];

    for (let i = 0; i < getinfo.length; i++) {
        getinfos.push(getinfo[i].value);
        
    }
    
    for (let i = 0; i < writeinfo.length; i++) {  
        writeinfo[i].innerHTML=getinfos[i];
        
    }

 
    

}
//İkinci yol
function WriteTable2(){

    const name=document.getElementById("name").value;
    const surname=document.getElementById("surname").value;
    const birthdate=document.getElementById("birthdate").value;
    const mail=document.getElementById("mail").value;
    const phone=document.getElementById("phone").value;
    const tshirtcolor=document.getElementById("tshirtcolor").value;
    const fontcolor=document.getElementById("fontcolor").value;
    const tshirttext=document.getElementById("tshirttext").value;
    const tshirtcount=document.getElementById("tshirtcount").value;
    const size= DetermineSize();
    const address=document.getElementById("address").value;
    const deliverydate=document.getElementById("deliverydate").value;
    const cardnamesurname=document.getElementById("cardnamesurname").value;
    const cardnumber=document.getElementById("cardnumber").value;
    const expirydate=document.getElementById("expirydate").value;
    const cvv=document.getElementById("cvv").value;

    document.getElementById("name_t").innerHTML=name;
    document.getElementById("surname_t").innerHTML=surname;
    document.getElementById("birthdate_t").innerHTML=birthdate;
    document.getElementById("mail_t").innerHTML=mail;
    document.getElementById("phone_t").innerHTML=phone;
    document.getElementById("tshirtcolor_t").innerHTML=tshirtcolor;
    document.getElementById("fontcolor_t").innerHTML=fontcolor;
    document.getElementById("tshirttext_t").innerHTML=tshirttext;
    document.getElementById("tshirtcount_t").innerHTML=tshirtcount;
    document.getElementById("tshirtsize_t").innerHTML=size;
    document.getElementById("address_t").innerHTML=address;
    document.getElementById("deliverytime_t").innerHTML=deliverydate;
    document.getElementById("cardnamesurname_t").innerHTML=cardnamesurname;
    document.getElementById("cardnumber_t").innerHTML=cardnumber;
    document.getElementById("expirytime_t").innerHTML=expirydate;
    document.getElementById("cvv_t").innerHTML=cvv;










}

function DetermineSize(){
    const sizerange=parseInt( document.getElementById("sizerange").value);
    

    switch(sizerange){
        case 0:
            return "XS";
            
            break;
        case 1:
            return "S";
           
            break;
        case 2:
            return "M"
            
            break;
        case 3:
            return "L";
            
            break;
        case 4:
            return "XL";
            
            break;
        case 5:
            return "XXL";
            
            break;                    
    }

}
function WriteSize(){
    const size=document.getElementById("size");
    size.value=DetermineSize();

}




