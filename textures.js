// Generated by CoffeeScript 1.6.3
(function() {
  var rand, root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  rand = function() {
    return (Math.random().toString(36) + '00000000000000000').replace(/[^a-z]+/g, '').slice(0, 5);
  };

  root.textures = {
    lines: function() {
      var background, id, lines, orientation, path, size, stroke, strokeWidth;
      size = 20;
      strokeWidth = 2;
      stroke = '#1a1a1a';
      id = rand();
      background = '';
      orientation = 'diagonal';
      path = function(orientation) {
        switch (orientation) {
          case '0/8':
            return (function(s) {
              return 'M ' + s / 2 + ', 0 l 0, ' + s;
            })(size);
          case 'vertical':
            return (function(s) {
              return 'M ' + s / 2 + ', 0 l 0, ' + s;
            })(size);
          case '1/8':
            return (function(s) {
              return 'M ' + s / 4 + ',0 l ' + s / 2 + ',' + s + ' M ' + -s / 4 + ',0 l ' + s / 2 + ',' + s + ' M ' + s * 3 / 4 + ',0 l ' + s / 2 + ',' + s;
            })(size);
          case '2/8':
            return (function(s) {
              return 'M 0,' + s + ' l ' + s + ',' + -s + ' M ' + -s / 4 + ',' + s / 4 + ' l ' + s / 2 + ',' + -s / 2 + ' M ' + 3 / 4 * s + ',' + 5 / 4 * s + ' l ' + s / 2 + ',' + -s / 2;
            })(size);
          case 'diagonal':
            return (function(s) {
              return 'M 0,' + s + ' l ' + s + ',' + -s + ' M ' + -s / 4 + ',' + s / 4 + ' l ' + s / 2 + ',' + -s / 2 + ' M ' + 3 / 4 * s + ',' + 5 / 4 * s + ' l ' + s / 2 + ',' + -s / 2;
            })(size);
          case '3/8':
            return (function(s) {
              return 'M 0,' + 3 / 4 * s + ' l ' + s + ',' + -s / 2 + ' M 0,' + s / 4 + ' l ' + s + ',' + -s / 2 + ' M 0,' + s * 5 / 4 + ' l ' + s + ',' + -s / 2;
            })(size);
          case '4/8':
            return (function(s) {
              return 'M 0,' + s / 2 + ' l ' + s + ',0';
            })(size);
          case 'horizontal':
            return (function(s) {
              return 'M 0,' + s / 2 + ' l ' + s + ',0';
            })(size);
          case '5/8':
            return (function(s) {
              return 'M 0,' + -s / 4 + ' l ' + s + ',' + s / 2 + 'M 0,' + s / 4 + ' l ' + s + ',' + s / 2 + 'M 0,' + s * 3 / 4 + ' l ' + s + ',' + s / 2;
            })(size);
          case '6/8':
            return (function(s) {
              return 'M 0,0 l ' + s + ',' + s + ' M ' + -s / 4 + ',' + 3 / 4 * s + ' l ' + s / 2 + ',' + s / 2 + ' M ' + s * 3 / 4 + ',' + -s / 4 + ' l ' + s / 2 + ',' + s / 2;
            })(size);
          case '7/8':
            return (function(s) {
              return 'M ' + -s / 4 + ',0 l ' + s / 2 + ',' + s + ' M ' + s / 4 + ',0 l ' + s / 2 + ',' + s + ' M ' + s * 3 / 4 + ',0 l ' + s / 2 + ',' + s;
            })(size);
          default:
            return (function(s) {
              return 'M ' + s / 2 + ', 0 l 0, ' + s;
            })(size);
        }
      };
      lines = function() {
        var g;
        g = this.append('defs').append('pattern').attr('id', id).attr('patternUnits', 'userSpaceOnUse').attr('width', size).attr('height', size);
        if (background) {
          g.append("rect").attr("width", size).attr("height", size).attr("fill", background);
        }
        return g.append('path').attr('d', path(orientation)).attr('stroke-width', strokeWidth).attr("shape-rendering", "crispEdges").attr('stroke', stroke).attr("stroke-linecap", "square");
      };
      lines.background = function(_) {
        background = _;
        return lines;
      };
      lines.thicker = function(_) {
        if (!arguments.length) {
          strokeWidth = strokeWidth * 2;
        } else {
          strokeWidth = strokeWidth * 2 * _;
        }
        return lines;
      };
      lines.thinner = function(_) {
        if (!arguments.length) {
          strokeWidth = strokeWidth / 2;
        } else {
          strokeWidth = strokeWidth / (2 * _);
        }
        return lines;
      };
      lines.farther = function(_) {
        if (!arguments.length) {
          size = size * 2;
        } else {
          size = size * 2 * _;
        }
        return lines;
      };
      lines.nearer = function(_) {
        if (!arguments.length) {
          size = size / 2;
        } else {
          size = size / (2 * _);
        }
        return lines;
      };
      lines.orientation = function(_) {
        orientation = _;
        return lines;
      };
      lines.size = function(_) {
        size = _;
        return lines;
      };
      lines.stroke = function(_) {
        stroke = _;
        return lines;
      };
      lines.strokeWidth = function(_) {
        strokeWidth = _;
        return lines;
      };
      lines.id = function(_) {
        if (!arguments.length) {
          return id;
        } else {
          id = _;
          return lines;
        }
      };
      lines.url = function() {
        return "url(#" + lines.id() + ")";
      };
      return lines;
    }
  };

}).call(this);
