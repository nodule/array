on.input.in = function() {

  if(!state.arr) state.arr = input.array || [];

  state.arr.push(data);

  if(state.arr.length === input.length) {
    output({ out: state.arr });
    state.arr = input.array || [];
  }

};
