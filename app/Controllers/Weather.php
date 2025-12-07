<?php

namespace App\Controllers;

class Weather extends BaseController
{
    public function getGorontaloWeather()
    {
        $url = "https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4={kode_wilayah_tingkat_iv}";

        $xml = simplexml_load_file($url);
        $json = json_encode($xml);
        $data = json_decode($json, true);

        // Ambil data wilayah Gorontalo Kota
        $area = $data['forecast']['area'][0];

        // Ambil data jam terdekat
        $params = $area['parameter'];

        $weather = [
            'temperature' => $params[5]['timerange'][0]['value'][0],
            'humidity'    => $params[0]['timerange'][0]['value'][0],
            'windSpeed'   => $params[8]['timerange'][0]['value'][0],
            'condition'   => $params[6]['timerange'][0]['value'][1],
        ];

        return $this->response->setJSON($weather);
    }
}
