$(document).ready(function () {


$(document).ready(function() {
  var date = dayjs().format('dddd, MMMM D, YYYY');
  $('#date').text(date);
  });

  $(document).ready(function() {
    var time = dayjs().format('hh:mm a');
    $('#time').text(time);
  });

    var currentTime = dayjs().format('H');
  });

  var hour9 = document.getElementById('hour-9');
  var hour10 = document.getElementById('hour-10');
  var hour11 = document.getElementById('hour-11');
  var hour12 = document.getElementById('hour-12');
  var hour13 = document.getElementById('hour-1');
  var hour14 = document.getElementById('hour-2');
  var hour15 = document.getElementById('hour-3');
  var hour16 = document.getElementById('hour-4');
  var hour17 = document.getElementById('hour-5');

  var currentTime = dayjs().format('H');

  function checkHour9() {
    if (currentTime > 9) {
      hour9.classList.add('past');
    } else if (currentTime === '9') {
      hour9.classList.add('present');
    } else {
      hour9.classList.add('future');
    }
  }

  function checkHour10() {
    if (currentTime > 10) {
      hour10.classList.add('past');
    } else if (currentTime === '10') {
      hour10.classList.add('present');
    } else {
      hour10.classList.add('future');
    }
  }

  function checkHour11() {
    if (currentTime > 11) {
      hour11.classList.add('past');
    } else if (currentTime === '11') {
      hour11.classList.add('present');
    } else {
      hour11.classList.add('future');
    }
  }
 
  function checkHour12() {
    if (currentTime > 12) {
      hour12.classList.add('past');
    } else if (currentTime === '12') {
      hour12.classList.add('present');
    } else {
      hour12.classList.add('future');
    }
  }

  function checkHour13() {
    if (currentTime > 13) {
      hour13.classList.add('past');
    } else if (currentTime === '13') {
      hour13.classList.add('present');
    } else {
      hour13.classList.add('future');
    }
  }

  function checkHour14() {
    if (currentTime > 14) {
      hour14.classList.add('past');
    } else if (currentTime === '14') {
      hour14.classList.add('present');
    } else {
      hour14.classList.add('future');
    }
  }

  function checkHour15() {
    if (currentTime > 15) {
      hour15.classList.add('past');
    } else if (currentTime === '15') {
      hour15.classList.add('present');
    } else {
      hour15.classList.add('future');
    }
  }

  function checkHour16() {
    if (currentTime > 16) {
      hour16.classList.add('past');
    } else if (currentTime === '16') {
      hour16.classList.add('present');
    } else {
      hour16.classList.add('future');
    }
  }

  function checkHour17() {
    if (currentTime > 17) {
      hour17.classList.add('past');
    } else if (currentTime === '17') {
      hour17.classList.add('present');
    } else {
      hour17.classList.add('future');
    }
  }

  checkHour9();
  checkHour10();
  checkHour11();
  checkHour12();
  checkHour13();
  checkHour14();
  checkHour15();
  checkHour16();
  checkHour17();


$('.saveBtn').on('click', function() {
  console.log($(this).siblings('.description').val())
  var key = $(this).parent().attr('id')
  var value = $(this).siblings('.description').val()
  localStorage.setItem(key, value);
});

$('.time-block').each(function() {
  var hourId = $(this).attr('id');
  $(this).children('textarea').val(localStorage.getItem(hourId));
});


