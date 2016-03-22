module.exports = {
  name: "create",
  ns: "array",
  description: "Creates an array.",
  phrases: {
    active: "Creating array"
  },
  ports: {
    input: {
      "in": {
        title: "Array",
        type: "array"
      }
    },
    output: {
      out: {
        title: "out",
        type: "array"
      }
    }
  },
  fn: function create(input, $, output, state, done, cb, on) {
    var r = function() {
      output.out = $.write('in', $.in.slice());
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}