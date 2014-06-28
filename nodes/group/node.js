on.input.in = function () {

  var i;

  // TODO: second parameter is a bit weird.
  var g = chi.group('xout', output);
  for(i = 0; i < data.length; i++) {
    output({ out: data[i] }, g.item());
  }

  g.done();

};
