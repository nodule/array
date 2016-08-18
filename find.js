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
            output({
              out: $.write('in', lodash.find($.in, $.find))
            });
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
      out: {
        title: "Output",
        type: "any"
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