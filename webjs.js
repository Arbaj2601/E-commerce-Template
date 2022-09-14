

    
function positive(){
    
    var d1 = document.getElementById('count').value;
   
    d1++;
    
   
 
   
    document.getElementById('count').value=d1;
    

}
function negative(){
    var d2 = document.getElementById('count').value;
    
    d2--;
    
   
 
   
    document.getElementById('count').value=d2;
}
var c;
function volBig(){
        
       
    var d=document.getElementById('count').value;
       c=399*d;
       console.log(c);
       
    }
    function volSmall(){
        
        
        var d=document.getElementById('count').value;
       c=d*249;
       console.log(c);
       

    }
    function payable(){
       
    document.getElementById('Total').innerHTML='= RS '+c+'';
    }