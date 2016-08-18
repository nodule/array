on.input.in = function() {
  var out = lodash.find($.in, $.find);

  if (out) {
    output({
      'match': $.write('in', out)
    });
  } else {
    output({
      'nomatch': $.get('in')
    });
  }
};
