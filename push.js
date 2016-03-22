module.exports = {
  name: "push",
  ns: "array",
  description: "Append value to an array.",
  phrases: {
    active: "Creating array"
  },
  ports: {
    input: {
      "in": {
        title: "Array",
        type: "array"
      },
      value: {
        title: "Value",
        type: "any"
      }
    },
    output: {
      out: {
        title: "out",
        type: "array"
      },
      length: {
        title: "New Length",
        type: "number"
      }
    }
  },
  fn: function push(input, $, output, state, done, cb, on) {
    var r = function() {
      output.length = $.create($.in.push($.value));
      output.out = $.get('in');
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}