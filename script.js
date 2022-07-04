var saveBtn = $('.saveBtn');
// display current date
setInterval(function(){
    var currentTime = moment().format("MM/DD/YYYY hh:mm:ss");
    $("#currentDay").text(currentTime)
}, 1000)
//get current hours

// timeblocks indicate past,present,future
function blockColor() {
    var hour = moment().hours();
    
    $('.time-block').each(function() {
        var cHour = parseInt($(this).attr("id"));

        if (cHour < hour) {
            $(this).addClass("future");
        } else if (cHour === hour) {
            $(this).addClass('present');
        } else if (cHour > hour) {
            $(this).addClass('past');
        }
        
    })
};

// clicking on save button
saveBtn.on('click', function() {
    console.log(this);
    var time = $(this).sibilings(".hour").text();
    var description = $(this).sibilings('.description').val();
// save timeblock to ls
 localStorage.setItem(time,description);

}) 

$('#9 .time-block').val(localStorage.getItem('9'));
$('#10 .time-block').val(localStorage.getItem('10'));
$('#11 .time-block').val(localStorage.getItem('11'));
$('#12 .time-block').val(localStorage.getItem('12'));
$('#13 .time-block').val(localStorage.getItem('13'));
$('#14 .time-block').val(localStorage.getItem('14'));
$('#15 .time-block').val(localStorage.getItem('15'));
$('#16 .time-block').val(localStorage.getItem('16'));
$('#17 .time-block').val(localStorage.getItem('17'));

//when refreshed page saved event persist
function useFolder(){
    $(".hour").each(function () {
        var currTime = $(this).text();
        var currDescription = localStorage.getItem(currTime);
        if(currDescription !== null) {
            $(this).sibilings(".description").val(currDescription);        
        }
    });

}

useFolder();
blockColor();