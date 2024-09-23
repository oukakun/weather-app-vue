<template>
  <div class="container" :class="{ error: isError }">
    <div class="search-box">
      <UIcon name="i-fa-solid:map-marker-alt" class="location-icon" />
      <input class="search-input" type="text" placeholder="enter your location" v-model="location">
      <button class="bx bx-search search-btn" @click="fetchWeather">
        <UIcon name="i-fa-solid:search" class="search-icon" />
      </button>
    </div>
    <div class="weather-box" :class="{ active: !isError }">
      <div class="box">
        <div class="info-weather">
          <div class="weather">
            <img :src="getWeatherImage">
            <p class="temperature">{{ getTemperature }}<span>°C</span></p>
            <p class="description">{{ getDescription }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="weather-details" :class="{ active: !isError }">
      <div class="humidity">
        <i class='bx bx-water'></i>
        <UIcon name="i-wi:humidity" class="details-icon" />
        <div class="text">
          <div class="info-humidity">
            <span>{{ getHumidity }}%</span>
          </div>
          <p>{{ $t('humidity') }}</p>
        </div>
      </div>

      <div class="wind">
        <UIcon name="i-wi:strong-wind" class="details-icon" />
        <div class="text">
          <div class="info-wind">
            <span>{{ getWindSpeed }}Km/h</span>
          </div>
          <p>{{ $t('windSpeed') }}</p>
        </div>
      </div>

    </div>

    <div class="not-found" :class="{ active: isError }">
      <div class="box">
        <img src="/assest/images/404.avif" alt="">
        <p>Location not found!</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";

const weather = ref(null); // API response
const location = ref("fukuoka"); // 位置
const isError = ref(false); 

// API OpenWeatherMapから天気情報を取得
const fetchWeather = async () => {
  try {
    const weatherResponse = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          q: location.value,
          appid: "bcc97c2c841fb3676139a2528d576f0e",
          units: "metric",
        },
      }
    );
    weather.value = weatherResponse.data;
    isError.value = false;
  } catch (error) {
    console.error("データ取得失敗", error);
    isError.value = true;
  }
};
onMounted(fetchWeather);

// 天気画像を取得
const getWeatherImage = computed(() => {
  if (!weather.value) return "";
  let imageSrc = "";
  switch (weather.value.weather[0].main) {
    case "Clear":
      imageSrc = "../assest/images/clear.png";
      break;
    case "Rain":
      imageSrc = "../assest/images/rain.png";
      break;
    case "Snow":
      imageSrc = "../assest/images/snow.png";
      break;
    case "Clouds":
      imageSrc = "../assest/images/cloud.png";
      break;
    case "Mist":
      imageSrc = "../assest/images/mist.png";
      break;
    default:
      imageSrc = "../assest/images/404.avif";
      break;
  }
  // return imageSrc; // 直接returnは画像が表示されない
  return new URL(imageSrc, import.meta.url);
});

// 天気名を取得
const getDescription = computed(() => {
  if (!weather.value) return "";

  const description = weather.value.weather[0].description;

  return description;

});

// 気温を取得
const getTemperature = computed(() => {
  if (!weather.value) return 0;

  const temperature = parseInt(weather.value.main.temp);
  return temperature;
});

// 湿度を取得
const getHumidity = computed(() => {
  if (!weather.value) return 0;

  const humidity = parseInt(weather.value.main.humidity);
  return humidity;

});

// 風速を取得
const getWindSpeed = computed(() => {
  if (!weather.value) return 0;

  const windSpeed = parseInt(weather.value.wind.speed);
  return windSpeed;
});

</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  position: relative;
  width: 400px;
  height: 555px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(30px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  color: #fff;
  transition: height 0.6s ease;
}

.container.error{
  height: 400px;
}

.search-box {
  position: relative;
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
}

.search-box .location-icon {
  position: absolute;
  left: 10px;
  font-size: 24px;
}

.search-box input {
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  outline: none;
  border-radius: 5px;
  font-size: 22px;
  color: #fff;
  font-weight: 500;
  text-transform: uppercase;
  padding: 0 48px 0 42px;
}

.search-box input::placeholder {
  color: #fff;
  text-transform: capitalize;
}

.search-box button {
  position: absolute;
  right: 0;
  width: 40px;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-size: 28px;
  color: #fff;
  cursor: pointer;
  padding: 0 40px 0 5px;
  text-align: center;

}

.search-box .search-icon {
  font-size: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.weather-box {
  text-align: center;
  margin: 40px 0;
}

.weather-box,
.weather-details {
  visibility: hidden;
}

.weather-box .box,
.not-found .box {
  transform: translateY(-100%);
}

.weather-box.active .box,
.not-found.active .box {
  transform: translateY(0%);
  transition: transform 1s ease;
  transition-delay: 0.6s;
}

.weather-box img {
  width: 60%;
  margin: 0 auto;
}

.weather-box .temperature {
  position: relative;
  font-size: 64px;
  line-height: 1.5;
  font-weight: 700;
}

.weather-box .temperature span {
  position: absolute;
  font-size: 24px;
  top: 5px;
}

.weather-details {
  position: absolute;
  /* bottom: 40px; */
  left: 0;
  width: 100%;
  padding: 0 20px;
  display: flex;
}

.weather-details .humidity,
.weather-details .wind {
  display: flex;
  align-items: center;
  width: 50%;
  transform: translateY(-100%);
}

.weather-details.active .humidity,
.weather-details.active .wind {
  transition: transform 1s ease;
  transition-delay: 1.2s;
  transform: translateY(0%);
}

.weather-details .humidity {
  justify-content: flex-start;
}

.weather-details .wind {
  justify-content: flex-end;
}

.weather-details .details-icon {
  font-size: 50px;
}



.weather-details span {
  display: inline-block;
  font-size: 22px;
  font-weight: 500;
}

.weather-details p {
  font-size: 14px;
  font-weight: 500;
}

.not-found {
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  margin-top: 110px;
}

.not-found .box {
  text-align: center;
}

.not-found img {
  width: 50%;
  margin: 0 auto;
}

.not-found p {
  font-size: 22px;
  font-weight: 500;
  margin-top: 10px;
}

.not-found.active,
.weather-details.active,
.weather-box.active {
  visibility: visible;
}

.not-found,
.weather-details,
.weather-box {
  overflow: hidden;
}

.slide-bottom {
  -webkit-animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2024-9-20 12:31:0
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-bottom
 * ----------------------------------------
 */
@-webkit-keyframes slide-bottom {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    -webkit-transform: translateY(100px);
    transform: translateY(100px);
  }
}

@keyframes slide-bottom {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    -webkit-transform: translateY(100px);
    transform: translateY(100px);
  }
}
</style>
