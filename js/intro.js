function _0x1211() {
  const _0xa97100 = [
    "remove",
    "active",
    "Stay",
    "hidden",
    "370125Egzehx",
    "home",
    "activeSection",
    "441993NEQtRX",
    "34520Fplext",
    "left-1/2",
    "246pfFavM",
    "8IrJfxS",
    "true",
    "visited",
    "contains",
    "7654900HhipWx",
    "3EOIyuT",
    "#revealSection\x20>\x20header\x20>\x20div\x20>\x20button",
    "7855841tFRfty",
    "3117960SmaLVr",
    "setItem",
    "textContent",
    "countdown",
    "click",
    "getElementById",
    "526246KVHGBC",
    "welcomeBanner",
    "disabled",
    "right-full",
    "stayBtn",
    "querySelector",
    "add",
    "classList",
  ];
  _0x1211 = function () {
    return _0xa97100;
  };
  return _0x1211();
}
const _0x576802 = _0x24bf;
(function (_0x458d21, _0x5b0f2c) {
  const _0x13bffd = _0x24bf,
    _0x531cba = _0x458d21();
  while (!![]) {
    try {
      const _0x5524f4 =
        parseInt(_0x13bffd(0x1d2)) / 0x1 +
        -parseInt(_0x13bffd(0x1e4)) / 0x2 +
        (-parseInt(_0x13bffd(0x1db)) / 0x3) *
          (parseInt(_0x13bffd(0x1de)) / 0x4) +
        (-parseInt(_0x13bffd(0x1d3)) / 0x5) *
          (parseInt(_0x13bffd(0x1d5)) / 0x6) +
        (parseInt(_0x13bffd(0x1dd)) / 0x7) *
          (parseInt(_0x13bffd(0x1d6)) / 0x8) +
        -parseInt(_0x13bffd(0x1cf)) / 0x9 +
        parseInt(_0x13bffd(0x1da)) / 0xa;
      if (_0x5524f4 === _0x5b0f2c) break;
      else _0x531cba["push"](_0x531cba["shift"]());
    } catch (_0x452c05) {
      _0x531cba["push"](_0x531cba["shift"]());
    }
  }
})(_0x1211, 0xeb180);
import { showSection } from "./core.js";
const welcomeBanner = document[_0x576802(0x1e3)](_0x576802(0x1e5)),
  countdownEl = document["getElementById"](_0x576802(0x1e1)),
  stayBtn = document[_0x576802(0x1e3)](_0x576802(0x1c7)),
  revealBtn = document[_0x576802(0x1e3)]("revealBtn"),
  footer = document[_0x576802(0x1c8)]("footer");
function _0x24bf(_0x1fc594, _0x208f84) {
  const _0x121119 = _0x1211();
  return (
    (_0x24bf = function (_0x24bf7a, _0x116b90) {
      _0x24bf7a = _0x24bf7a - 0x1c6;
      let _0x14d88b = _0x121119[_0x24bf7a];
      return _0x14d88b;
    }),
    _0x24bf(_0x1fc594, _0x208f84)
  );
}
let countdownSeconds = 0xa,
  countdownInterval,
  redirectTimeout;
setTimeout(() => {
  const _0x54c64b = _0x576802;
  welcomeBanner?.[_0x54c64b(0x1ca)][_0x54c64b(0x1cb)](_0x54c64b(0x1c6)),
    welcomeBanner?.[_0x54c64b(0x1ca)]["add"](_0x54c64b(0x1d4));
}, 0x12c);
function startCountdown() {
  (countdownEl["textContent"] = countdownSeconds),
    (countdownInterval = setInterval(() => {
      const _0x570d43 = _0x24bf;
      countdownSeconds--,
        (countdownEl[_0x570d43(0x1e0)] = countdownSeconds),
        countdownSeconds <= 0x0 && clearInterval(countdownInterval);
    }, 0x3e8)),
    (redirectTimeout = setTimeout(() => {
      const _0x359e59 = _0x24bf;
      !intro[_0x359e59(0x1ca)][_0x359e59(0x1d9)](_0x359e59(0x1ce)) &&
        (revealBtn["click"](),
        footer[_0x359e59(0x1ca)][_0x359e59(0x1cb)](_0x359e59(0x1ce)));
    }, countdownSeconds * 0x3e8));
}
startCountdown(),
  stayBtn?.["addEventListener"](_0x576802(0x1e2), () => {
    const _0x283e2a = _0x576802;
    clearInterval(countdownInterval),
      clearTimeout(redirectTimeout),
      (countdownSeconds += 0xa),
      (stayBtn[_0x283e2a(0x1e0)] = "⏳"),
      (stayBtn[_0x283e2a(0x1e6)] = !![]),
      setTimeout(() => {
        const _0x1daccc = _0x283e2a;
        (stayBtn[_0x1daccc(0x1e0)] = _0x1daccc(0x1cd)),
          (stayBtn[_0x1daccc(0x1e6)] = ![]);
      }, 0x2710),
      startCountdown();
  }),
  revealBtn?.["addEventListener"]("click", () => {
    const _0x34c234 = _0x576802;
    localStorage[_0x34c234(0x1df)](_0x34c234(0x1d8), _0x34c234(0x1d7)),
      localStorage["setItem"](_0x34c234(0x1d1), _0x34c234(0x1d0)),
      intro[_0x34c234(0x1ca)]["add"](_0x34c234(0x1ce)),
      revealSection[_0x34c234(0x1ca)][_0x34c234(0x1cb)](_0x34c234(0x1ce)),
      footer[_0x34c234(0x1ca)][_0x34c234(0x1cb)](_0x34c234(0x1ce)),
      showSection(null, _0x34c234(0x1d0)),
      document["querySelector"](_0x34c234(0x1dc))["classList"][
        _0x34c234(0x1c9)
      ](_0x34c234(0x1cc));
  });
