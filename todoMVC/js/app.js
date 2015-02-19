(function (window) {
    'use strict';

    // Your starting point. Enjoy the ride!
        $('#todo-list').on('click', '.toggle', function(event) {
        // Walk back up the tree to the nearest <li>...
        $(this).closest('li')
          .toggleClass('completed');
          // Mark it as ".completed" (or not maybe)
        // alert('clicked');
        
    }); //toggling the label complete class

    $(document).ready(function(){
        $('#new-todo').on('keypress', function (e) {
            if(e.which == 13) {
                var newTask = $('#new-todo').val();
                console.log(newTask);
                var newItem = '<li><div class="view"><input class="toggle" type="checkbox"><label>' + newTask + '</label><button class="destroy"></button></div><input class="edit" value="'+ newTask +'"></li>';
                        $('#todo-list').prepend(newItem);
                    $('#new-todo').val('');
                var lengthOfToDo = $('#todo-list li').length;
                $('#todo-count strong').text(lengthOfToDo);

            }
        $('.destroy').on('click', function() {
        $(this).parent().parent().remove();
        var lengthOfToDo = $('#todo-list li').length;
                $('#todo-count strong').text(lengthOfToDo);

        });   

            });
        $('#todo-list').on('dblclick', '.view', function(event){
          // alert(event.type);
          // Add class ".editing" to my parent <li>...
          // ????
        });

//        var toggleAll = $('#toggle-all');
//    toggleAll.on('click', function(){
//        $('.toggle').attr('checked', true);
//        $('li').toggleClass('completed');


        });



})(window);






    //     $(document).ready(function(){
    //     $('.toggle').on('click', function(){
    //         $(this).attr('checked');
    //     })
    // });
