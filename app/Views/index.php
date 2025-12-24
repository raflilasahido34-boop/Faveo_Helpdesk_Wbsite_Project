<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gorontalo Weather App</title>
    <link rel="stylesheet" href="<?= base_url('/css/styles.css') ?>" />
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gradient-to-b transition-colors duration-300">

    <div class="w-full max-w-7xl mx-auto bg-white shadow-xl rounded-3xl">

        <!-- NAVBAR -->
        <nav class="flex justify-between items-center px-6 py-4 bg-blue-600 text-white rounded-t-3xl">
            <a href="<?= base_url('/') ?>" class="text-2xl font-bold hover:opacity-90">
                Gorontalo Weather
            </a>

            <div class="flex items-center gap-3" id="authButtons">
                <a href="<?= base_url('/login') ?>"
                    class="px-4 py-1 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-200 transition">
                    Login
                </a>
                <a href="<?= base_url('/register') ?>"
                    class="px-4 py-1 bg-blue-800 text-white font-semibold rounded-lg shadow hover:bg-blue-900 transition">
                    Register
                </a>
            </div>

            <div class="hidden items-center gap-4" id="userProfile">
                <form method="get" action="<?= base_url('/logout') ?>">
                    <button class="px-4 py-1 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition">
                        Logout
                    </button>
                </form>
            </div>
        </nav>

        <!-- LOCATION -->
        <header class="p-6 bg-blue-600 text-white text-center mt-2">
            <div class="flex justify-center items-center gap-2 text-lg">
                <span>📍</span>
                <span id="locationName">Gorontalo, Indonesia</span>
            </div>
        </header>

        <main class="space-y-16 py-12">

            <!-- WEATHER & PREDICTION -->
            <section class="px-6">
                <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">

                    <div class="bg-white rounded-3xl shadow-lg p-10 text-center">
                        <div class="text-8xl mb-4">⛅</div>
                        <div class="text-6xl font-extrabold text-blue-600" id="temperature">-°C</div>
                        <p class="mt-3 text-xl text-gray-500" id="card_condition">-</p>

                        <div class="mt-8 grid grid-cols-2 gap-4">
                            <div class="bg-blue-50 rounded-xl p-4">
                                <p class="text-sm text-gray-500">Wind</p>
                                <p class="text-xl font-semibold" id="card_windSpeed">- km/h</p>
                            </div>
                            <div class="bg-blue-50 rounded-xl p-4">
                                <p class="text-sm text-gray-500">Humidity</p>
                                <p class="text-xl font-semibold" id="card_humidity">-%</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-3xl shadow-lg p-10 text-center">
                        <p class="uppercase tracking-wide text-sm opacity-80">24 Hour Prediction</p>
                        <p class="text-5xl font-extrabold mt-4" id="prediksi_result">-</p>
                        <p class="mt-4 opacity-90">Based on C4.5 Decision Tree</p>
                    </div>

                </div>
            </section>

            <!-- DECISION TREE -->
            <section class="px-6">
                <div class="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-8">
                    <details class="group">
                        <summary class="cursor-pointer text-lg font-semibold flex justify-between items-center">
                            How the prediction is calculated
                            <span class="transition group-open:rotate-180">⬇️</span>
                        </summary>
                        <div class="mt-6 bg-gray-50 rounded-xl p-4">
                            <svg id="treeCanvas" width="100%" height="400"></svg>
                        </div>
                    </details>
                </div>
            </section>

            <!-- INPUT -->
            <section class="px-6">
                <div id="loginReminder"
                    class="hidden max-w-3xl mx-auto mb-6 bg-yellow-100 border border-yellow-300 rounded-xl p-4 text-center">
                    <p class="text-yellow-800 font-semibold">🔒 Login required to use prediction feature</p>
                    <a href="<?= base_url('/login') ?>"
                        class="inline-block mt-3 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                        Login Now
                    </a>
                </div>

                <div id="inputFormWrapper"
                    class="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow grid grid-cols-1 gap-6 opacity-50 pointer-events-none">
                    <div>
                        <label class="font-semibold">Tanggal Prediksi</label>
                        <input type="date" id="prediction_date"
                            class="mt-1 w-full p-2 rounded-lg border focus:ring-2 focus:ring-blue-400">
                    </div>
                </div>
            </section>

        </main>

        <footer class="p-4 bg-blue-600 text-white text-center text-sm rounded-b-3xl">
            <p id="footerText">
                Data updated based on selected date • Powered by C4.5 Decision Tree Algorithm
            </p>
        </footer>
    </div>

    <script>
        const isLoggedIn = <?= session()->get('user_id') ? 'true' : 'false' ?>;

        if (isLoggedIn) {
            authButtons.classList.add('hidden');
            userProfile.classList.remove('hidden');
            inputFormWrapper.classList.remove('opacity-50', 'pointer-events-none');
            loginReminder.classList.add('hidden');
        } else {
            loginReminder.classList.remove('hidden');
        }
    </script>

    <script src="https://d3js.org/d3.v7.min.js"></script>
    <script src="<?= base_url('/js/script.js') ?>" defer></script>

</body>

</html>