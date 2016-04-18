module.exports = {
  name: "group",
  ns: "array",
  async: true,
  description: "Takes an array and turns it into group. Items are spit out one by one.",
  phrases: {
    active: "Grouping array"
  },
  ports: {
    input: {
      "in": {
        title: "Array",
        type: "array",
        async: true,
        fn: function __IN__(data, source, state, input, $, output, chix_group) {
          var r = function() {
            var g = chix_group.send.create()
            output({
              xout: g.open()
            })

            for (var i = 0; i < $.in.length; i++) {
              output({
                out: $.create($.in[i])
              })
            }

            output({
              xout: g.close()
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
        group: "result",
        type: "any"
      },
      xout: {
        title: "Xout"
      }
    }
  },
  dependencies: {
    npm: {
      "chix-group": require('chix-group')
    }
  },
  state: {}
}