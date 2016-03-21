on.input.in = function() {
  if(input.in.length > 0) {
    output( { yes: input.in } );
  } else {
    output( { no: input.in } );
  }
};
