$('#search-form').submit(function(){
    $('#search-form').attr('action', '/contacts/'+$("#id").val())
 });