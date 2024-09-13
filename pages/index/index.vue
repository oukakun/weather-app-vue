<template>
  <div :class="['app', getWeatherBackground]">
    <h1>天气应用</h1>
    <div v-if="weather">
      <h2>Tokyo的天气</h2>
      <p>温度：{{ getTemperature }}</p>
      <p>天气：{{ weather.weather[0].description }}
        <UIcon name="i-wi:day-cloudy" class="w-10 h-10 text-primary-500 align-middle" />
      </p>
      <UButton @click="toggleTemperature">切换到{{ isCelsius ? "华氏" : "摄氏" }}</UButton>
    </div>
    <p v-else>加载中...</p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";

const weather = ref(null);
const isCelsius = ref(true);

const fetchWeather = async () => {
  try {
    const weatherResponse = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          q: "Tokyo", // 这里可以改为其他城市或使用地理位置API获取当前位置
          appid: "bcc97c2c841fb3676139a2528d576f0e", // 请替换为您的OpenWeatherMap API密钥
          units: "metric",
        },
      }
    );
    weather.value = weatherResponse.data;
  } catch (error) {
    console.error("获取天气数据失败", error);
  }
};
onMounted(fetchWeather);

const toggleTemperature = () => {
  isCelsius.value = !isCelsius.value;
};

const getTemperature = computed(() => {
  if (!weather.value) return "";
  const temp = isCelsius.value
    ? weather.value.main.temp
    : (weather.value.main.temp * 9) / 5 + 32;
  return `${temp.toFixed(1)}°${isCelsius.value ? "C" : "F"}`;
});

const getWeatherBackground = computed(() => {
  if (!weather.value) return "";
  const code = weather.value.weather[0].id;
  if (code >= 200 && code < 300) return "thunderstorm";
  if (code >= 300 && code < 500) return "drizzle";
  if (code >= 500 && code < 600) return "rain";
  if (code >= 600 && code < 700) return "snow";
  if (code >= 700 && code < 800) return "atmosphere";
  if (code === 800) return "clear";
  return "clouds";
});
</script>

<style scoped>
.app {
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  background-size: cover;
  background-position: center;
  transition: background-image 0.5s ease-in-out;
}

.thunderstorm {
  background-image: url("https://source.unsplash.com/1600x900/?thunderstorm");
}

.drizzle {
  background-image: url("https://source.unsplash.com/1600x900/?drizzle");
}

.rain {
  background-image: url("https://source.unsplash.com/1600x900/?rain");
}

.snow {
  background-image: url("https://source.unsplash.com/1600x900/?snow");
}

.atmosphere {
  background-image: url("https://source.unsplash.com/1600x900/?fog");
}

.clear {
  background-image: url("https://source.unsplash.com/1600x900/?sunny");
}

.clouds {
  background-image: url("https://source.unsplash.com/1600x900/?cloudy");
}

button {
  font-size: 1rem;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
}
</style>
