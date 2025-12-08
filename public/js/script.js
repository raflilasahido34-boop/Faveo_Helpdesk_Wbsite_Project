const defaultConfig = {
    background_gradient_start: "#667eea",
    background_gradient_end: "#764ba2",
    card_background: "#ffffff",
    primary_accent: "#667eea",
    text_primary: "#2d3748",
    text_secondary: "#4a5568",
    font_family: "Inter",
    font_size: 16,
    app_title: "Gorontalo Weather",
    location_name: "Gorontalo, Indonesia",
    temperature: "28°C",
    weather_condition: "Partly Cloudy",
    humidity: "75%",
    wind_speed: "12 km/h",
    prediction_title: "Weather Prediction (C4.5 Algorithm)",
    footer_text: "Data updated every 30 minutes • Powered by C4.5 Decision Tree Algorithm"
};

const config = {};

async function onConfigChange(cfg) {
    const bgStart = cfg.background_gradient_start || defaultConfig.background_gradient_start;
    const bgEnd = cfg.background_gradient_end || defaultConfig.background_gradient_end;
    const primaryAccent = cfg.primary_accent || defaultConfig.primary_accent;
    const textPrimary = cfg.text_primary || defaultConfig.text_primary;
    const textSecondary = cfg.text_secondary || defaultConfig.text_secondary;
    const customFont = cfg.font_family || defaultConfig.font_family;
    const baseSize = cfg.font_size || defaultConfig.font_size;
    const baseFontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

    document.body.style.background = `linear-gradient(135deg, ${bgStart} 0%, ${bgEnd} 100%)`;

    document.querySelectorAll('.weather-card').forEach(card => {
        card.style.background = `rgba(255, 255, 255, 0.95)`;
    });

    document.querySelector('.temperature').style.color = primaryAccent;
    document.querySelector('.condition').style.color = textSecondary;
    document.querySelector('.panel-title').style.color = textPrimary;

    document.querySelectorAll('.tree-node').forEach(node => {
        if (node.classList.contains('root')) {
            node.style.background = `linear-gradient(135deg, ${bgStart}, ${bgEnd})`;
        } else if (!node.classList.contains('leaf-node')) {
            node.style.borderColor = primaryAccent;
        }
    });

    document.querySelectorAll('.branch-label').forEach(label => {
        label.style.color = primaryAccent;
        label.style.borderColor = primaryAccent;
    });

    document.querySelectorAll('.prediction-result').forEach(result => {
        result.style.background = `linear-gradient(135deg, ${bgStart}, ${bgEnd})`;
    });

    document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;
    document.querySelector('.app-title').style.fontSize = `${baseSize * 2.5}px`;
    document.querySelector('.location').style.fontSize = `${baseSize * 1.25}px`;
    document.querySelector('.temperature').style.fontSize = `${baseSize * 4}px`;
    document.querySelector('.condition').style.fontSize = `${baseSize * 1.5}px`;
    document.querySelector('.panel-title').style.fontSize = `${baseSize * 1.5}px`;

    document.querySelectorAll('.detail-label').forEach(el => {
        el.style.fontSize = `${baseSize * 0.875}px`;
    });

    document.querySelectorAll('.detail-value').forEach(el => {
        el.style.fontSize = `${baseSize * 1.5}px`;
    });

    document.getElementById('appTitle').textContent =
        cfg.app_title || defaultConfig.app_title;

    document.getElementById('locationName').textContent =
        cfg.location_name || defaultConfig.location_name;

    document.getElementById('temperature').textContent =
        cfg.temperature || defaultConfig.temperature;

    document.getElementById('weatherCondition').textContent =
        cfg.weather_condition || defaultConfig.weather_condition;

    document.getElementById('humidity').textContent =
        cfg.humidity || defaultConfig.humidity;

    document.getElementById('windSpeed').textContent =
        cfg.wind_speed || defaultConfig.wind_speed;

    document.getElementById('predictionTitle').textContent =
        cfg.prediction_title || defaultConfig.prediction_title;

    document.getElementById('footerText').textContent =
        cfg.footer_text || defaultConfig.footer_text;
}

