on.input.in = function() {
  var out = $.write('in', lodash.find($.in, $.find))
  if (out) {
    output({
      '+': out
    });
  } else {
    output({
      '-': $.get('in')
    });
  }
};
