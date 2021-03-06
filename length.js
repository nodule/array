module.exports = {
  name: "length",
  ns: "array",
  async: true,
  description: "Outputs the length of an array.",
  phrases: {
    active: "Determining length"
  },
  ports: {
    input: {
      "in": {
        title: "Array",
        type: "array",
        async: true,
        fn: function __IN__(data, source, state, input, $, output) {
          var r = function() {
            output({
              out: $.write('in', $.in.length)
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      }
    },
    output: {
      out: {
        title: "out",
        type: "array"
      }
    }
  },
  state: {}
}