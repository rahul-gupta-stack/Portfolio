const _0x4a7abe = _0x47e8;
function _0x47e8(_0x2d898a, _0x3b7f61) {
  const _0x410b03 = _0x410b();
  return (
    (_0x47e8 = function (_0x47e853, _0x3b0c83) {
      _0x47e853 = _0x47e853 - 0xdc;
      let _0x452e81 = _0x410b03[_0x47e853];
      return _0x452e81;
    }),
    _0x47e8(_0x2d898a, _0x3b7f61)
  );
}
(function (_0x571918, _0x1706df) {
  const _0x356bcb = _0x47e8,
    _0x1ba945 = _0x571918();
  while (!![]) {
    try {
      const _0x5e782b =
        -parseInt(_0x356bcb(0x130)) / 0x1 +
        (-parseInt(_0x356bcb(0x12d)) / 0x2) *
          (-parseInt(_0x356bcb(0x109)) / 0x3) +
        parseInt(_0x356bcb(0x124)) / 0x4 +
        (-parseInt(_0x356bcb(0xfb)) / 0x5) *
          (-parseInt(_0x356bcb(0xe7)) / 0x6) +
        -parseInt(_0x356bcb(0xeb)) / 0x7 +
        (-parseInt(_0x356bcb(0xf4)) / 0x8) *
          (parseInt(_0x356bcb(0x111)) / 0x9) +
        parseInt(_0x356bcb(0x11d)) / 0xa;
      if (_0x5e782b === _0x1706df) break;
      else _0x1ba945["push"](_0x1ba945["shift"]());
    } catch (_0x230c70) {
      _0x1ba945["push"](_0x1ba945["shift"]());
    }
  }
})(_0x410b, 0x491c6);
function _0x410b() {
  const _0x167c9f = [
    "modalTitle",
    "\x0a\x20\x20\x20\x20\x20\x20<h3\x20class=\x22whitespace-nowrap\x20overflow-hidden\x20text-ellipsis\x22>",
    "Tech:\x20",
    "w-full\x20rounded\x20",
    "45AQALbe",
    "modalLink",
    "project-card",
    "className",
    "innerHTML",
    "contains",
    "projectGrid",
    "\x0a\x20\x20\x20\x20<div\x20class=\x22bg-zinc-800\x20p-5\x20pb-4\x20rounded-lg\x20hover:scale-[1.02]\x20transition-all\x20duration-300\x20group\x22>\x0a\x20\x20\x20\x20\x20\x20",
    "306LMJSAC",
    "loading",
    "category",
    "onclick",
    "all",
    "</p>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22flex\x20justify-between\x20text-xs\x20text-gray-400\x20border-t\x20border-b\x20py-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22tech-text\x22>Tech:\x20",
    "length",
    "images",
    "\x22\x0a\x20\x20\x20\x20\x20\x20data-link=\x22",
    ".image-slider-container",
    "<a\x20href=\x22",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>",
    "6584610sOnnQT",
    "closeModal",
    "modalPrev",
    "click",
    "remove",
    "split",
    "relative",
    "1276688OYFpCv",
    "createElement",
    "left-1",
    "closest",
    "hidden",
    "stringify",
    "getElementById",
    ".project-tab-btn",
    "target",
    "33602qpuspY",
    "</h3>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22description\x20text-sm\x20text-gray-300\x20mb-2\x22>",
    ".project-card",
    "143118EgsVGj",
    "tech",
    "random",
    "addEventListener",
    "title",
    "<p>🖥️Local</p>",
    "dataset",
    "querySelectorAll",
    "modalDescription",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20<button\x20class=\x22expand-btn\x22>🔍</button>\x0a\x20\x20\x20\x20</div>",
    "forEach",
    "appendChild",
    "link",
    "block",
    "30eyTHso",
    "absolute\x20top-1/2\x20-translate-y-1/2\x20text-white\x20bg-black/40\x20px-2\x20py-1\x20rounded\x20hover:bg-black/60\x20",
    "src",
    "none",
    "1677214LHJbfx",
    "lazy",
    "parse",
    "description",
    "localOnly",
    "then",
    "floor",
    "data-category",
    "display",
    "130352zfGIJF",
    "includes",
    "projectModal",
    "textContent",
    "active",
    "innerText",
    "href",
    "6530pqKXvJ",
    "\x22\x0a\x20\x20\x20\x20\x20\x20data-tech=\x22",
    "\x22\x0a\x20\x20\x20\x20\x20\x20data-description=\x22",
    "modalSliderImage",
    "right-1",
    "add",
    "div",
    "button",
    "classList",
    "\x27\x0a\x20\x20\x20\x20\x20\x20data-title=\x22",
  ];
  _0x410b = function () {
    return _0x167c9f;
  };
  return _0x410b();
}
let modalImages = [],
  currentImageIndex = 0x0,
  modalInterval;
