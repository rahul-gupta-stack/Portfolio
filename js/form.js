const _0x2e9eb5 = _0xb84e;
function _0xb84e(_0xc306c, _0xd29ad1) {
  const _0x3ea490 = _0x3ea4();
  return (
    (_0xb84e = function (_0xb84e2e, _0x12ca1d) {
      _0xb84e2e = _0xb84e2e - 0xf9;
      let _0xc9055c = _0x3ea490[_0xb84e2e];
      return _0xc9055c;
    }),
    _0xb84e(_0xc306c, _0xd29ad1)
  );
}
(function (_0x437dc2, _0x5875f6) {
  const _0x3b17b1 = _0xb84e,
    _0x114071 = _0x437dc2();
  while (!![]) {
    try {
      const _0x4e6e62 =
        -parseInt(_0x3b17b1(0x117)) / 0x1 +
        -parseInt(_0x3b17b1(0x114)) / 0x2 +
        (-parseInt(_0x3b17b1(0xff)) / 0x3) *
          (-parseInt(_0x3b17b1(0x107)) / 0x4) +
        parseInt(_0x3b17b1(0x102)) / 0x5 +
        -parseInt(_0x3b17b1(0x104)) / 0x6 +
        -parseInt(_0x3b17b1(0x121)) / 0x7 +
        (parseInt(_0x3b17b1(0x10e)) / 0x8) * (parseInt(_0x3b17b1(0xf9)) / 0x9);
      if (_0x4e6e62 === _0x5875f6) break;
      else _0x114071["push"](_0x114071["shift"]());
    } catch (_0x28bfd6) {
      _0x114071["push"](_0x114071["shift"]());
    }
  }
})(_0x3ea4, 0xc7fbc);
function _0x3ea4() {
  const _0xf131b4 = [
    ".cdynamic-placeholder",
    "10495926oaahcE",
    "value",
    "36QumztH",
    "dataset",
    "reset",
    "then",
    "mobile",
    "⚠️\x20Network\x20error",
    "12WwYUfJ",
    "orange",
    "trim",
    "7612520EjrVOB",
    "name",
    "1226418gPeORk",
    "❌\x20Please\x20enter\x20a\x20valid\x20name.",
    "getElementById",
    "804876hHlmYQ",
    "replace",
    "addEventListener",
    "input",
    "white",
    "red",
    "test",
    "4062896yQspIk",
    "contactForm",
    "https://api.web3forms.com/submit",
    "placeholder",
    "message",
    "email",
    "1732936NeLjti",
    "querySelectorAll",
    "catch",
    "969407NDLKhV",
    "json",
    "preventDefault",
    "textContent",
    "color",
    "❌\x20Message\x20makes\x20some\x20sense.",
    "length",
    "❌\x20Enter\x20a\x20valid\x20email.",
    "formStatus",
  ];
  _0x3ea4 = function () {
    return _0xf131b4;
  };
  return _0x3ea4();
}
const contactForm = document[_0x2e9eb5(0x106)](_0x2e9eb5(0x10f)),
  status = document[_0x2e9eb5(0x106)](_0x2e9eb5(0x11f)),
  nameField = document[_0x2e9eb5(0x106)](_0x2e9eb5(0x103)),
  mobileField = document["getElementById"](_0x2e9eb5(0xfd)),
  nameRegex = /^[a-zA-Z\s]{3,50}$/;
