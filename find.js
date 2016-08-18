module.exports = {
  name: "find",
  ns: "array",
  async: true,
  description: "Find within array",
  phrases: {
    active: "Finding within array"
  },
  ports: {
    input: {
      "in": {
        title: "Value",
        type: "array",
        async: true,
        fn: function __IN__(data, source, state, input, $, output, lodash) {
          var r = function() {
            var out = $.write('in', lodash.find($.in, $.find))
            if (out) {
              output({
                '+': out
              });
            } else {
              output({
                '-': $.get('in')
              });
            }
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      find: {
        title: "Find",
        type: "object"
      }
    },
    output: {
      "+": {
        title: "Output",
        type: "any"
      },
      "-": {
        title: "No Match",
        type: "array"
      }
    }
  },
  dependencies: {
    npm: {
      lodash: require('lodash')
    }
  },
  state: {}
}