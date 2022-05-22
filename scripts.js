var html = "";
var labels;

for (var i = 1; i <=31 ; i++) {
    labels = "";

    if(i%4==0 && i%7!=0 && i!=1 
        && i!=8 && i!=15 && i!=22 && i!=29) {
            labels ='<div class="PTO">PTO</div>';
    }
    else if (i%5==0 && i%7!=0 && i!=1 
        && i!=8 && i!=15 && i!=22 && i!=29){
            labels ='<div class="Flex">Flex</div>';
    }
    html += '<div class="day"><p>' + 
    i + 
    '</p>' +
    labels +
    '</div>';
}

document.getElementById("container").innerHTML = html;