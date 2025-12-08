<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gorontalo Weather App</title>
    <link rel="stylesheet" href="<?= base_url('/css/styles.css') ?>">
    <script src="https://cdn.tailwindcss.com" type="text/javascript"></script>

</head>

<body>
    <div class="app-container">
        <header class="header">
            <h1 class="app-title" id="appTitle">Gorontalo Weather</h1>
            <div class="location"><span>📍</span> <span id="locationName">Gorontalo, Indonesia</span>
            </div>
        </header>
        <main class="main-content">
            <div class="weather-card current-weather">
                <div class="weather-main">
                    <div class="weather-icon">
                        ⛅
                    </div>
                    <div class="temperature" id="temperature">
                        28°C
                    </div>
                </div>
                <div class="weather-details">
                    <div class="detail-item"><span class="detail-label">Humidity</span> <span class="detail-value" id="humidity">75%</span>
                    </div>
                    <div class="detail-item"><span class="detail-label">Wind Speed</span> <span class="detail-value" id="windSpeed">12 km/h</span>
                    </div>
                    <div class="detail-item"><span class="detail-label">Pressure</span> <span class="detail-value">1013 hPa</span>
                    </div>
                    <div class="detail-item"><span class="detail-label">Visibility</span> <span class="detail-value">10 km</span>
                    </div>
                </div>
            </div>
            <div class="weather-card prediction-panel">
                <h2 class="panel-title" id="predictionTitle">Weather Prediction (C4.5 Algorithm)</h2>
                <div class="decision-tree">
                    <form action="<?= base_url('/upload-tree') ?>" method="post" enctype="multipart/form-data" class="mb-4">
                        <label class="block text-sm font-semibold mb-1">
                            Upload Decision Tree (tree.json)
                        </label>

                        <input type="file"
                            name="tree_file"
                            accept=".json"
                            required
                            class="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100">

                        <button type="submit" class="mt-2 bg-blue-600 text-white px-4 py-1 rounded">
                            Upload & Tampilkan
                        </button>
                    </form>
                    <svg id="treeCanvas" width="100%" height="400"></svg>

                </div>
                <div class="prediction-result cursor-pointer" id="predictBtn">
                    <div class="result-title">
                        24-Hour Prediction
                    </div>
                    <div class="result-value">
                        ⛈️ Rainy
                    </div>
                </div>
            </div>
        </main>
        <div class="weather-input mt-4 p-4 bg-white rounded shadow">
            <h3 class="text-lg font-semibold mb-2">Prediksi Cuaca</h3>

            <label>Suhu (°C)</label>
            <input type="number" id="inputTemp" class="border p-1 w-full mb-2">
            <label>Kelembapan (%)</label>
            <input type="number" id="inputHumidity" class="border p-1 w-full mb-2">

            <label>Kecepatan Angin (km/h)</label>
            <input type="number" id="inputWind" class="border p-1 w-full mb-2">

            <button id="updateWeatherBtn" class="bg-blue-600 text-white px-3 py-1 rounded">
                Update Cuaca
            </button>
        </div>

        <footer class="footer">
            <p id="footerText">Data updated every 30 minutes • Powered by C4.5 Decision Tree Algorithm</p>
        </footer>
    </div>
    <script src="https://d3js.org/d3.v7.min.js"></script>
    <script src="<?= base_url('/js/script.js') ?>"></script>
</body>

</html>