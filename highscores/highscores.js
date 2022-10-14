$(function () {
    $('.example-popover').popover({
      container: 'example1'
    })
  })

  $(function () {
    $('[data-toggle="popover"]').popover()
  })

  var score = document.getElementById('input-group');
  var submitbtn = document.getElementById('submit');

function submit() {
    submitbtn.onclick(hideEl);
}

  
  function hideEl() {
    score.setAttribute('class', 'hide');
  }

   