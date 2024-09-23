# Weather App

这是一个基于Nuxt3的天气查询应用，用户可以输入位置来查询当前的天气信息。

[English](README_EN.md) | [日本語](README_JP.md)

## 功能

- **位置输入**：用户可以输入位置来查询天气。
- **天气显示**：显示当前天气的图标、温度、描述。
- **湿度和风速**：显示当前湿度和风速。
- **错误处理**：当输入的位置无法找到时，显示错误信息。

## 技术栈

- **Nuxt3**：用于构建Vue.js应用的框架。
- **Vue 3**：用于构建用户界面的JavaScript框架。
- **Axios**：用于进行HTTP请求的库。
- **OpenWeatherMap API**：用于获取天气数据的API。

## 安装

1. 克隆仓库

    ```bash
    git clone https://github.com/yourusername/weather-app.git
    ```

2. 进入项目目录

    ```bash
    cd weather-app
    ```

3. 安装依赖

    ```bash
    npm install
    ```

## 使用

1. 启动开发服务器

    ```bash
    npm run dev
    ```

2. 打开浏览器并访问 `http://localhost:3000`

## 配置

在 `pages/index.vue` 文件中，找到以下代码并替换为你的 OpenWeatherMap API 密钥：

```javascript
const weatherResponse = await axios.get(
  "https://api.openweathermap.org/data/2.5/weather",
  {
    params: {
      q: location.value,
      appid: "你的API密钥",
      units: "metric",
    },
  }
);
```

## 目录结构

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

## 贡献

欢迎提交问题和拉取请求。

## 许可证

[MIT](LICENSE)
---