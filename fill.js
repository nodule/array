module.exports = {
  name: "fill",
  ns: "array",
  async: true,
  description: "Fills an array to the length specified and outputs it.",
  phrases: {
    active: "Filling array"
  },
  ports: {
    input: {
      "in": {
        title: "Value",
        type: "any",
        async: true,
        fn: function __IN__(data, source, state, input, $, output) {
          var r = function() {
            if (!state.arr) state.arr = $.array || [];
            state.arr.push($.in);
            if (state.arr.length === $.length) {
              output({
                out: $.create(state.arr)
              });
              state.arr = $.array || [];
            }
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      length: {
        title: "Length",
        type: "number"
      },
      array: {
        title: "Array",
        type: "array",
        "default": null
      }
    },
    output: {
      out: {
        title: "Array",
        type: "array"
      },
      length: {
        title: "New Length",
        type: "number"
      }
    }
  },
  state: {}
}