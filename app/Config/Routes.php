<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->get('weather/gorontalo', 'Weather::getGorontaloWeather');
$routes->post('upload-tree', 'TreeUpload::upload');