function mapToCapabilities(cfg) {
    return {
        recolorables: [
            {
                get: () =>
                    cfg.background_gradient_start || defaultConfig.background_gradient_start,
                set: value => {
                    cfg.background_gradient_start = value;
                    window.elementSdk.setConfig({
                        background_gradient_start: value
                    });
                }
            },
            {
                get: () =>
                    cfg.background_gradient_end || defaultConfig.background_gradient_end,
                set: value => {
                    cfg.background_gradient_end = value;
                    window.elementSdk.setConfig({
                        background_gradient_end: value
                    });
                }
            },
            {
                get: () =>
                    cfg.primary_accent || defaultConfig.primary_accent,
                set: value => {
                    cfg.primary_accent = value;
                    window.elementSdk.setConfig({
                        primary_accent: value
                    });
                }
            },
            {
                get: () =>
                    cfg.text_primary || defaultConfig.text_primary,
                set: value => {
                    cfg.text_primary = value;
                    window.elementSdk.setConfig({
                        text_primary: value
                    });
                }
            },
            {
                get: () =>
                    cfg.text_secondary || defaultConfig.text_secondary,
                set: value => {
                    cfg.text_secondary = value;
                    window.elementSdk.setConfig({
                        text_secondary: value
                    });
                }
            }
        ],
        borderables: [],
        fontEditable: {
            get: () => cfg.font_family || defaultConfig.font_family,
            set: value => {
                cfg.font_family = value;
                window.elementSdk.setConfig({
                    font_family: value
                });
            }
        },
        fontSizeable: {
            get: () => cfg.font_size || defaultConfig.font_size,
            set: value => {
                cfg.font_size = value;
                window.elementSdk.setConfig({
                    font_size: value
                });
            }
        }
    };
}

function mapToEditPanelValues(cfg) {
    return new Map([
        ["app_title", cfg.app_title || defaultConfig.app_title],
        ["location_name", cfg.location_name || defaultConfig.location_name],
        ["temperature", cfg.temperature || defaultConfig.temperature],
        ["weather_condition", cfg.weather_condition || defaultConfig.weather_condition],
        ["humidity", cfg.humidity || defaultConfig.humidity],
        ["wind_speed", cfg.wind_speed || defaultConfig.wind_speed],
        ["prediction_title", cfg.prediction_title || defaultConfig.prediction_title],
        ["footer_text", cfg.footer_text || defaultConfig.footer_text]
    ]);
}

if (window.elementSdk) {
    window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
    });
}
(function () {
    function c() {
        var b = a.contentDocument || a.contentWindow.document;

        if (b) {
            var d = b.createElement('script');

            d.innerHTML =
                "window.__CF$cv$params={r:'9aa0c91485581982',t:'MTc2NTA3NjU2MC4wMDAwMDA='};" +
                "var a=document.createElement('script');" +
                "a.nonce='';" +
                "a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';" +
                "document.getElementsByTagName('head')[0].appendChild(a);";

            b.getElementsByTagName('head')[0].appendChild(d);
        }
    }

    if (document.body) {
        var a = document.createElement('iframe');

        a.height = 1;
        a.width = 1;
        a.style.position = 'absolute';
        a.style.top = 0;
        a.style.left = 0;
        a.style.border = 'none';
        a.style.visibility = 'hidden';

        document.body.appendChild(a);

        if ('loading' !== document.readyState) {
            c();
        } else if (window.addEventListener) {
            document.addEventListener('DOMContentLoaded', c);
        } else {
            var e = document.onreadystatechange || function () {};

            document.onreadystatechange = function (b) {
                e(b);
                if ('loading' !== document.readyState) {
                    document.onreadystatechange = e;
                    c();
                }
            };
        }
    }
})();
const featureLabelMap = {
    tmin: "Suhu Minimum (°C)",
    tavg: "Suhu Rata-rata (°C)",
    wspd: "Kecepatan Angin (km/jam)"
};
async function loadDecisionTree() {
    const res = await fetch("/data/tree.json");
    const rawTree = await res.json();

    const d3Tree = convertToD3Format(rawTree); // ✅ KONVERSI DI SINI
    drawTree(d3Tree)
}
function convertToD3Format(node) {
    if (!node) return null;

    let newNode = {
        ...node
    };

    if (node.left || node.right) {
        newNode.children = [];

        if (node.left) {
            newNode.children.push(convertToD3Format(node.left));
        }

        if (node.right) {
            newNode.children.push(convertToD3Format(node.right));
        }
    }

    return newNode;
}

