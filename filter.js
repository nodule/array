module.exports = {
  name: "filter",
  ns: "array",
  async: true,
  description: "Creates a new array with all elements that pass the test implemented by the provided function.",
  phrases: {
    active: "Filtering array"
  },
  ports: {
    input: {
      "in": {
        title: "Value",
        type: "array",
        async: true,
        fn: function __IN__(data, source, state, input, $, output) {
          var r = function() {
            output({
              out: $.write('in', $.in.filter($.fn))
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      fn: {
        title: "Function",
        type: "function",
        args: ["val",
          "index",
          "array"
        ]
      }
    },
    output: {
      out: {
        title: "Output",
        type: "array"
      }
    }
  },
  state: {}
}