
// author : Saul Luz <saulsluz@gmail.com>
$.fn.prevent = function (action, callback) {

  return this.each(function () {

    var me = $(this);

    if (action == 'store') {
      me.data('original', $(this).clone(true, true))
    }

    if (action == 'restore') {
      var original = me.data('original')
      $(this).replaceWith(original)
      if (callback instanceof Function) callback( original )
    }

    if (action == 'block') {
      $(this).off().attr('disabled', true)

      var label = 'Loading...'
      $(this, 'button').text(label)
      $(this, 'input, select, textarea').val(label)
    }

  });

};