const projectGrid = document[_0x4a7abe(0x12a)](_0x4a7abe(0x10f));
fetch("js/projects.json")
  [_0x4a7abe(0xf0)]((_0xe82b23) => _0xe82b23["json"]())
  [_0x4a7abe(0xf0)]((_0x1e401b) => {
    const _0x31f595 = _0x4a7abe;
    _0x1e401b[_0x31f595(0xe3)]((_0xf3f52c) => {
      const _0x3ecda1 = _0x31f595,
        _0x431c60 = document["createElement"](_0x3ecda1(0x101));
      (_0x431c60[_0x3ecda1(0x10c)] = _0x3ecda1(0x10b)),
        _0x431c60["setAttribute"](_0x3ecda1(0xf2), _0xf3f52c[_0x3ecda1(0x113)]);
      const _0x340ab3 =
        "\x0a\x20\x20\x20\x20<div\x20class=\x22relative\x20overflow-hidden\x20rounded\x20mb-2\x20image-slider-container\x22\x0a\x20\x20\x20\x20\x20\x20data-images=\x27" +
        JSON[_0x3ecda1(0x129)](_0xf3f52c[_0x3ecda1(0x118)]) +
        _0x3ecda1(0x104) +
        _0xf3f52c[_0x3ecda1(0xdd)] +
        _0x3ecda1(0xfd) +
        _0xf3f52c[_0x3ecda1(0xee)] +
        _0x3ecda1(0xfc) +
        _0xf3f52c["tech"] +
        _0x3ecda1(0x119) +
        (_0xf3f52c[_0x3ecda1(0xe5)] || "") +
        _0x3ecda1(0xe2);
      (_0x431c60[_0x3ecda1(0x10d)] =
        _0x3ecda1(0x110) +
        _0x340ab3 +
        _0x3ecda1(0x106) +
        _0xf3f52c["title"] +
        _0x3ecda1(0x12e) +
        _0xf3f52c[_0x3ecda1(0xee)] +
        _0x3ecda1(0x116) +
        _0xf3f52c[_0x3ecda1(0x131)] +
        "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
        (_0xf3f52c["link"]
          ? _0x3ecda1(0x11b) +
            _0xf3f52c[_0x3ecda1(0xe5)] +
            "\x22\x20target=\x22_blank\x22\x20class=\x22text-blue-400\x22>View↗</a>"
          : _0x3ecda1(0xde)) +
        _0x3ecda1(0x11c)),
        projectGrid[_0x3ecda1(0xe4)](_0x431c60);
    }),
      initSliders();
  }),
  document[_0x4a7abe(0xe0)](_0x4a7abe(0x12b))[_0x4a7abe(0xe3)]((_0x34ca8c) => {
    const _0x5e14ae = _0x4a7abe;
    _0x34ca8c[_0x5e14ae(0xdc)](_0x5e14ae(0x120), () => {
      const _0x1ad5e7 = _0x5e14ae;
      document[_0x1ad5e7(0xe0)](_0x1ad5e7(0x12b))[_0x1ad5e7(0xe3)](
        (_0x104a78) =>
          _0x104a78[_0x1ad5e7(0x103)][_0x1ad5e7(0x121)](_0x1ad5e7(0xf8))
      ),
        _0x34ca8c[_0x1ad5e7(0x103)]["add"]("active");
      const _0x126774 = _0x34ca8c[_0x1ad5e7(0xdf)][_0x1ad5e7(0x113)];
      document[_0x1ad5e7(0xe0)](_0x1ad5e7(0x12f))[_0x1ad5e7(0xe3)](
        (_0x469b06) => {
          const _0x4ee81c = _0x1ad5e7,
            _0x4e9589 =
              _0x469b06[_0x4ee81c(0xdf)][_0x4ee81c(0x113)][_0x4ee81c(0x122)](
                "\x20"
              );
          _0x469b06["style"][_0x4ee81c(0xf3)] =
            _0x126774 === _0x4ee81c(0x115) ||
            _0x4e9589[_0x4ee81c(0xf5)](_0x126774)
              ? _0x4ee81c(0xe6)
              : _0x4ee81c(0xea);
        }
      );
    });
  });
