 var quotation={
  '"':{
      value:'"',
      bool:true
  },
  '`':{
      value:'`',
      bool:true
  },
  "'":{
      value:"'",
      bool:true
  },
  '(':{
      value:')',
      bool:true
  },
  '{':{
      value:'}',
      bool:true
  },
  '<':{
      value:'>',
      bool:true
  },
  '[':{
      value:']',
      bool:true
  }
};
if (localStorage.getItem('quotation')) {
  quotation = JSON.parse(localStorage.getItem('quotation'));
}else{
  console.log("none")
}

document.addEventListener('keydown', function(event) {
  console.log("test")
  console.log(quotation)

    if (event.key in quotation && quotation[event.key].bool) {
        //イベントに対するデフォルトの動作を止めることができる
        //今回だと、"が入力される（表示される）ということ
        event.preventDefault();
        //""を入力する。現在推奨されてない
        document.execCommand('insertText', false,event.key+quotation[event.key].value);
        //現在選択されているものを取得。
        //選択範囲の拡大とか、カーソルの移動とかできる。
        const selection = window.getSelection();
        //'move'でカーソルの移動
        //""を入力したらカーソルは一番右にあって、一文字後ろの真ん中に持っていきたいので、'backward'
        //一文字分の移動なので、'character'
        selection.modify('move', 'backward', 'character');
}
});

// document.addEventListener('keydown', function (event) {
//   navigator.serviceWorker.controller.postMessage({
//     type: 'KEYDOWN',
//     key: event.key
//   });
// });