const search = document.querySelector(".search-bar");
const title = document.querySelector(".title");
const temperature = document.querySelector(".temperatures");
const humidity = document.querySelector('.humidity');
const cities = [
    { name: "Warszawa", latitude: 52.2297, longitude: 21.0122 },
    { name: "Kraków", latitude: 50.0647, longitude: 19.9450 },
    { name: "Łódź", latitude: 51.7592, longitude: 19.4560 },
    { name: "Wrocław", latitude: 51.1079, longitude: 17.0385 },
    { name: "Poznań", latitude: 52.4064, longitude: 16.9252 },
    { name: "Gdańsk", latitude: 54.3520, longitude: 18.6466 },
    { name: "Szczecin", latitude: 53.4289, longitude: 14.5530 },
    { name: "Bydgoszcz", latitude: 53.1235, longitude: 18.0084 },
    { name: "Lublin", latitude: 51.2465, longitude: 22.5684 },
    { name: "Katowice", latitude: 50.2649, longitude: 19.0238 },
    { name: "Białystok", latitude: 53.1325, longitude: 23.1688 },
    { name: "Gdynia", latitude: 54.5186, longitude: 18.5302 },
    { name: "Częstochowa", latitude: 50.8113, longitude: 19.1245 },
    { name: "Radom", latitude: 51.4025, longitude: 21.1473 },
    { name: "Sosnowiec", latitude: 50.2863, longitude: 19.1041 },
    { name: "Toruń", latitude: 53.0138, longitude: 18.5984 },
    { name: "Kielce", latitude: 50.8661, longitude: 20.6267 },
    { name: "Gliwice", latitude: 50.2945, longitude: 18.6712 },
    { name: "Zabrze", latitude: 50.3200, longitude: 18.7866 },
    { name: "Olsztyn", latitude: 53.7760, longitude: 20.4803 },
    { name: "Rzeszów", latitude: 50.0413, longitude: 22.0046 },
    { name: "Ruda Śląska", latitude: 50.2960, longitude: 18.8917 },
    { name: "Bielsko-Biała", latitude: 49.8222, longitude: 19.0444 },
    { name: "Bytom", latitude: 50.3475, longitude: 18.9231 },
    { name: "Zielona Góra", latitude: 51.9353, longitude: 15.5060 },
    { name: "Opole", latitude: 50.6751, longitude: 17.9284 },
    { name: "Tychy", latitude: 50.1300, longitude: 19.0273 },
    { name: "Gorzów Wielkopolski", latitude: 52.7360, longitude: 15.2282 },
    { name: "Dąbrowa Górnicza", latitude: 50.3167, longitude: 19.1491 },
    { name: "Elbląg", latitude: 54.1522, longitude: 19.4083 },
    { name: "Płock", latitude: 52.5466, longitude: 19.7065 },
    { name: "Wałbrzych", latitude: 50.7740, longitude: 16.6747 },
    { name: "Włocławek", latitude: 52.6465, longitude: 19.0676 },
    { name: "Tarnów", latitude: 50.0113, longitude: 20.0087 },
    { name: "Chorzów", latitude: 50.3007, longitude: 19.0309 },
    { name: "Koszalin", latitude: 54.1944, longitude: 16.1750 },
    { name: "Kalisz", latitude: 51.7519, longitude: 18.0929 },
    { name: "Legnica", latitude: 51.2077, longitude: 16.1559 },
    { name: "Grudziądz", latitude: 53.4804, longitude: 18.7460 },
    { name: "Słupsk", latitude: 54.4646, longitude: 17.0297 },
    { name: "Jaworzno", latitude: 50.2500, longitude: 19.2497 },
    { name: "Jastrzębie-Zdrój", latitude: 49.9578, longitude: 18.6025 },
    { name: "Nowy Sącz", latitude: 49.6240, longitude: 20.6989 },
    { name: "Jelenia Góra", latitude: 50.8978, longitude: 15.7802 },
    { name: "Konin", latitude: 52.2265, longitude: 18.2384 },
    { name: "Piotrków Trybunalski", latitude: 51.4055, longitude: 19.6879 },
    { name: "Inowrocław", latitude: 52.7955, longitude: 18.2520 },
    { name: "Lubin", latitude: 51.4066, longitude: 16.1939 },
    { name: "Gniezno", latitude: 52.5222, longitude: 17.5880 },
    { name: "Mysłowice", latitude: 50.2833, longitude: 19.1750 },
    { name: "Ostrowiec Świętokrzyski", latitude: 50.9465, longitude: 21.4122 },
    { name: "Suwałki", latitude: 54.0927, longitude: 22.9352 },
    { name: "Tarnowskie Góry", latitude: 50.4549, longitude: 18.8627 },
    { name: "Stargard", latitude: 53.3321, longitude: 15.0335 },
    { name: "Pabianice", latitude: 51.6531, longitude: 19.3581 },
    { name: "Racibórz", latitude: 50.0820, longitude: 18.2697 },
    { name: "Wejherowo", latitude: 54.5912, longitude: 17.0295 },
    { name: "Świdnica", latitude: 50.8339, longitude: 16.4719 },
    { name: "Zamość", latitude: 50.7163, longitude: 23.2493 },
    { name: "Siemianowice Śląskie", latitude: 50.3211, longitude: 19.0172 },
    { name: "Tomaszów Mazowiecki", latitude: 51.5321, longitude: 19.9915 },
    { name: "Pruszków", latitude: 52.1878, longitude: 20.7923 },
    { name: "Ełk", latitude: 53.7850, longitude: 22.3650 },
    { name: "Łomża", latitude: 53.1804, longitude: 22.0674 },
    { name: "Kutno", latitude: 52.2250, longitude: 19.3556 },
    { name: "Leszno", latitude: 51.8447, longitude: 16.5511 },
    { name: "Ostrów Wielkopolski", latitude: 51.6731, longitude: 17.7679 },
    { name: "Piła", latitude: 53.1303, longitude: 16.7406 },
    { name: "Tczew", latitude: 53.0028, longitude: 18.6886 },
    { name: "Bełchatów", latitude: 51.3721, longitude: 19.3795 },
    { name: "Żory", latitude: 50.0724, longitude: 18.6781 },
    { name: "Świętochłowice", latitude: 50.2860, longitude: 18.9172 },
    { name: "Będzin", latitude: 50.3253, longitude: 19.2095 },
    { name: "Zgierz", latitude: 51.7491, longitude: 19.4797 },
    { name: "Biała Podlaska", latitude: 52.0340, longitude: 23.1372 },
    { name: "Chełm", latitude: 51.1439, longitude: 23.4680 },
    { name: "Stalowa Wola", latitude: 50.5722, longitude: 22.0417 },
    { name: "Skierniewice", latitude: 51.9597, longitude: 20.1461 },
    { name: "Knurów", latitude: 50.2133, longitude: 18.6708 },
    { name: "Legionowo", latitude: 52.4174, longitude: 20.9359 },
    { name: "Starachowice", latitude: 51.0460, longitude: 21.0025 },
    { name: "Kołobrzeg", latitude: 54.1797, longitude: 15.5819 },
    { name: "Kędzierzyn-Koźle", latitude: 50.3505, longitude: 18.2209 },
    { name: "Nowa Sól", latitude: 51.8032, longitude: 15.6866 },
    { name: "Żary", latitude: 51.6162, longitude: 15.0855 },
    { name: "Otwock", latitude: 52.0672, longitude: 21.2680 },
    { name: "Ostrołęka", latitude: 53.0777, longitude: 21.5723 },
    { name: "Rumia", latitude: 54.6047, longitude: 18.4342 },
    { name: "Świnoujście", latitude: 53.9065, longitude: 14.2905 },
    { name: "Zawiercie", latitude: 50.4873, longitude: 19.4244 },
    { name: "Malbork", latitude: 54.0405, longitude: 19.0312 },
    { name: "Cieszyn", latitude: 49.7466, longitude: 18.6356 },
    { name: "Kwidzyn", latitude: 53.7534, longitude: 18.9242 },
    { name: "Dzierżoniów", latitude: 50.8394, longitude: 16.6536 },
    { name: "Chojnice", latitude: 53.5405, longitude: 17.5442 },
    { name: "Bolesławiec", latitude: 51.2672, longitude: 15.6121 },
    { name: "Mińsk Mazowiecki", latitude: 52.1269, longitude: 21.5930 },
    { name: "Sopot", latitude: 54.4412, longitude: 18.5601 },
    { name: "Lubartów", latitude: 51.4767, longitude: 22.6099 },
    { name: "Gryfino", latitude: 53.0280, longitude: 14.5710 },
    { name: "Kąpiele Wielkie", latitude: 51.7471, longitude: 15.0214 }
];
function weatherForCity(city) {
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current_weather=true&hourly=temperature_2m,relative_humidity_2m`;
    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error fetching weather for ${city.name}: HTTP ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const currentWeather = data.current_weather;
            const humidityValue = data.hourly.relative_humidity_2m[0]; // Pobieramy wilgotność w pierwszej godzinie
            return {
                name: city.name,
                temperature: currentWeather.temperature,
                humidity: humidityValue || "N/A",
            };
        })
        .catch(error => {
            console.error(`Error for ${city.name}:`, error);
            return { name: city.name, temperature: "Error", humidity: "Error" };
        });
}
search.addEventListener("change", function () {
    const selectedIndex = search.selectedIndex;
    const selectedOption = search.options[selectedIndex];
    const cityName = selectedOption.text;
    const city = cities.find(c => c.name === cityName);
    if (city) {
        title.textContent = cityName;
        weatherForCity(city).then(result => {
            temperature.textContent = `Temperatura: ${result.temperature}°C`;
            humidity.textContent = `Wilgotność: ${result.humidity}%`;
        }).catch(error => {
            temperature.textContent = "Nie udało się pobrać temperatury.";
            humidity.textContent = "Nie udało się pobrać wilgotności.";
            console.error(error);
        });
    } else {
        title.textContent = "Miasto nieznalezione";
        temperature.textContent = "";
        humidity.textContent = "";
    }
});