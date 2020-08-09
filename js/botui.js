var BOTUI = BOTUI ||  {};
BOTUI.botui = new BotUI("bot_app");
var msgIndex, key;
BOTUI.botui.message.add({
  delay: 500,
  photo: 'bot_icon_1.png',
  content: 'ストレス発散ツール 詳細はこちら→ https://github.com/nukkonuko221/stressrelief'
}).then(function () {
  BOTUI.botui.message.add({
    delay: 500,
    photo: 'bot_icon_1.png',
    content: '※書き込んだ情報は保存されません(予測変換は端末上に残ります)'
  });
});
listen();

function listen() {
  BOTUI.botui.action.text({
    delay: 500,
    action: {
    }
  }).then(function (res) {
    console.log(res.value);

    if (res.value == "hello") {
      hello();
    } else if (res.value == "hello!") {
      hello();
    } else if (res.value == "Hello!") {
      hello();
    } else if (res.value == "Hello") {
      hello();
    } else if (res.value == "こんにちは") {
      konnitiha();
    } else if (res.value == "こんにちは!") {
      konnitiha();
    } else if (res.value == "こんばんは") {
      konbanwa();
    } else if (res.value == "こんばんは!") {
      konbanwa();
    } else if (res.value == "おはよう") {
      ohayou();
    } else if (res.value == "おはよう!") {
      ohayou();
    } else if (res.value == "おはようございます") {
      ohayougo();
    } else if (res.value == "おはようございます!") {
      ohayougo();
    }


    else {
      notknow();
    }

  });
}

function ohayougo() {
    BOTUI.botui.message.add({
    delay: 1000,
    type: 'html',
    photo: 'bot_icon_1.png',
    content: 'おはよう!'
  }).then(function() {
  listen();
});
}

function ohayou() {
    BOTUI.botui.message.add({
    delay: 1000,
    type: 'html',
    photo: 'bot_icon_1.png',
    content: 'おはよう!'
  }).then(function() {
  listen();
});
}

function konbanwa() {
    BOTUI.botui.message.add({
    delay: 1000,
    type: 'html',
    photo: 'bot_icon_1.png',
    content: 'こんばんは!'
  }).then(function() {
  listen();
});
}

function konnitiha() {
    BOTUI.botui.message.add({
    delay: 1000,
    type: 'html',
    photo: 'bot_icon_1.png',
    content: 'こんにちは!'
  }).then(function() {
  listen();
});
}

function hello() {
    BOTUI.botui.message.add({
    delay: 1000,
    type: 'html',
    photo: 'bot_icon_1.png',
    content: 'hello!'
  }).then(function() {
  listen();
});
}

function notknow() {
  listen();
}
