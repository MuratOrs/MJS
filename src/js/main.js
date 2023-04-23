import $ from './lib/lib';

$('button').on('click', function () {
  $('div').eq(1).toggleClass('active').find();
});

console.log($('button').html('hallo'));

$('div').click(function () {
  console.log($(this).index());
});

// console.log($('div').eq(2).find('.some'));

// console.log($('.some').closest('.findme').addClass('test'));

console.log($('.findme').siblings().addClass('red'));
