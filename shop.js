$( document ).ready(function() {
   
    
//CART NUMBER & ADD TO CART & 




/*****************************************       ADD TO CART EVENTS           *************************************************** */


var number_of_item_at_cart=0;


//DO NOT SHOW MAIN CONTAINER OF OFFCANVAS
$("#product_number").hide();
$("#clear_from_cart").hide();
$("#product_name_cart").hide()
$("#product_size_cart").hide()
$("#product_price_cart").hide()
$("#cart_image").hide()


//DO NOT SHOW SUBTOTAL DIV
$("#subtotal").hide();





//ADD TO CART BUTTON EVENT
var number_of_item_at_cart=0;
i=0
$("#add_cart_button").click(function(){
  
  i+=1;
  number_of_item_at_cart+=1;

  // ALERT IF SIZE HAVE NOT BEEN CHOOSEN
  if( $("#inputState").val()=="" ){
      
    $("#alert_label").show();
    $("#offcanvasRight").hide();

    
  }



  // IF SIZE HAVE BEEN CHOOSEN
  if( $("#inputState").val()!="" ){
      
    $("#alert_label").hide();
    $("#offcanvasRight").show();
    

    $("#product_name_cart").text( $("#dress_head").text() )
    $("#product_size_cart").text( 'Size ' + $("#inputState").val() )
    $("#product_price_cart").text( $("#cost").text() )
    $("#cart_image").attr("src", $("#select_image1 img").attr("src"))
    $("#product_number").val( $("#quantity").val() );



     //SHOW CLONED CONTAINERS
    {
      $("#clear_from_cart").clone(true,true).attr("id", "clear"+i).appendTo($("#offcanvas_body2")).show()
      $("#cart_image").clone(true,true).attr("id", "image"+i).appendTo($("#offcanvas_body2")).show()
      $("#product_name_cart").clone(true,true).attr("id", "name"+i).appendTo($("#offcanvas_body2")).show()
      $("#product_size_cart").clone(true,true).attr("id", "size"+i).appendTo($("#offcanvas_body2")).show()
      $("#product_number").clone(true,true).attr("id", "number"+i).appendTo($("#offcanvas_body2")).show()
      $("#product_price_cart").clone(true,true).attr("id", "price"+i).appendTo($("#offcanvas_body2")).show()
      
     
      
    }


    //CSS PROPERTIES OF CLONED CONTAINERS

    $("#image"+i).css({
      "max-width":"90px",
      "margin-left": "20px",
      "display":"inline",
      "float":"left",

    })



    $("#name"+i).css({
      "width":"120px",
      "height":"30px",
      "display":"block",
      "float":"left",
      "text-align":"center",
      "padding-top":"5px"
    })


    $("#size"+i).css({
     "width":"70px",
      "height":"30px",
      "display":"block",
      "float":"left",
      "padding-top":"5px"
    })




    $("#price"+i).css({
      "width":"90px",
      "height":"30px",
      "margin-left": "10px",
      "display":"block",
      "float":"right",
      "text-align":"right",
      "padding-top":"5px",
      "font-weight":"bold",

    })
      


  
    $("#number"+i).css({
      "max-width":"60px",
      "max-height":"40px",
      "display":"block",
      "float":"right",
     "margin-left": "135px",
      "padding-left":"30px",
      "border-radius":"7px",
    //  "border-color":"transparent"
    })


    $("#clear"+i).css({
      "width":"30px",
      "display":"block",
      "float":"right",
      "padding":"0px",
      "margin-left":"320px",
      

    })

    
 

  // DELETE BUTTONS FOR CLONED CONTAINERS
  for (let x = 0; x < 10000; x++) {

    $("#clear"+x).click(function(){
      $("#image"+x).hide()
      $("#name"+x).hide()
      $("#size"+x).hide()
      $("#price"+x).hide()
      $("#number"+x).hide()
      $("#clear"+x).hide()
  
    });}
    
    
  
   // $("#deneme").text(i)


   // $("#subtotal").hide();

  /* SUBTOTAL EVENTS
  if (  $("#name"+i).text() !="" ){
   
    
    $("#subtotal").show();
    
    var each_price=$("#price"+i).text().substring(1, 4) *$("#number"+i).val()
    $("#money").text(each_price++)
    
  }
    
  else if (  $("#name"+i).text() ==="" ) {
    $("#subtotal").hide();
  }
  */
    
  }
});


  //alert(parseInt($("#cost").text()))

  



















































//TERA DRESS QUICK VIEW    

$("#tera_dress").mouseenter(function(){
    $("#tera_dress").attr("src", "photo/14.2.jpg")
  });

$("#tera_dress").mouseleave(function(){
    $("#tera_dress").attr("src", "photo/14.1.jpg")
  });




//TERA DRESS ANALYZE    

$("#select_image1").click(function(){
    $("#tera_dress2").attr("src", "photo/14.1.jpg")
    $("#modal_image").attr("src", "photo/14.1.jpg");
  });

$("#select_image2").click(function(){
    $("#tera_dress2").attr("src", "photo/14.2.jpg")
    $("#modal_image").attr("src", "photo/14.2.jpg");
  });







//DOKOTA DRESS QUICK VIEW    

$("#dokota_dress").mouseenter(function(){
    $("#dokota_dress").attr("src", "photo/6.2.jpg")
  });

$("#dokota_dress").mouseleave(function(){
    $("#dokota_dress").attr("src", "photo/6.1.jpg")
  });




//DOKOTA DRESS ANALYZE    

$("#select_image1").click(function(){
  $("#dokota_dress2").attr("src", "photo/6.1.jpg")
  $("#modal_image2").attr("src", "photo/6.1.jpg");
});

$("#select_image2").click(function(){
  $("#dokota_dress2").attr("src", "photo/6.2.jpg")
  $("#modal_image2").attr("src", "photo/6.2.jpg");
});




//ARTEMIS DRESS QUICK VIEW    

$("#artemis_dress").mouseenter(function(){
    $("#artemis_dress").attr("src", "photo/13.2.jpg")
  });

$("#artemis_dress").mouseleave(function(){
    $("#artemis_dress").attr("src", "photo/13.1.jpg")
  });


//ARTEMIS DRESS ANALYZE

$("#select_image1").click(function(){
  $("#artemis_dress2").attr("src", "photo/13.1.jpg")
  $("#modal_image3").attr("src", "photo/13.1.jpg");
});

$("#select_image2").click(function(){
  $("#artemis_dress2").attr("src", "photo/13.2.jpg")
  $("#modal_image3").attr("src", "photo/13.2.jpg");
});




//BILLA DRESS QUICK VIEW    

$("#billa_dress").mouseenter(function(){
  $("#billa_dress").attr("src", "photo/11.2.jpg")
});

$("#billa_dress").mouseleave(function(){
  $("#billa_dress").attr("src", "photo/11.1.jpg")
});


//BILLA DRESS ANALYZE

$("#select_image1").click(function(){
$("#billa_dress2").attr("src", "photo/11.1.jpg")
$("#modal_image4").attr("src", "photo/11.1.jpg");
});

$("#select_image2").click(function(){
$("#billa_dress2").attr("src", "photo/11.2.jpg")
$("#modal_image4").attr("src", "photo/11.2.jpg");
});






//MAGGY DRESS QUICK VIEW    

$("#maggy_dress").mouseenter(function(){
  $("#maggy_dress").attr("src", "photo/16.2.jpg")
});

$("#maggy_dress").mouseleave(function(){
  $("#maggy_dress").attr("src", "photo/16.1.jpg")
});


//MAGGY DRESS ANALYZE

$("#select_image1").click(function(){
$("#maggy_dress2").attr("src", "photo/16.1.jpg")
$("#modal_image5").attr("src", "photo/16.1.jpg");
});

$("#select_image2").click(function(){
$("#maggy_dress2").attr("src", "photo/16.2.jpg")
$("#modal_image5").attr("src", "photo/16.2.jpg");
});






//VINCE DRESS QUICK VIEW    

$("#vince_dress").mouseenter(function(){
    $("#vince_dress").attr("src", "photo/10.2.jpg")
  });

$("#vince_dress").mouseleave(function(){
    $("#vince_dress").attr("src", "photo/10.1.jpg")
  });


//VINCE DRESS ANALYZE

$("#select_image1").click(function(){
  $("#vince_dress2").attr("src", "photo/10.1.jpg")
  $("#modal_image6").attr("src", "photo/10.1.jpg");
  });
  
  $("#select_image2").click(function(){
  $("#vince_dress2").attr("src", "photo/10.2.jpg")
  $("#modal_image6").attr("src", "photo/10.2.jpg");
  });
  






//VERA DRESS QUICK VIEW    

$("#vera_dress").mouseenter(function(){
    $("#vera_dress").attr("src", "photo/18.2.jpg")
  });

$("#vera_dress").mouseleave(function(){
    $("#vera_dress").attr("src", "photo/18.1.jpg")
  });


//VERA DRESS ANALYZE

$("#select_image1").click(function(){
  $("#vera_dress2").attr("src", "photo/18.1.jpg")
  $("#modal_image7").attr("src", "photo/18.1.jpg");
  });
  
  $("#select_image2").click(function(){
  $("#vera_dress2").attr("src", "photo/18.2.jpg")
  $("#modal_image7").attr("src", "photo/18.2.jpg");
  });





//CYAN DRESS QUICK VIEW    

$("#cyan_dress").mouseenter(function(){
    $("#cyan_dress").attr("src", "photo/15.2.jpg")
  });

$("#cyan_dress").mouseleave(function(){
    $("#cyan_dress").attr("src", "photo/15.1.jpg")
  });

//CYAN DRESS ANALYZE

$("#select_image1").click(function(){
  $("#cyan_dress2").attr("src", "photo/15.1.jpg")
  $("#modal_image8").attr("src", "photo/15.1.jpg");
  });
  
  $("#select_image2").click(function(){
  $("#cyan_dress2").attr("src", "photo/15.2.jpg")
  $("#modal_image8").attr("src", "photo/15.2.jpg");
  });






//YODA DRESS QUICK VIEW    

$("#yoda_dress").mouseenter(function(){
    $("#yoda_dress").attr("src", "photo/8.2.jpg")
  });

$("#yoda_dress").mouseleave(function(){
    $("#yoda_dress").attr("src", "photo/8.1.jpg")
  });


//YODA DRESS ANALYZE

$("#select_image1").click(function(){
  $("#yoda_dress2").attr("src", "photo/8.1.jpg")
  $("#modal_image9").attr("src", "photo/8.1.jpg");
  });
  
  $("#select_image2").click(function(){
  $("#yoda_dress2").attr("src", "photo/8.2.jpg")
  $("#modal_image9").attr("src", "photo/8.2.jpg");
  });






//NICKEF DRESS QUICK VIEW    

$("#nickef_dress").mouseenter(function(){
    $("#nickef_dress").attr("src", "photo/17.2.jpg")
  });

$("#nickef_dress").mouseleave(function(){
    $("#nickef_dress").attr("src", "photo/17.1.jpg")
  });


//NICKEF DRESS ANALYZE

$("#select_image1").click(function(){
  $("#nickef_dress2").attr("src", "photo/17.1.jpg")
  $("#modal_image10").attr("src", "photo/17.1.jpg");
  });
  
  $("#select_image2").click(function(){
  $("#nickef_dress2").attr("src", "photo/17.2.jpg")
  $("#modal_image10").attr("src", "photo/17.2.jpg");
  });






//LEYLAK DRESS QUICK VIEW    

$("#leylak_dress").mouseenter(function(){
    $("#leylak_dress").attr("src", "photo/5.2.jpg")
  });

$("#leylak_dress").mouseleave(function(){
    $("#leylak_dress").attr("src", "photo/5.1.jpg")
  });


//LEYLAK DRESS ANALYZE

$("#select_image1").click(function(){
  $("#leylak_dress2").attr("src", "photo/5.1.jpg")
  $("#modal_image11").attr("src", "photo/5.1.jpg");
  });
  
  $("#select_image2").click(function(){
  $("#leylak_dress2").attr("src", "photo/5.2.jpg")
  $("#modal_image11").attr("src", "photo/5.2.jpg");
  });







//LAVENDAR DRESS QUICK VIEW    

$("#lavendar_dress").mouseenter(function(){
    $("#lavendar_dress").attr("src", "photo/19.2.jpg")
  });

$("#lavendar_dress").mouseleave(function(){
    $("#lavendar_dress").attr("src", "photo/19.1.jpg")
  });


//LAVENDAR DRESS ANALYZE

$("#select_image1").click(function(){
  $("#lavendar_dress2").attr("src", "photo/19.1.jpg")
  $("#modal_image12").attr("src", "photo/19.1.jpg");
  });
  
  $("#select_image2").click(function(){
  $("#lavendar_dress2").attr("src", "photo/19.2.jpg")
  $("#modal_image12").attr("src", "photo/19.2.jpg");
  });





//HYPEN DRESS QUICK VIEW    

$("#hypen_dress").mouseenter(function(){
  $("#hypen_dress").attr("src", "photo/20.2.jpg")
});

$("#hypen_dress").mouseleave(function(){
  $("#hypen_dress").attr("src", "photo/20.1.jpg")
});


//HYPEN DRESS ANALYZE

$("#select_image1").click(function(){
  $("#hypen_dress2").attr("src", "photo/20.1.jpg")
  $("#modal_image13").attr("src", "photo/20.1.jpg");
  });
  
  $("#select_image2").click(function(){
  $("#hypen_dress2").attr("src", "photo/20.2.jpg")
  $("#modal_image13").attr("src", "photo/20.2.jpg");
  });





//HELEN DRESS QUICK VIEW    

$("#helen_dress").mouseenter(function(){
    $("#helen_dress").attr("src", "photo/1.2.jpg")
  });

$("#helen_dress").mouseleave(function(){
    $("#helen_dress").attr("src", "photo/1.1.jpg")
  });


//HELEN DRESS ANALYZE

$("#select_image1").click(function(){
  $("#helen_dress2").attr("src", "photo/1.1.jpg")
  $("#modal_image14").attr("src", "photo/1.1.jpg");
  });
  
  $("#select_image2").click(function(){
  $("#helen_dress2").attr("src", "photo/1.2.jpg")
  $("#modal_image14").attr("src", "photo/1.2.jpg");
  });




//DREAM DRESS QUICK VIEW    

$("#dream_dress").mouseenter(function(){
    $("#dream_dress").attr("src", "photo/4.2.jpg")
  });

$("#dream_dress").mouseleave(function(){
    $("#dream_dress").attr("src", "photo/4.1.jpg")
  });

//DREAM DRESS ANALYZE

$("#select_image1").click(function(){
  $("#dream_dress2").attr("src", "photo/4.1.jpg")
  $("#modal_image15").attr("src", "photo/4.1.jpg");
  });
  
  $("#select_image2").click(function(){
  $("#dream_dress2").attr("src", "photo/4.2.jpg")
  $("#modal_image15").attr("src", "photo/4.2.jpg");
  });





//VIVEN DRESS QUICK VIEW    

$("#viven_dress").mouseenter(function(){
    $("#viven_dress").attr("src", "photo/3.2.jpg")
  });

$("#viven_dress").mouseleave(function(){
    $("#viven_dress").attr("src", "photo/3.1.jpg")
  });


//VIVEN DRESS ANALYZE

$("#select_image1").click(function(){
  $("#viven_dress2").attr("src", "photo/3.1.jpg")
  $("#modal_image16").attr("src", "photo/3.1.jpg");
  });
  
  $("#select_image2").click(function(){
  $("#viven_dress2").attr("src", "photo/3.2.jpg")
  $("#modal_image16").attr("src", "photo/3.2.jpg");
  });








//MODAL IMAGE

//$("#modal_image").attr("src", $("#tera_dress2").attr("src"));












$('.carousel').carousel()




//Modal Function

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
});








});












