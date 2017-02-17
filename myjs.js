var counter = 4;
function MainCtrl($scope) {
  $scope.todoList = [{title:"Do Homework", isD:false, isDone:false, num:1}, {title:"Go Sleep", isD:false, isDone:false, num:2}, {title:"Meeting", isD:false, isDone:true, num:3}];
  $scope.add = function() {
    if (this.newItem) {
      //join to all
      this.todoList.push({title:this.newItem, isD:false, isDone:false, num:counter});
      counter+=1;
      this.newItem = "";
    }
  }
  $scope.removeItem = function(item){
    item.isD = true;
  }
    $scope.movetoDone = function(item){
    item.isDone = true;
  }
  $scope.movetoPending = function(item){
    item.isDone = false;
  }
};

var addAndRemoveClass = function() {
  var div = $('#content-contanier div');
  var choose = $(this).index() + 1;
  $('#content-contanier div').addClass('disappear');
  $('#content-contanier div:nth-child(' + choose + ')').removeClass('disappear');
  if (choose === 4) {
    $('#create-form-container').removeClass('disappear2');
    $('#update-form-container').addClass('disappear2');
  }
};
$('#navbar-list li').click(addAndRemoveClass);

/*$('#content-all').on('click', '.trash', function(){
  var id = $(this).parent().parent().attr('class');
  $('.' + id).remove();
})*/

$('#content-all').on('click', '.edit', function(){
  $('#content-all').addClass('disappear');
  $('#content-add').removeClass('disappear');
  $('#create-form-container').addClass('disappear2');
  $('#update-form-container').removeClass('disappear2');
  var string = $(this).parent().parent().children('p').text();
  var id = $(this).parent().parent().attr('class');
  $('#todo_update').val(string);
  $('#todo_update_id').val(id);
})

$('#content-pending').on('click', '.done', function(){
  //$(this).parent().parent().remove();
  //var string = $(this).parent().parent().children('p').text();
  //var id = $(this).parent().parent().attr('class');
  //join to done
  //$('#content-done-list').append('<li class="' + id + '"><p>' + string + 
              //'</p><div class="btn-group"><div class="btn notDone">Not Done?</div></div></li>');
});

$('#content-done').on('click', '.notDone', function(){
  //$(this).parent().parent().remove();
  //var string = $(this).parent().parent().children('p').text();
  //var id = $(this).parent().parent().attr('class');
  //join to pending
  //$('#content-pending-list').append('<li class="' + id + '"><p>' + string + 
              //'</p><div class="btn-group"><div class="btn done">Done?</div></div></li>');
});
                    
$('#create-form').submit(function(event){
  //var todo_input = $('#todo_input').val();
  //var new_todo = '<li class="' + counter + '"><p>' + todo_input + '</p><div class="btn-group"><div class="btn trash"><i class="fa fa-trash" aria-hidden="true"></i></div><div class="btn edit"><i class="fa fa-pencil" aria-hidden="true"></i></div></div></li>';
  //var new_pending = '<li class="' + counter + '"><p>' + todo_input + '</p><div class="btn-group"><div class="btn done">Done?</div></div></li>';

  //join to all
  //$('#content-all-list').append(new_todo);
  
  //join to pending
  //$('#content-pending-list').append(new_pending);
  
  //$('#todo_input').val("");
  //counter+=1;
  //event.preventDefault();
});

$('#update-form').submit(function(event){
  var update_input = $('#todo_update').val();
  var id = $('#todo_update_id').val();
  $('.' + id).children('p').text(update_input);
  event.preventDefault();
});