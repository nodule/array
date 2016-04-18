module.exports = {
  description: "Joins all elements of an array into a string.",
  name: "join",
  ns: "array",
  phrases: {
    active: "Joining array"
  },
  ports: {
    input: {
      "in": {
        title: "Array",
        type: "array"
      },
      seperator: {
        title: "Seperator",
        type: "string",
        "default": ","
      }
    },
    output: {
      out: {
        title: "out",
        type: "string"
      }
    }
  },
  fn: function join(input, $, output, state, done, cb, on) {
    var r = function() {
      output.out = $.write('in', $.in.join($.seperator))
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}