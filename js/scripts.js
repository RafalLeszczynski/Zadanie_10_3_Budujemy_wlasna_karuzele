//js

$(function(){
    var carouselList = $("#carousel ul");
    

    
    var changeSlide = function(){
        carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
    }
    
    var moveFirstSlide = function() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
        
        
    }
    
    
    setInterval(changeSlide, 3000); //every 3 seconds, it performs a function to change the slide
    
});



