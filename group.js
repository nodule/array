module.exports = {
  name: "group",
  ns: "array",
  async: true,
  description: "Takes an array and turns it into group. Items are spit out one by one.",
  phrases: {
    active: "Grouping array"
  },
  expose: ["chi"],
  ports: {
    input: {
      "in": {
        title: "Array",
        type: "array",
        async: true,
        fn: function __IN__(data, x, source, state, input, output, chi) {
          var r = function() {
            var i;

            // TODO: second parameter is a bit weird.
            var g = chi.group('xout', output);
            for (i = 0; i < $.in.length; i++) {
              output({
                out: $.isPacket($.in[i]) ? $.in[i] : $.create($.in[i])
              }, g.item());
            }

            g.done();
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
        group: "result",
        type: "any"
      },
      xout: {
        title: "Xout",
        type: "array"
      }
    }
  },
  state: {}
}