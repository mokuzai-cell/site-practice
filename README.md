# BoothCard
公式サイトのうち、展示の内容を示したカードのコンポーネント

## 内容
- boothCard.astro  
カード本体
    - props  
    entry：title,group,place,describe,tags
    image：imageModule
- boothCardContainer.astro  
    画面幅を基準にboothCardを配置するもの
    boothData.jsonからデータをとってboothCardの生成
- icon astro  
    fontAwesomeをコンポーネント化したもの