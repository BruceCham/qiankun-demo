const render = () => {
  function yourRegisterRequest(url, params) {
    var callbackName = ("jsonp_" + Math.random()).replace(".", "");
    params += "&callback=" + callbackName;
    var o_scripts = document.getElementsByTagName("script")[0];
    var o_s = document.createElement("script");
    o_scripts.parentNode.insertBefore(o_s, o_scripts);
    window[callbackName] = function (json) {
      if (json.result.code == 400) {
        //唤醒滑动验证
        getNC().then(function () {
          _nvc_nc.upLang("cn", {
            _startTEXT: "请按住滑块，拖动到最右边",
            _yesTEXT: "验证通过",
            _error300:
              '哎呀，出错了，点击<a href="javascript:__nc.reset()">刷新</a>再来一次',
            _errorNetwork:
              '网络不给力，请<a href="javascript:__nc.reset()">点击刷新</a>',
          });
          _nvc_nc.reset();
        });
      } else if (json.result.code == 600) {
        //唤醒刮刮卡
        getSC().then(function () {});
      } else if (json.result.code == 700) {
        //唤醒问答验证码。由于问答验证码组件升级中，服务端暂时不会返回code为700的结果。您可以保留该部分的接入代码。
        getLC();
      } else if (json.result.code == 100 || json.result.code == 200) {
        //注册成功
        nvcReset();
        alert("register success!");
      } else if (json.result.code == 800 || json.result.code == 900) {
        //直接拦截
        nvcReset();
        alert("register failed!");
      }
    };
    o_s.src = url + "?" + params;
  }
  document.getElementById("register").onclick = function () {
    var params = "a=" + getNVCVal();
    yourRegisterRequest("http://cf.aliyun.com/nvc/nvcAnalyze.jsonp", params);
  };
  return Promise.resolve();
};

((global) => {
  if (!window.__POWERED_BY_QIANKUN__) {
    render();
  }
  global["purehtml"] = {
    bootstrap: () => {
      console.log("purehtml bootstrap");
      return Promise.resolve();
    },
    mount: () => {
      console.log("purehtml mount");
      return render();
    },
    unmount: () => {
      console.log("purehtml unmount");
      return Promise.resolve();
    },
  };
})(window);
