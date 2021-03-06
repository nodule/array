module.exports = {
  name: "isEmpty",
  ns: "array",
  async: true,
  description: "Checks whether the array is empty.",
  phrases: {
    active: "Determining whether the array is empty"
  },
  ports: {
    input: {
      "in": {
        title: "Array",
        type: "array",
        async: true,
        fn: function __IN__(data, source, state, input, $, output) {
          var r = function() {
            if ($.in.length > 0) {
              output({
                yes: $.get('in')
              });
            } else {
              output({
                no: $.get('in')
              });
            }
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      }
    },
    output: {
      yes: {
        title: "Yes",
        type: "array"
      },
      no: {
        title: "No",
        type: "array"
      }
    }
  },
  state: {}
}