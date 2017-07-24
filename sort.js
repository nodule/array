module.exports = {
  name: "sort",
  ns: "array",
  async: true,
  description: "The sort() method sorts the elements of an array in place and returns the array. The sort is not necessarily stable. The default sort order is according to string Unicode code points.",
  phrases: {
    active: "Sorting array"
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
              out: $.write('in', $.in.sort($.fn))
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
        required: false,
        args: ["a",
          "b"
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