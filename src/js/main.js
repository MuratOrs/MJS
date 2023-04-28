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

$('#trigger').click(() =>
  $('#trigger').createModal({
    text: {
      title: 'Modal title',
      body: 'lorem lorem lorem lorem',
    },
    btns: {
      count: 3,
      settings: [
        ['Close', ['btn-danger', 'mr-10'], true],
        [
          'Save changes',
          ['btn-success'],
          false,
          () => {
            alert('Данные сохранены');
          },
        ],
        [
          'Another btn',
          ['btn-warning', 'ml-10'],
          false,
          () => {
            alert('Hello World');
          },
        ],
      ],
    },
  })
);
