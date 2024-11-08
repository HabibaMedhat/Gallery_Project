var closeImg = document.getElementById('close');
var prev = document.getElementById('previous');
var next = document.getElementById('next');

var imgsArray = Array.from(document.querySelectorAll('.item img'));

var boxContainer = document.querySelector('.box-container');
var boxItem = document.querySelector('.box-item');

var itemIndex=0;
for(var i = 0; i<imgsArray.length; i++){
    imgsArray[i].addEventListener('click', function(e){
        boxContainer.style.display = "flex";
        boxItem.style.backgroundImage = `url(${e.target.src})`;
        itemIndex = imgsArray.indexOf(this);
    })
}





function nextImg(){
    itemIndex++;

    if(itemIndex == imgsArray.length){
        itemIndex = 0 ;
    }


    boxItem.style.backgroundImage = `url(${imgsArray[itemIndex].src})`;
}

function prevImg(){
    itemIndex--;

    if(itemIndex < 0){
        itemIndex = imgsArray.length -1 ;
    }


    boxItem.style.backgroundImage = `url(${imgsArray[itemIndex].src})`;
}

next.addEventListener('click', nextImg);
prev.addEventListener('click', prevImg);

closeImg.addEventListener('click', function(){
    boxContainer.style.display = 'none';
    });
    

boxContainer.addEventListener('click', function(){  
        boxContainer.style.display = 'none';
        boxItem.addEventListener('click', function(e){
            e.stopPropagation();
        })
    });