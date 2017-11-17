//Active link js
var selector = '#nav li';
$(selector).on('click', function () {
    $(selector).removeClass('active');
    $(this).addClass('active');
});

//new_blog nav bar
$('#new_blog').click(function () {
    $('#main_body').load("new_blog.html");
});

//default load of API Get method both index and home page
$(document).ready(function () {
    $.getJSON('https://jsonprovider.herokuapp.com/posts/', function (data) { //getting multiple objects
        $.each(data, function (index, obj) { //separating objects by its index
            var title = obj.title; //object.property
            var blog_id = obj.id;
            $("#blog_id").append('<img src="images/blog-4.jpg" width="60px" height="60px" />&nbsp;&nbsp;<b>Blog Title:</b>&nbsp;' + title +
                '</br></br> <button onclick="blogfunction(' + blog_id + ')" id=' + blog_id + '>Read More </button> <hr></br>');
        });
    });
});


//Read more button blog view function
function blogfunction(id) {
    url = "https://jsonprovider.herokuapp.com/posts/" + id;
    $.getJSON(url, function (data) {
        var msg = data.body;
        var title = data.title;
        $('#main_body').html('<img src="images/blog-4.jpg" width="100px" height="100px" /><br><br><b>Blog Title:</b></b>&nbsp;'
            + title + '<br><br><b>Blog</b>:&nbsp;' + msg +
    '<br><br><button onclick="returnfunction()" >Back </button>&nbsp;&nbsp;&nbsp;&nbsp;<button onclick="deletefunction('+id+')" id="'+id+'">Delete</button>');
    });
}

//home click
function indexfunction() {
    $('#main_body').load("home.html");
}

//Back button 
function returnfunction() {
    $('#main_body').load("home.html");
}

//New blog post function
function myfunction(){
    url = "https://jsonprovider.herokuapp.com/posts";
    var head = document.getElementById("title").value;
    var msg = document.getElementById("content").value;
    $.ajax({
          url: url,
          type: 'POST',
          data: JSON.stringify({
              "title": head,
              "body" : msg,
              "userId" : 1
            }),
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          async: false,
          success: function(msg) {
          console.log("New post Added Successfully");
          $("#main_body").load("home.html");
             }
        });
}

//Blog Delete function 
function deletefunction(val){
    url = "https://jsonprovider.herokuapp.com/posts/?id=" + val;
    $.ajax({
        url: url,
        type: 'DELETE',
        contentType: "application/json",
        success: function(result) {
             console.log("post deleted successfully");
             $("#main_body").load("home.html");
        }
    });
}

