var $addEntryButton = document.querySelector('.add-entry');
var $overlay = document.querySelector('.overlay');
var $submitNewEntry = document.querySelector('.submit-button');

function handleNewEntry(event) {
  $overlay.className = 'overlay row justify-content-center margin-zero align-center';
}

function handleSubmitEntry(event) {
  event.preventDefault();
  $overlay.className = 'overlay row justify-content-center margin-zero align-center hidden';
}

$addEntryButton.addEventListener('click', handleNewEntry);
$submitNewEntry.addEventListener('sumbit', handleSubmitEntry);
