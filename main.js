var $addEntryButton = document.querySelector('.add-entry');
var $modal = document.querySelector('.modal');
var $form = document.querySelector('form');
var $selectDayOfTheWeek = document.querySelector('.day-of-week');
var $time = document.querySelector('.time-bar');
var $description = document.querySelector('.notes');

var $weekTab = document.querySelector('.days-of-week');

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
}

$addEntryButton.addEventListener('click', handleNewEntry);
$form.addEventListener('submit', handleSubmitEntry);
$weekTab.addEventListener('click', handleDayOfWeek);
