state.query = null;
state.q = '';

on.input.in = function() {
  try {
    if ($.query !== state.q) {
      state.q = $.query;
      state.query = objeq(state.q);
    }
    var out = state.query($.in);
    output({out: out});
  } catch (e) {
    output({error: e});
  }
};
