"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfiguredWrapper = exports.default = void 0;
var SVG_NS = 'http://www.w3.org/2000/svg';
var alignments = {
  'top': true,
  'baseline': true,
  'bottom': true,
  'middle': true
};

function getConfig(mod, cfg) {
  var ret = {
    'plain': !cfg.plain ? false : true,
    'width': null || cfg.width,
    'align': cfg.align === 'none' ? false : alignments[cfg.align] ? cfg.align : 'baseline',
    'lineHeight': cfg.lineHeight || '1.125em',
    'paddingLeft': !cfg.paddingLeft ? !cfg.padding ? 0 : cfg.padding : cfg.paddingLeft,
    'paddingRight': !cfg.paddingRight ? !cfg.padding ? 0 : cfg.padding : cfg.paddingRight,
    'afterReflow': cfg.afterReflow instanceof Function ? cfg.afterReflow : false
  };
  ret.padding = ret.paddingLeft + ret.paddingRight;

  for (var k in mod) {
    if (k === 'plain') ret.plain = true;else if (alignments[k]) {
      ret.align = k;
    } else if (k === 'none') {
      ret.align = false;
    } else if (/\d+/.test(k)) ret.width = parseInt(k);
  }

  return ret;
}

function newLine(el, span, config) {
  var tmp = span.cloneNode();
  el.insertBefore(tmp, span.nextSibling);
  span.style.display = null;
  tmp.removeAttribute('y');
  tmp.setAttribute('dy', config.lineHeight);
  if (!config.align) tmp.setAttribute('x', config.paddingLeft);else tmp.setAttribute('x', 0);
  return tmp;
}

function set(el, text, config) {
  el[config.plain ? 'textContent' : 'innerHTML'] = text || '';
  var h0 = el.getBoundingClientRect().height;
  if (!config.width) return;
  var plain = [];

  for (var i = 0; i < el.childNodes.length; i++) {
    var n = el.childNodes[i];

    if (n instanceof Text) {
      var tmp = document.createElementNS(SVG_NS, 'tspan');
      tmp.textContent = n.textContent;
      el.replaceChild(tmp, n);
      n = tmp;
    }

    plain.push(n.textContent.split(' '));
    n.textContent = '';
  }

  if (!config.align) {
    el.childNodes[0].setAttribute('x', config.paddingLeft);
  }

  var offset = 0,
      w = config.width - config.padding,
      childCnt = el.childElementCount;

  for (var c = 0; c < childCnt; c++) {
    var words = plain[c];
    var wc = words.length,
        span = el.childNodes[c + offset],
        txt = '',
        forceBreak = false;

    for (var _i = 0; _i < wc; _i++) {
      span.textContent += _i ? ' ' + words[_i] : words[_i];
      forceBreak = el.getBoundingClientRect().width > w;

      while (forceBreak) {
        span.textContent = txt;
        span = newLine(el, span, config);
        txt = span.textContent = words[_i];
        offset++;

        if (el.getBoundingClientRect().width > w) {
          span.style.display = 'none';
          txt = words[++_i];
          if (!txt) forceBreak = false;
        } else forceBreak = false;
      }

      txt = span.textContent;
    }
  }

  if (!el.children.length) return;

  for (var _i2 = 0; _i2 < el.childNodes.length; _i2++) {
    el.childNodes[_i2].style.display = '';
  }

  if (config.align === 'middle') el.setAttribute('transform', "translate(".concat(config.paddingLeft, ", ").concat(-(el.getBoundingClientRect().height - 1.5 * h0) / 2, ")"));else if (config.align === 'baseline') el.setAttribute('transform', "translate(".concat(config.paddingLeft, ", 0)"));else if (config.align === 'bottom') el.setAttribute('transform', "translate(".concat(config.paddingLeft, ", ").concat(-(el.getBoundingClientRect().height - h0), ")"));else if (config.align === 'top') el.setAttribute('transform', "translate(".concat(config.paddingLeft, ", ").concat(h0, ")"));
}

function directive(config) {
  if (!config) config = {};
  var r = {
    inserted: function inserted(el, binding) {
      if (!(el instanceof SVGTextElement)) throw new Error('Text-wrap directive must be bound to an SVG text element.');
      el.__WRAP_CONFIG = getConfig(binding.modifiers, config);
      r.update.apply(this, arguments);
    },
    update: function update(el, binding, _ref) {
      var context = _ref.context;

      if (binding.value !== binding.oldValue) {
        var cfg = el.__WRAP_CONFIG;

        if (binding.value && typeof binding.value !== 'string') {
          var text = binding.value.text;
          cfg = getConfig({}, Object.assign({}, el.__WRAP_CONFIG, binding.value));
          set(el, text, cfg);
        } else set(el, binding.value, cfg);

        if (cfg.afterReflow) cfg.afterReflow.call(context, el, cfg);
      }
    },
    unbind: function unbind(el) {
      delete el.__WRAP_CONFIG;
    }
  };
  return r;
}

var Wrapper = directive();
var _default = Wrapper;
exports.default = _default;
var ConfiguredWrapper = directive;
exports.ConfiguredWrapper = ConfiguredWrapper;

//# sourceMappingURL=index.js.map