$(document).ready(function(){
    $('#btn').on('click',function(){
    
        $.ajax({
            url:"get.html",
            type :"POST",
            datatype:"text",
            success:function(){
                $('#display').append('helloworld');
            },
             error:function(){
                 alert('you cannot read');
             }
        });
    
    
    
    });
    
    
    });