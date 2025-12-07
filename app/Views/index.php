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
                    <div class="condition" id="weatherCondition">
                        Partly Cloudy
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
                    <svg id="treeCanvas" width="100%" height="400"></svg>
                </div>
                <div class="prediction-result">
                    <div class="result-title">
                        24-Hour Prediction
                    </div>
                    <div class="result-value">
                        ⛈️ Rainy
                    </div>
                </div>
            </div>
        </main>
        <footer class="footer">
            <p id="footerText">Data updated every 30 minutes • Powered by C4.5 Decision Tree Algorithm</p>
        </footer>
    </div>
    <script src="https://d3js.org/d3.v7.min.js"></script>
    <script src="<?= base_url('/js/script.js') ?>"></script>
</body>

</html>