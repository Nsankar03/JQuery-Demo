$(document).ready(function(){
     
        $("#start").click(function(){
            let v=5; 
            
            $("#bubble").animate({left:'250px'},10000);
               
            
        })

        $("#stop").click(function(){
            $("#bubble").stop();
        })
})