menu_list_array = ["Veg Margherita Pizza",//add more items\
"veg margerita pizza",
"chicken tandoori pizza",
"paneer tikka pizza",
"many more pizzas"

                    ]

function getmenu(){
var htmldata;
//Complete the code
htmldata="<ol class='menulist'> "
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata= '<li>' + menu_list_array[i] = '</li>'
} 
htmldata=htmldata+ "</ol>"
document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
//Complete the code
menu_list_array.sort()
htmldata="<section class= 'cards'>"
for(var i=0;i<menu_list_array.length;i++){

    htmldata=htmldata+ '<div class="card">'
    +'<img src-"images/pizzaImg.png"/>'
    + menu_list_array[i] + '</div>'
}
htmldata=htmldata+"</section>"
document.getElementById("add_item").innerHTML = htmldata;
}

function add_top(){
//Complete the code
var item=document.getElementById("add_item"),value;
menu_list_array.push(item);
add_item();
}