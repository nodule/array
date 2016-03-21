on.input.in = function () {

  var i;

  // TODO: second parameter is a bit weird.
  var g = chi.group('xout', output);
  for(i = 0; i < input.in.length; i++) {
    output({ out: input.in[i] }, g.item());
  }

  g.done();

};
