// キャラクターカードの要素を取得
const characterCards = document.querySelectorAll('.character-card');

// 各キャラクターカードにクリックイベントリスナーを追加
characterCards.forEach((card) => {
  card.addEventListener('click', toggleCard);
});

// カードをトグルする関数
function toggleCard() {
  // クリックされたカードの詳細コンテンツ要素を取得
  const details = this.querySelector('.character-details');
  
  // 詳細コンテンツ要素が表示されているかどうかを判定
  const isExpanded = details.style.display === 'block';
  
  // 詳細コンテンツの表示状態をトグルする
  if (isExpanded) {
    details.style.display = 'none';
  } else {
    details.style.display = 'block';
  }
}