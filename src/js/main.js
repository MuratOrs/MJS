import $ from './lib/lib';

$('#first').on('click', () => {
  $('div').eq(1).fadeToggle(1000);
});

$('[data-count="second"]').on('click', () => {
  $('div').eq(2).fadeToggle(1000);
});

$('button')
  .eq(2)
  .on('click', () => {
    $('.w-500').fadeToggle(1000);
  });

$('.wrap').html(
  `
      <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">
          Dropdown button
        </button>
        <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
          <a href="#" class="dropdown-item">Home</a>
          <a href="#" class="dropdown-item">Forum</a>
          <a href="#" class="dropdown-item">About</a>
        </div>
      </div>
    </div>     
    `
);

$('.dropdown-toggle').dropdown();
