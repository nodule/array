on.input.in = function () {
  var g = chix_group.send.create()
  output({xout: g.open()})

  for(var i = 0; i < $.in.length; i++) {
    output({out: $.create($.in[i])})
  }

  output({xout: g.close()});
};
