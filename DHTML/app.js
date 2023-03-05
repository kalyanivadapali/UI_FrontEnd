 //create a Json data 
 var productDetails={
    name:'laptop',
    price:3000,
    discount:10,
    manufacture:'Dell',
    sellerName:'Indian Electronics',
    image:'https://cdn1.smartprix.com/rx-i4U4FAoxX-w1200-h1200/4U4FAoxX.jpg'
}
var ItemDetails=()=>{
    var mainLi=document.createElement("li");
    var ulTag=document.createElement("ul");
    ulTag.setAttribute("class","productdetails");

    var li1=document.createElement("li");
    li1.innerHTML='Product Name :'+ productDetails.name;
    ulTag.append(li1);


    var li2=document.createElement("li");
    li2.innerHTML='Price : $'+ productDetails.price;
    ulTag.append(li2);


    var li3=document.createElement("li");
    li3.innerHTML='Discount : '+ productDetails.discount;
    ulTag.append(li3);

    var li4=document.createElement("li");
    li4.innerHTML='Manufacture : '+ productDetails.manufacture;
    ulTag.append(li4);

    var li5=document.createElement("li");
    li5.innerHTML='SellerName : '+ productDetails.sellerName;
    ulTag.append(li5);

    var li6=document.createElement('li');
    var imgTag=document.createElement('img');
    imgTag.setAttribute("src",productDetails.image);
    li6.append(imgTag);
    ulTag.append(li6);
    mainLi.append(ulTag);
    // console.log(ulTag)

    document.querySelector('.container').append(mainLi);
    

    // console.log(mainLi);
}
ItemDetails();