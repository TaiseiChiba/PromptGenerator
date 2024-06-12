document.addEventListener("DOMContentLoaded", (event) => {

  // 「作成」ボタン押下時のイベント
  generateEvent();

  // 「プロンプトをコピーしてChatGPTへ画面遷移」ボタン押下時のイベント
  copyEvent();
});

/**
 * 「作成」ボタン押下時のイベント
 */
const generateEvent = function() {
  const btnGenerate = document.querySelector('#btn-generate');
  btnGenerate.addEventListener('click', function() {
    generatePrompt();
  });
}

/**
 * 「プロンプトをコピーしてChatGPTへ画面遷移」ボタン押下時のイベント
 */
const copyEvent = function() {
  const btnCopy = document.querySelector('#btn-copy');
  btnCopy.addEventListener('click', function() {
    copyPromptAndMoveChatGPT();
  });
}

/**
 * プロンプトを作成します。
 */
const generatePrompt = function() {
  // ラジオボタンの値を取得
  const totalStepValue = document.querySelector('#totalStepValue').value;
  const inheritanceValue = document.querySelector('input[name="inheritance"]:checked').value;
  const interfaceValue = document.querySelector('input[name="interface"]:checked').value;
  const arrayListValue = document.querySelector('input[name="arrayList"]:checked').value;
  const arrayValue = document.querySelector('input[name="array"]:checked').value;
  const delegateValue = document.querySelector('input[name="delegate"]:checked').value;
  const standardInputValue = document.querySelector('input[name="standardInput"]:checked').value;

  // プロンプト作成
  const prompt = [
    'Java',
    '＜要件＞',
    '・mainメソッドはStartUp.javaに書きます。',
    '・mianメソッドで行う処理の手順を箇条書きで丁寧に書いてください。',
    '・mianメソッド実行後、コンソールに出力される画面表示例をつけてください。',
    '・クラス名とクラスを構成する属性と操作の一覧を出力してください。',
    '',
    '＜条件＞',
    `・総ステップ数: ${totalStepValue}`,
    `・継承: ${inheritanceValue}`,
    `・インターフェイス: ${interfaceValue}`,
    `・ArrayList: ${arrayListValue}`,
    `・配列: ${arrayValue}`,
    `・操作の委譲: ${delegateValue}`,
    `・標準入力（コンソールからの手動入力）: ${standardInputValue}`,
    '',
    '上記の要件と条件を満たすユニークな問題を作成してください。',
    '問題の作成にはポリモーフィズムを使用してください。',
    '出力内容は、「問題の概要」「mainメソッド処理手順」「画面表示例」「クラスの詳細」の順で出力してください。',
    '「クラスの詳細」では以下3点を出力してください。',
    ' ・クラス名',
    ' ・属性',
    ' ・操作',
    '  ・戻り値',
    '  ・引数',
    '  ・どのような処理をするか',
    '答えとなるコードはまだ出力しないでください。'].join('\n');

  // pre要素にプロンプトを挿入
  const preElement = document.querySelector('#promptArea pre');
  preElement.textContent = prompt;

  // d-noneを解除
  const promptArea = document.querySelector('#promptArea');
  promptArea.classList.remove("d-none");
}

/**
 * プロンプトをコピーしてChatGPTへ画面遷移します。
 */
const copyPromptAndMoveChatGPT = function() {
  const preElement = document.querySelector('#promptArea pre');
  const prompt = preElement.textContent;
  // promptをコピー
  navigator.clipboard.writeText(prompt).then(
    () => {
      // 新しいタブを開き、ページを表示
      window.open('https://chat.openai.com/', '_blank'); 
    },
    () => {
      alert('promptのコピーに失敗しました');
    });
}