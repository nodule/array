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
        fn: function __IN__(data, x, source, state, input, output) {
          var r = function() {
            if (!state.arr) state.arr = input.array || [];

            state.arr.push(data);

            if (state.arr.length === input.length) {
              output({
                out: state.arr
              });
              state.arr = input.array || [];
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