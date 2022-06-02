
     $(".add-btn").on("click",function(){
        if($(".txtb1").val() !="" && $(".txtb2").val() !=""){
            var d = new Date();
            var month = d.getMonth()+1;
            var day = d.getDate();
            var h=d.getHours();
            var m=d.getMinutes();
            var s=d.getSeconds(); 
            var output = " "+d.getFullYear() + '/' + month + '/' + day+" "+h+":"+m+":"+s;
            var time=$("<div class='time'></div>")
            time.append(output)
            var task=$("<div class='task'></div>").text(ID+ "-" + $(".txtb1").val()+" : "+$(".txtb2").val());
            var a={}
            a["title"]=$(".txtb1").val()
            a["description"]=$(".txtb2").val()
            //console.log(a)
            localStorage.setItem("time",output)
            localStorage.setItem(ID,JSON.stringify(a))
            localStorage.setItem("id",ID)
          
          
                   
    
        }
    })
    