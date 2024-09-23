# Weather App

This is a weather query application based on Nuxt3, where users can input a location to query the current weather information.

[中文](README_ZH.md) | [日本語](README.md)

## Features

- **Location Input**: Users can input a location to query the weather.
- **Weather Display**: Displays the current weather icon, temperature, and description.
- **Humidity and Wind Speed**: Displays the current humidity and wind speed.
- **Error Handling**: Displays an error message when the input location cannot be found.

## Tech Stack

- **Nuxt3**: A framework for building Vue.js applications.
- **Vue 3**: A JavaScript framework for building user interfaces.
- **Axios**: A library for making HTTP requests.
- **OpenWeatherMap API**: An API for fetching weather data.

## Installation

1. Clone the repository

    ```bash
    git clone https://github.com/yourusername/weather-app.git
    ```

2. Enter the project directory

    ```bash
    cd weather-app
    ```

3. Install dependencies

    ```bash
    npm install
    ```

## Usage

1. Start the development server

    ```bash
    npm run dev
    ```

2. Open your browser and visit `http://localhost:3000`

## Configuration

In the `pages/index.vue` file, find the following code and replace it with your OpenWeatherMap API key:

```javascript
const weatherResponse = await axios.get(
  "https://api.openweathermap.org/data/2.5/weather",
  {
    params: {
      q: location.value,
      appid: "your API key",
      units: "metric",
    },
  }
);
```

## Directory Structure

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

## Contributing

Feel free to submit issues and pull requests.

## License

[MIT](LICENSE)