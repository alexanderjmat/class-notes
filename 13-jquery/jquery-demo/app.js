// $('img').click(function () {
//   alert('HELLO!')
// })



$('img').on('mouseenter', function() {
  $(this).css('border', '5px solid red')
})

$('img').on('click', function() {
  // $(this).fadeOut(3000, function() {
  //   $(this).remove();
  // });
  $(this).animate({opacity : 0,
  width: '1px'}, 3000, function() {
    $(this).remove();
  })
})

$('#add-input').on('click', function() {
  $('form').append('<input type"text"/>')
})

$('form').on('focus', 'input', function() {
  $(this).val('PSYCHE');
})
//on() accepts optional arg between type of event and callback
//...this allows for event delegation

//.get turns the jQuery object into a dom object/nodelist
//common jquery methods 
//.val
//.text
//.attr 
//.html

//jquery methods are multi purposed

//declaring a $ in a variable is a way to let developers know it's jquery




