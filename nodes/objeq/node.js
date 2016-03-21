state.query = null;
state.q = '';

on.input.in = function() {
  try {
    if (input.query !== state.q) {
      state.q = input.query;
      state.query = objeq(state.q);
    }
    var out = state.query(input.in);
    output({out: out});
  } catch (e) {
    output({error: e});
  }
};
