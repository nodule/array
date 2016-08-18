on.input.in = function() {
  var out = $.write('in', lodash.find($.in, $.find))
  if (out) {
    output({
      'match': out
    });
  } else {
    output({
      'nomatch': $.get('in')
    });
  }
};
