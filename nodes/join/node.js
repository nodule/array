on.input.in = function() {
  if($.in.length > 0) {
    output( { yes: $.get('in') } );
  } else {
    output( { no: $.get('in') } );
  }
};
