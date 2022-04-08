var $addEntryButton = document.querySelector('.add-entry');
var $modal = document.querySelector('.modal');
var $form = document.querySelector('form');
var $selectDayOfTheWeek = document.querySelector('.day-of-week');
var $time = document.querySelector('.time-bar');
var $description = document.querySelector('.notes');

var $weekTab = document.querySelector('.days-of-week');
var $entryTime = document.querySelectorAll('time-value');
var $entryDescrip = document.querySelectorAll('description-value');
function handleNewEntry(event) {
  $modal.className = 'modal';
}

function handleSubmitEntry(event) {
  event.preventDefault();
  // create an empty object for entry
  // querySelect option dayofWeek value
  // querySelect opttion time value
  // querySelect description value
  // assign entryId number
  var newEntryObj = {
    day: $selectDayOfTheWeek.value,
    time: $time.value,
    description: $description.value,
    entryId: data.nextEntryId
  };

  data.nextEntryId++;
  data.entries.unshift(newEntryObj);
  $form.reset();

  $modal.className = 'modal hidden';
}

function handleDayOfWeek(event) {
  console.log(event.target.outerText);
  console.log(typeof event.target.outerText);
  var daysArr = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ];
  if (!daysArr.includes(event.target.outerText)) {
    return;
  }
  var stringDay = event.target.outerText.toLowerCase();
  for (var i = 0; i < data.entries.length; i++) {
    if (stringDay === data.entries[i].name) {
      for (var j = 0; j < data.entries[i].entries.length; j++) {
        $entryTime[j].textContent = data.entries[i].entries[j].time;
        $entryDescrip[j].textContent = data.entries[i].entries[j].notes;
      }
    }
  }
  console.log(stringDay);
}

$addEntryButton.addEventListener('click', handleNewEntry);
$form.addEventListener('submit', handleSubmitEntry);
$weekTab.addEventListener('click', handleDayOfWeek);
