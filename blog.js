//Active link js
var selector = '#nav li';
$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});

//default load of API Get method both index and home page
    $(document).ready(function(){
         $.getJSON('https://jsonprovider.herokuapp.com/posts?limit=10', function(data) { //getting multiple objects
            $.each(data, function(index, obj) { //separating objects by its index
                var title = obj.title; //object.property
                    var blog_id = obj.id;
                    $("#blog_id").append('<img src="images/blog-4.jpg" width="60px" height="60px" />&nbsp;&nbsp;<b>Blog Title:</b>&nbsp;'+title + 
                    '</br></br> <button onclick="blogfunction('+blog_id+')" id='+blog_id +'>Read More </button> <hr></br>');
                  });
              });
        });
 
        
//Read more button blog view function
function blogfunction(id){
  url = "https://jsonprovider.herokuapp.com/posts/"+id;
  $.getJSON(url, function(data){
    var msg = data.body;
    var title = data.title;
   $('#main_body').html('<img src="images/blog-4.jpg" width="100px" height="100px" /><br><br><b>Blog Title:</b></b>&nbsp;'
   +title+'<br><br><b>Blog</b>:&nbsp;'+msg+
   '<br><br><button onclick="returnfunction()" >Back </button>');
  });
}

//home click
function indexfunction(){
    $('#main_body').load("home.html");
}

//Back button 
function returnfunction(){
  $('#main_body').load("home.html");
}

