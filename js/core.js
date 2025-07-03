function _0x3c65(_0x470253, _0x346494) {
  const _0x1479be = _0x1479();
  return (
    (_0x3c65 = function (_0x3c65b0, _0x3f44ae) {
      _0x3c65b0 = _0x3c65b0 - 0x81;
      let _0x6aebe3 = _0x1479be[_0x3c65b0];
      return _0x6aebe3;
    }),
    _0x3c65(_0x470253, _0x346494)
  );
}
const _0x20328e = _0x3c65;
(function (_0x258781, _0x1f66c5) {
  const _0x24492f = _0x3c65,
    _0x39a296 = _0x258781();
  while (!![]) {
    try {
      const _0x279d7b =
        (parseInt(_0x24492f(0x8b)) / 0x1) * (-parseInt(_0x24492f(0xb8)) / 0x2) +
        (-parseInt(_0x24492f(0xb7)) / 0x3) *
          (-parseInt(_0x24492f(0xb6)) / 0x4) +
        (parseInt(_0x24492f(0x91)) / 0x5) * (-parseInt(_0x24492f(0x9d)) / 0x6) +
        -parseInt(_0x24492f(0xae)) / 0x7 +
        -parseInt(_0x24492f(0x86)) / 0x8 +
        -parseInt(_0x24492f(0xa8)) / 0x9 +
        (-parseInt(_0x24492f(0x93)) / 0xa) * (-parseInt(_0x24492f(0xb4)) / 0xb);
      if (_0x279d7b === _0x1f66c5) break;
      else _0x39a296["push"](_0x39a296["shift"]());
    } catch (_0x51896f) {
      _0x39a296["push"](_0x39a296["shift"]());
    }
  }
})(_0x1479, 0x41dc6);
const intro = document[_0x20328e(0x9b)](_0x20328e(0x83)),
  revealSection = document[_0x20328e(0x9b)](_0x20328e(0x90));
