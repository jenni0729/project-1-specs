$(document).ready(function(){
 
 $.ajaxSetup({
  data: {
    access_token: "19e064ab884f616ca9744f0a11bb9b648072cc3f"
  }
});     
 //var gitUrls = []; 
function getRepos() {
  $.getJSON("http://api.github.com/users/jenni0729/repos", function (data) {
    //after getting JSON, you run a function with the data, you want to loop through//
    //the array of objects that's returned//
    // console.log(data);
    // $(".ajax").html(data){
        // loop thru data 
        // get html_url
        for(var i=0; i<data.length; i++){
        // console.log("data",data[i]);
        console.log('name',data[i].name);
        $( ".ajax" ).append("<p><a href='"+data[i].html_url+"'>"+data[i].name+"</a></p>" );
        // var source = $("#git-repos").html();
        // var template = Handlebars.compile(source);
        // var html = template({gitRepos: data});
        // $(".ajax").html(html);
     }
     // console.log(gitUrls);
  });
  //need html_url

 }
  getRepos();
  
 $("#photo").hover(function(){
         $("#photo").effect( "shake", 
          {times:4}, 1000 );
      });

});
