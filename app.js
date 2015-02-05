
$(document).ready(function(){
 
 $.ajaxSetup({
  data: {
    access_token: "ae1f1bbdf3e8d9fed7ca625626c2694a854f02ce"
  }
});     
 var gitUrls = []; 
function getRepos() {
  $.getJSON("http://api.github.com/users/jenni0729/repos", function (data) {
    console.log(data);
    // $(".ajax").html(data){
        // loop thru data 
        // get html_url
        for(var i=0; i<data.length; i++){
        console.log(data[i].html_url);
        gitUrls.push(data[i].html_url);
        $( ".ajax" ).append("<p><a href='"+data[i].html_url+"'>"+data[i].html_url+"</a></p>" );
        // var source = $("#git-repos").html();
        // var template = Handlebars.compile(source);
        // var html = template({gitRepos: data});
        // $(".ajax").html(html);
     }
     console.log(gitUrls);
  });
  //need html_url

 }
  getRepos();
});
