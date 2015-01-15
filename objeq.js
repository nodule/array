module.exports = {
  name: "objeq",
  ns: "array",
  description: "objeq allows POJSO's (Plain-Old JavaScript Objects) to be queried in real-time.",
  async: true,
  phrases: {
    active: "Querying object"
  },
  dependencies: {
    npm: {
      objeq: require('objeq')
    }
  },
  ports: {
    input: {
      "in": {
        title: "Array",
        type: "array",
        asyn: true,
        fn: function __IN__(data, x, source, state, input, output, objeq) {
          var r = function() {
            try {
              if (input.query !== state.q) {
                state.q = input.query;
                state.query = objeq(state.q);
              }
              var out = state.query(data);
              output({
                out: out
              });
            } catch (e) {
              output({
                error: e
              });
            }
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      query: {
        title: "Query",
        description: "See [Language Reference](https://github.com/agilosoftware/objeq/wiki/Language-Reference) to learn about the query syntax",
        type: "string"
      }
    },
    output: {
      out: {
        title: "Output",
        type: "array"
      },
      error: {
        title: "Error",
        type: "Error"
      }
    }
  },
  state: {
    query: null,
    q: ""
  }
}