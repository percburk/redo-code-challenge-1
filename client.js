$(onReady);

function onReady() {
  console.log('JS and JQ loaded');
  $(document).on('click', '#generateButton', createDiv);
  $(document).on('click', '#yellowButton', turnYellow);
  $(document).on('click', '#deleteButton', deleteDiv);
}

let clickCount = 0;

function createDiv() {
  clickCount++;
  $('#appendDivs').append(`
    <div id="divCreated" class="div">
      <p>${clickCount}</p>
      <button id="yellowButton">Yellow</button>
      <button id="deleteButton">Delete</button>
    </div>
  `);
}

function turnYellow() {
  console.log('clicked');
  $(this).closest('div').addClass('changeDiv');
}

function deleteDiv() {
  console.log('clicked');
  $(this).closest('div').remove();
}