_0x20328e(0x99) in history && (history["scrollRestoration"] = "manual");
window[_0x20328e(0xaa)](_0x20328e(0x8f), () => {
  const _0x200c64 = _0x20328e;
  window[_0x200c64(0x89)](0x0, 0x0), revealSection?.[_0x200c64(0x89)](0x0, 0x0);
});
function lazyLoadScript(_0x131d51) {
  return new Promise((_0x4d4925, _0x1cf671) => {
    const _0x4882c2 = _0x3c65,
      _0x3ebd3f = document[_0x4882c2(0x9e)](
        "script[src=\x22" + _0x131d51 + "\x22]"
      );
    if (_0x3ebd3f) return _0x4d4925();
    const _0x1b9ae2 = document[_0x4882c2(0xa0)](_0x4882c2(0x87));
    (_0x1b9ae2[_0x4882c2(0xad)] = _0x131d51),
      (_0x1b9ae2[_0x4882c2(0x82)] = _0x4d4925),
      (_0x1b9ae2["onerror"] = _0x1cf671),
      document[_0x4882c2(0x95)][_0x4882c2(0x98)](_0x1b9ae2);
  });
}
function showSection(_0xbbd4da, _0x157a63) {
  const _0x2f56ae = _0x20328e,
    _0x1141df = document[_0x2f56ae(0x9b)](_0x157a63);
  console["log"](_0x2f56ae(0xb1), _0x157a63),
    console[_0x2f56ae(0xa4)](_0x2f56ae(0x8e), _0x1141df);
  if (!_0x1141df) {
    console[_0x2f56ae(0xb5)](_0x2f56ae(0xaf) + _0x157a63 + "\x22");
    return;
  }
  !_0x1141df[_0x2f56ae(0xa1)]["loaded"] &&
    fetch(_0x157a63 + ".html")
      [_0x2f56ae(0x97)]((_0x4181a9) => _0x4181a9[_0x2f56ae(0xac)]())
      [_0x2f56ae(0x97)]((_0x20fae8) => {
        const _0x54d59e = _0x2f56ae;
        (_0x1141df[_0x54d59e(0xa2)] = _0x20fae8),
          (_0x1141df[_0x54d59e(0xa1)][_0x54d59e(0xba)] = "true");
      })
      [_0x2f56ae(0xb0)]((_0x58e203) => {
        const _0x38b45b = _0x2f56ae;
        console[_0x38b45b(0xb5)](
          _0x38b45b(0x8c) + _0x157a63 + ".html:",
          _0x58e203
        ),
          (_0x1141df[_0x38b45b(0xa2)] =
            _0x38b45b(0x84) + _0x157a63 + _0x38b45b(0x9f));
      });
  localStorage[_0x2f56ae(0x96)](_0x2f56ae(0x85), _0x157a63),
    intro["classList"][_0x2f56ae(0x92)]("hidden"),
    revealSection[_0x2f56ae(0x8a)][_0x2f56ae(0xa5)](_0x2f56ae(0xab)),
    document[_0x2f56ae(0xa7)](_0x2f56ae(0x81))[_0x2f56ae(0x9c)]((_0x271733) =>
      _0x271733[_0x2f56ae(0x8a)][_0x2f56ae(0x92)]("hidden")
    ),
    _0x1141df["classList"]["remove"](_0x2f56ae(0xab));
  if (_0x157a63 === _0x2f56ae(0xb3)) lazyLoadScript(_0x2f56ae(0x9a));
  if (_0x157a63 === _0x2f56ae(0xb9)) lazyLoadScript(_0x2f56ae(0x88));
  if (_0x157a63 === _0x2f56ae(0xa6)) lazyLoadScript(_0x2f56ae(0xa9));
  document["querySelectorAll"](_0x2f56ae(0xb2))[_0x2f56ae(0x9c)]((_0x3c515c) =>
    _0x3c515c[_0x2f56ae(0x8a)][_0x2f56ae(0xa5)](_0x2f56ae(0x94))
  );
  if (_0xbbd4da) _0xbbd4da["target"][_0x2f56ae(0x8a)]["add"]("active");
}
const observer = new MutationObserver(() => {
  const _0x4715be = _0x20328e;
  !revealSection[_0x4715be(0x8a)]["contains"](_0x4715be(0xab)) &&
    (revealSection["scrollTo"]({ top: 0x0, behavior: _0x4715be(0xa3) }),
    window["scrollTo"]({ top: 0x0, behavior: _0x4715be(0xa3) }));
});
observer["observe"](revealSection, {
  attributes: !![],
  attributeFilter: [_0x20328e(0x8d)],
});
function _0x1479() {
  const _0xbda602 = [
    "2598IUWtRT",
    "project",
    "loaded",
    "#revealSection\x20>\x20div",
    "onload",
    "intro",
    "<p\x20class=\x22text-red-500\x22>Failed\x20to\x20load\x20",
    "activeSection",
    "1361024GCdsvp",
    "script",
    "project.js",
    "scrollTo",
    "classList",
    "28MLXeMl",
    "⚠️\x20Error\x20loading\x20",
    "class",
    "2\x20target\x20element\x20found:",
    "load",
    "revealSection",
    "10odFRoL",
    "add",
    "1533860OlNbMH",
    "active",
    "body",
    "setItem",
    "then",
    "appendChild",
    "scrollRestoration",
    "contact.js",
    "getElementById",
    "forEach",
    "720072IEhoUT",
    "querySelector",
    "\x20content.</p>",
    "createElement",
    "dataset",
    "innerHTML",
    "instant",
    "log",
    "remove",
    "experience",
    "querySelectorAll",
    "672912kHNFfb",
    "experience.js",
    "addEventListener",
    "hidden",
    "text",
    "src",
    "3603978AcWMLK",
    "❌\x20No\x20element\x20found\x20with\x20id\x20\x22",
    "catch",
    "1\x20showSection\x20called\x20with\x20id:",
    ".menu-item",
    "contact",
    "66dKucbp",
    "error",
    "1542384zUjbmT",
    "3iOISfM",
  ];
  _0x1479 = function () {
    return _0xbda602;
  };
  return _0x1479();
}
export { showSection };
