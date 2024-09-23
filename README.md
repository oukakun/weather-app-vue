# 天気アプリ

これはNuxt3に基づいた天気情報を検索するアプリケーションで、ユーザーは位置を入力して現在の天気情報を検索できます。

[中文](README_ZH.md) | [English](README_EN.md)

## 機能

- **位置入力**：ユーザーは位置を入力して天気を検索できます。
- **天気表示**：現在の天気アイコン、温度、説明を表示します。
- **湿度と風速**：現在の湿度と風速を表示します。
- **エラーハンドリング**：入力された位置が見つからない場合、エラーメッセージを表示します。

## 技術スタック

- **Nuxt3**：Vue.jsアプリケーションを構築するためのフレームワーク。
- **Vue 3**：ユーザーインターフェースを構築するためのJavaScriptフレームワーク。
- **Axios**：HTTPリクエストを行うためのライブラリ。
- **OpenWeatherMap API**：天気データを取得するためのAPI。

## インストール

1. リポジトリをクローン

    ```bash
    git clone https://github.com/yourusername/weather-app.git
    ```

2. プロジェクトディレクトリに移動

    ```bash
    cd weather-app
    ```

3. 依存関係をインストール

    ```bash
    npm install
    ```

## 使用方法

1. 開発サーバーを起動

    ```bash
    npm run dev
    ```

2. ブラウザを開いて `http://localhost:3000` にアクセス

## 設定

`pages/index.vue` ファイルで、以下のコードを見つけて、あなたの OpenWeatherMap API キーに置き換えてください：

```javascript
const weatherResponse = await axios.get(
  "https://api.openweathermap.org/data/2.5/weather",
  {
    params: {
      q: location.value,
      appid: "あなたのAPIキー",
      units: "metric",
    },
  }
);
```

## ディレクトリ構造

```plaintext
weather-app/
├── assets/
├── components/
├── layouts/
├── pages/
│   └── index.vue
├── plugins/
├── static/
├── store/
├── README.md
└── nuxt.config.js
```

## 貢献

問題やプルリクエストを自由に提出してください。

## ライセンス

[MIT](LICENSE)