function initSliders() {
  const _0x153ff5 = _0x4a7abe;
  document[_0x153ff5(0xe0)](_0x153ff5(0x11a))[_0x153ff5(0xe3)]((_0x2bbf2f) => {
    const _0x5ab14b = _0x153ff5,
      _0x157d0a = JSON["parse"](
        _0x2bbf2f[_0x5ab14b(0xdf)][_0x5ab14b(0x118)] || "[]"
      );
    let _0x4255c8 = 0x0;
    const _0x3c85bb = document[_0x5ab14b(0x125)](_0x5ab14b(0x101));
    (_0x3c85bb[_0x5ab14b(0x10c)] = _0x5ab14b(0x123)),
      _0x157d0a[_0x5ab14b(0xe3)]((_0x37df4a, _0x5f26f0) => {
        const _0x260899 = _0x5ab14b,
          _0x1a43ba = document[_0x260899(0x125)]("img");
        (_0x1a43ba[_0x260899(0xe9)] = _0x37df4a),
          (_0x1a43ba[_0x260899(0x112)] = _0x260899(0xec)),
          (_0x1a43ba[_0x260899(0x10c)] =
            _0x260899(0x108) +
            (_0x5f26f0 === 0x0 ? _0x260899(0xe6) : _0x260899(0x128))),
          _0x3c85bb[_0x260899(0xe4)](_0x1a43ba);
      });
    const _0x417123 = createNavBtn("‹", _0x5ab14b(0x126)),
      _0x2d8078 = createNavBtn("›", _0x5ab14b(0xff));
    (_0x417123["onclick"] = () =>
      _0x2e967c(
        _0x4255c8 === 0x0 ? _0x157d0a[_0x5ab14b(0x117)] - 0x1 : _0x4255c8 - 0x1
      )),
      (_0x2d8078[_0x5ab14b(0x114)] = () =>
        _0x2e967c((_0x4255c8 + 0x1) % _0x157d0a[_0x5ab14b(0x117)]));
    function _0x2e967c(_0x1b1b5d) {
      const _0x102e63 = _0x5ab14b,
        _0x45f261 = _0x3c85bb[_0x102e63(0xe0)]("img");
      _0x45f261[_0x4255c8]["classList"][_0x102e63(0x100)](_0x102e63(0x128)),
        _0x45f261[_0x1b1b5d][_0x102e63(0x103)][_0x102e63(0x121)](
          _0x102e63(0x128)
        ),
        (_0x4255c8 = _0x1b1b5d);
    }
    let _0xbec8a8 =
      Math[_0x5ab14b(0xf1)](Math[_0x5ab14b(0x132)]() * 0x5dc) + 0xdac;
    setInterval(() => {
      const _0x52d278 = _0x5ab14b;
      _0x2e967c((_0x4255c8 + 0x1) % _0x157d0a[_0x52d278(0x117)]);
    }, _0xbec8a8),
      _0x3c85bb["appendChild"](_0x417123),
      _0x3c85bb["appendChild"](_0x2d8078),
      _0x2bbf2f["appendChild"](_0x3c85bb);
  });
}
initSliders();
function createNavBtn(_0x229633, _0xd0e3a4) {
  const _0x446f0d = _0x4a7abe,
    _0x3ad593 = document[_0x446f0d(0x125)](_0x446f0d(0x102));
  return (
    (_0x3ad593[_0x446f0d(0xf9)] = _0x229633),
    (_0x3ad593[_0x446f0d(0x10c)] = _0x446f0d(0xe8) + _0xd0e3a4),
    _0x3ad593
  );
}
document["addEventListener"](_0x4a7abe(0x120), (_0x554154) => {
  const _0x54ba39 = _0x4a7abe;
  if (
    _0x554154[_0x54ba39(0x12c)]["classList"][_0x54ba39(0x10e)]("expand-btn")
  ) {
    const _0x50c56b = _0x554154[_0x54ba39(0x12c)][_0x54ba39(0x127)](
        _0x54ba39(0x11a)
      ),
      _0x5d125c = JSON[_0x54ba39(0xed)](
        _0x50c56b["dataset"][_0x54ba39(0x118)] || "[]"
      );
    (modalImages = _0x5d125c),
      (currentImageIndex = 0x0),
      (document[_0x54ba39(0x12a)](_0x54ba39(0x105))["textContent"] =
        _0x50c56b["dataset"][_0x54ba39(0xdd)] || ""),
      (document[_0x54ba39(0x12a)](_0x54ba39(0xe1))[_0x54ba39(0xf7)] =
        _0x50c56b[_0x54ba39(0xdf)][_0x54ba39(0xee)] || ""),
      (document[_0x54ba39(0x12a)]("modalTech")[_0x54ba39(0xf7)] =
        _0x54ba39(0x107) + _0x50c56b[_0x54ba39(0xdf)]["tech"] || "");
    const _0x373352 = _0x50c56b[_0x54ba39(0xdf)][_0x54ba39(0xe5)],
      _0x225222 = document[_0x54ba39(0x12a)](_0x54ba39(0x10a)),
      _0x4d6f01 = document[_0x54ba39(0x12a)](_0x54ba39(0xef));
    _0x373352 && _0x373352 !== "#"
      ? ((_0x225222[_0x54ba39(0xfa)] = _0x373352),
        _0x225222[_0x54ba39(0x103)][_0x54ba39(0x121)](_0x54ba39(0x128)),
        _0x4d6f01["classList"][_0x54ba39(0x100)]("hidden"))
      : (_0x225222[_0x54ba39(0x103)]["add"]("hidden"),
        _0x4d6f01["classList"][_0x54ba39(0x121)](_0x54ba39(0x128))),
      document["getElementById"]("projectModal")[_0x54ba39(0x103)][
        _0x54ba39(0x121)
      ]("hidden"),
      updateModalImage(),
      clearInterval(modalInterval),
      (modalInterval = setInterval(() => {
        const _0x3e8cf9 = _0x54ba39;
        (currentImageIndex =
          (currentImageIndex + 0x1) % modalImages[_0x3e8cf9(0x117)]),
          updateModalImage();
      }, Math[_0x54ba39(0xf1)](Math[_0x54ba39(0x132)]() * 0x5dc) + 0xbb8));
  }
  const _0x4bc1ab = document["getElementById"](_0x54ba39(0xf6));
  !_0x4bc1ab[_0x54ba39(0x103)][_0x54ba39(0x10e)](_0x54ba39(0x128)) &&
    _0x554154["target"] === _0x4bc1ab &&
    (_0x4bc1ab[_0x54ba39(0x103)]["add"]("hidden"),
    clearInterval(modalInterval));
});
function updateModalImage() {
  const _0x325677 = _0x4a7abe,
    _0x381172 = document[_0x325677(0x12a)](_0x325677(0xfe));
  _0x381172["src"] = modalImages[currentImageIndex];
}
document[_0x4a7abe(0x12a)](_0x4a7abe(0x11f))[_0x4a7abe(0xdc)](
  _0x4a7abe(0x120),
  () => {
    const _0x505075 = _0x4a7abe;
    (currentImageIndex =
      (currentImageIndex - 0x1 + modalImages["length"]) %
      modalImages[_0x505075(0x117)]),
      updateModalImage();
  }
),
  document[_0x4a7abe(0x12a)]("modalNext")[_0x4a7abe(0xdc)](
    _0x4a7abe(0x120),
    () => {
      (currentImageIndex = (currentImageIndex + 0x1) % modalImages["length"]),
        updateModalImage();
    }
  ),
  document[_0x4a7abe(0x12a)](_0x4a7abe(0x11e))[_0x4a7abe(0xdc)](
    _0x4a7abe(0x120),
    () => {
      const _0x28eb8d = _0x4a7abe;
      document[_0x28eb8d(0x12a)]("projectModal")[_0x28eb8d(0x103)]["add"](
        "hidden"
      ),
        clearInterval(modalInterval);
    }
  );
