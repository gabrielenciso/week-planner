var $addEntryButton = document.querySelector('.add-entry');
var $modal = document.querySelector('.modal');
var $form = document.querySelector('form');

function handleNewEntry(event) {
  $modal.className = 'modal';
}

function handleSubmitEntry(event) {
  event.preventDefault();
  $modal.className = 'modal hidden';
}

$addEntryButton.addEventListener('click', handleNewEntry);
$form.addEventListener('submit', handleSubmitEntry);
