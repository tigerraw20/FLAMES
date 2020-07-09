function loveFinder(){
var n=document.form.first.value;
    var m=document.form.second.value;
    var p=(n.length+m.length);
    var f="FLAMES";
    
function posDelete(pos,name){
    

    var t=name.length;
    if(t>1)
    {
        
    
        var t=name.length;
        if(pos <= t)
        {
            name = name.slice(0,pos-1) + name.slice(pos);
            var t=name.length;
            var f=name;
            
        }
        else
        {
            var t=name.length;
            var pos=pos%t;
            if(pos!=0)
            {
                name = name.slice(0,pos-1) + name.slice(pos);
                var f=name;

            }
            else
            {
                name = name.slice(0,-1);
                var f=name;
            } 
            
        }
        posDelete(p,f);
        
        if(name=="F")
        {
            abc="Congarts !! Your relation is FRIEND";
            document.getElementById("ab").innerHTML =abc;

        }
        else if(name=="L")
        {
            bac="Congarts !! Your relation is true LOVE";
            document.getElementById("cd").innerHTML =bac;
        }
        else if(name=="A")
        {
            cab="Congarts !! Your relation is Affair";
            document.getElementById("ef").innerHTML =cab;
        }
        else if(name=="M")
        {
            acb="Congarts !! Your relation will be MARRIAGE";
            document.getElementById("gh").innerHTML =acb;
        }
        else if(name=="E")
        {
            cba="Congarts !! Your relation is ENEMY";
            document.getElementById("ij").innerHTML =cba;
        }
        else if(name=="S")
        {
            bca="Congarts !! Your relation is Sister";
            document.getElementById("kl").innerHTML =bca;
        }
        
    }
    
}
posDelete(p,f);
}