function drawTree(data) {
    const width = 900;
    const height = 450;

    const svg = d3.select("#treeCanvas")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .html("") // ✅ CLEARR dulu biar tidak numpuk
        .append("g")
        .attr("transform", "translate(40,40)");

    const root = d3.hierarchy(data);

    const treeLayout = d3.tree().size([height - 80, width - 120]);
    treeLayout(root);

    // ✅ GARIS CABANG
    svg.selectAll("line")
        .data(root.links())
        .enter()
        .append("line")
        .attr("x1", d => d.source.y)
        .attr("y1", d => d.source.x)
        .attr("x2", d => d.target.y)
        .attr("y2", d => d.target.x)
        .attr("stroke", "#c7d2fe")
        .attr("stroke-width", 2);


    // ✅ NODE
    const nodes = svg.selectAll("g.node")
        .data(root.descendants())
        .enter()
        .append("g")
        .attr("transform", d => `translate(${d.y},${d.x})`);

    nodes.append("rect")
        .attr("x", -70)
        .attr("y", -22)
        .attr("rx", 10)
        .attr("ry", 10)
        .attr("width", 140)
        .attr("height", 44)
        .attr("fill", d => {
            if (d.children) return "#6366f1";      // node keputusan
            return d.data.label === 1 ? "#16a34a" : "#dc2626"; // hujan / tidak
        })
        .attr("stroke", "#fff")
        .attr("stroke-width", 1.5);


    nodes.append("text")
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        .style("font-size", "11px")
        .style("font-weight", "bold")
        .each(function (d) {
            const text = d3.select(this);

            if (d.data.feature) {
                const label = featureLabelMap[d.data.feature] || d.data.feature;

                text.append("tspan")
                    .attr("x", 0)
                    .attr("dy", "-0.3em")
                    .text(label);

                text.append("tspan")
                    .attr("x", 0)
                    .attr("dy", "1.2em")
                    .style("font-weight", "normal")
                    .text(`≤ ${d.data.threshold.toFixed(2)}`);
            } else {
                text.text(d.data.label === 1 ? "HUJAN" : "TIDAK HUJAN");
            }
        });
    nodeEnter.attr("id", d => {
        if (d.data.feature && d.data.threshold) {
            return `node-${d.data.feature}-${d.data.threshold}`;
        }
        return null;
    });
}


loadDecisionTree();
fetch("/data/tree.json")
    .then(res => res.json())
    .then(data => {
        window.treeData = data;
        runPrediction(); // langsung prediksi awal
    });
function highlightTreePath(path) {
    d3.selectAll("g.node circle")
        .style("stroke", "#003C43")
        .style("stroke-width", 1)
        .style("fill", "#003C43");

    d3.selectAll("path.link")
        .style("stroke", "#003C43")
        .style("stroke-width", 1);

    path.forEach(step => {
        d3.select(`#node-${step.feature}-${step.threshold}`)
            .select("circle")
            .style("stroke", "yellow")
            .style("stroke-width", 4);

        d3.select(`#node-${step.feature}-${step.threshold}`)
            .select("text")
            .style("fill", "yellow");
    });
}

function predictFromTree(tree, input) {
    let node = tree;
    let path = [];

    while (node && node.feature) {
        path.push({
            feature: node.feature,
            threshold: node.threshold,
            nodeRef: node // simpan referensi node
        });

        if (input[node.feature] <= node.threshold) {
            node = node.left;
        } else {
            node = node.right;
        }
    }

    return {
        result: node.label === 1 ? "Hujan" : "Tidak Hujan",
        path: path
    };
}
function updateWeatherCard(input, result) {
    document.getElementById("temperature").innerText = `${input.tavg}°C`;
    document.getElementById("weatherCondition").innerText = `suhu minimum: ${input.tmin}°C \nkecepatan angin: ${input.wspd} km/h`;
    document.getElementById("prediksi_result").innerText = result;
}
async function runPrediction() {
    const input = {
        tavg: parseFloat(document.getElementById("tavg").value),
        tmin: parseFloat(document.getElementById("tmin").value),
        wspd: parseFloat(document.getElementById("wspd").value)
    };

    const prediction = predictFromTree(window.treeData, input);
    updateWeatherCard(input, prediction.result);
    highlightTreePath(prediction.path);
}

// auto predict on change
["tavg", "tmin", "wspd"].forEach(id => {
    document.getElementById(id).addEventListener("input", runPrediction);
});

// manual predict button
document.getElementById("predictBtn").addEventListener("click", runPrediction);