nameField[_0x2e9eb5(0x109)](_0x2e9eb5(0x10a), () => {
  const _0x5f0143 = _0x2e9eb5,
    _0x3aff3d = nameField[_0x5f0143(0x122)];
  !nameRegex["test"](_0x3aff3d) &&
    (nameField["value"] = _0x3aff3d[_0x5f0143(0x108)](/[^a-zA-Z\s]/g, ""));
}),
  mobileField["addEventListener"](_0x2e9eb5(0x10a), () => {
    const _0x3ee713 = _0x2e9eb5,
      _0x386e40 = mobileField[_0x3ee713(0x122)];
    (mobileField[_0x3ee713(0x122)] = _0x386e40["replace"](/[^\d+]/g, "")),
      mobileField[_0x3ee713(0x122)]["length"] > 0xf &&
        (mobileField[_0x3ee713(0x122)] = mobileField[_0x3ee713(0x122)]["slice"](
          0x0,
          0xf
        ));
  }),
  contactForm?.[_0x2e9eb5(0x109)]("submit", function (_0x1e8408) {
    const _0x4702e9 = _0x2e9eb5;
    _0x1e8408[_0x4702e9(0x119)]();
    const _0x2f1952 = contactForm["name"]["value"][_0x4702e9(0x101)](),
      _0x2f38ac =
        contactForm[_0x4702e9(0x113)][_0x4702e9(0x122)][_0x4702e9(0x101)](),
      _0x48af99 = contactForm[_0x4702e9(0xfd)][_0x4702e9(0x122)]["trim"](),
      _0x446439 = contactForm[_0x4702e9(0x112)][_0x4702e9(0x122)]["trim"](),
      _0x5c20f4 = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i,
      _0xf552be = /<\/?[^>]+(>|$)/g;
    if (!_0x2f1952 || _0x2f1952["length"] < 0x3)
      return showStatus(_0x4702e9(0x105), _0x4702e9(0x10c));
    if (!_0x5c20f4[_0x4702e9(0x10d)](_0x2f38ac))
      return showStatus(_0x4702e9(0x11e), _0x4702e9(0x10c));
    if (_0x48af99[_0x4702e9(0x11d)] < 0x5)
      return showStatus(
        "❌\x20Enter\x20a\x20valid\x20mobile\x20number.",
        _0x4702e9(0x10c)
      );
    if (!_0x446439 || _0x446439[_0x4702e9(0x11d)] < 0x5)
      return showStatus(_0x4702e9(0x11c), _0x4702e9(0x10c));
    const _0x28e57e = new FormData(contactForm);
    fetch(_0x4702e9(0x110), { method: "POST", body: _0x28e57e })
      [_0x4702e9(0xfc)]((_0x3b5104) => _0x3b5104[_0x4702e9(0x118)]())
      [_0x4702e9(0xfc)]((_0x5e1d9c) => {
        const _0x136139 = _0x4702e9;
        _0x5e1d9c["success"]
          ? (showStatus(
              "🎉\x20Message\x20sent!\x20Rahul\x20will\x20contact\x20you\x20soon.",
              _0x136139(0x10b)
            ),
            contactForm[_0x136139(0xfb)](),
            setTimeout(() => (status[_0x136139(0x11a)] = ""), 0xfa0))
          : showStatus("❌\x20Submission\x20failed.", _0x136139(0x10c));
      })
      [_0x4702e9(0x116)](() => showStatus(_0x4702e9(0xfe), _0x4702e9(0x100)));
  });
function showStatus(_0x4f7e59, _0x391734) {
  const _0x8e490e = _0x2e9eb5;
  (status[_0x8e490e(0x11a)] = _0x4f7e59),
    (status["style"][_0x8e490e(0x11b)] = _0x391734);
}
document[_0x2e9eb5(0x115)](_0x2e9eb5(0x120))["forEach"]((_0x186c64) => {
  const _0x2e1802 = _0x2e9eb5,
    _0x4977e2 = JSON["parse"](
      _0x186c64[_0x2e1802(0xfa)][_0x2e1802(0x111)] || "[]"
    );
  let _0x5720c9 = 0x0;
  setInterval(() => {
    const _0x36573c = _0x2e1802;
    !_0x186c64[_0x36573c(0x122)] &&
      ((_0x186c64[_0x36573c(0x111)] =
        _0x4977e2[_0x5720c9 % _0x4977e2[_0x36573c(0x11d)]]),
      _0x5720c9++);
  }, 0x1388);
});
