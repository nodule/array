on.input.in = function() {
  if(!state.arr) state.arr = $.array || [];
  state.arr.push($.in);
  if(state.arr.length === $.length) {
    output({ out: $.create(state.arr) });
    state.arr = $.array || [];
  }
};
