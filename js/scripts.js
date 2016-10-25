$(document).ready(function(){
  $("#transportation-work").submit(function(event){
    event.preventDefault();
    var results = [];
    $(".response-work").show();
    $("input:checkbox[name=toWork]:checked").each(function(){
      var userToWork = $(this).val();
      results.push(userToWork);
    })
    $(".response-work").append(results.join(" "));
  });
  $("#transportation-fun").submit(function(event) {
    event.preventDefault();
    var funResult = [];
    $(".response-fun").show();
    $("input:checkbox[name=fun]:checked").each(function() {
      var userFun = $(this).val();
      funResult.push(userFun);
    });
    console.log(funResult)
    $(".response-fun").append(funResult.join(" "));
  })
});
