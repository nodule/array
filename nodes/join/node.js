on.input.in = function() {
  if($.in.length > 0) {
    output( { yes: $.in } );
  } else {
    output( { no: $.in } );
  }
};
