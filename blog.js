function callIndex(){
    alert("welcome");
    $.ajax({
    url: "https://jsonprovider.herokuapp.com/posts",
    type: "GET",

    contentType: 'application/json',
    success: function(resultData) {
        
        $("#blog_id").html(resultData);
        alert(resultdata);

    },
    error : function(jqXHR, textStatus, errorThrown) {
    },

    timeout: 120000,
  }