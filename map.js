module.exports = {
  name: "map",
  ns: "array",
  async: true,
  description: "Creates new array output with the results of calling the provided function on every element in this array",
  phrases: {
    active: "Mapping array"
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
              out: $.write('in', $.in.map($.fn))
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