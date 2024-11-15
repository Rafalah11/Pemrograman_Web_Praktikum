<?php

namespace app\Routes;
header("Content-Type: application/json; charset=UTF-8");
include "app/Controller/ProductController.php";

use app\Controller\ProductController;

//MENANGKAP REQUEST METHOD
$method = $_SERVER['REQUEST_METHOD'];
//MENANGKAP REQUEST PATH 
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Kode pemanggilan Routes sekarang setelah kelas ProductRoutes didefinisikan
class ProductRoutes
{
    public function handle($method, $path)
    {
        // JIKA REQUEST METHOD GET DAN PATH SAMA DENGAN '/api/product'
        if ($method == "GET" && $path == '/api/product') {
            $controller = new ProductController();
            echo $controller->index();
        }

        // JIKA REQUEST METHOD GET DAN PATH SAMA DENGAN '/api/product/{id}'
        if ($method == "GET" && strpos($path, "/api/product/") === 0) {
            $pathParts = explode("/", $path);
            $id = $pathParts[count($pathParts) - 1];

            $controller = new ProductController();
            echo $controller->getById($id);
        }

        // JIKA REQUEST METHOD POST DAN PATH SAMA DENGAN '/api/product'
        if ($method == "POST" && $path == "/api/product") {
            $controller = new ProductController();
            echo $controller->insert();
        }

        // JIKA REQUEST METHOD PUT DAN PATH SAMA DENGAN '/api/product/{id}'
        if ($method == "PUT" && strpos($path, "/api/product/") === 0) {
            $pathParts = explode("/", $path);
            $id = $pathParts[count($pathParts) - 1];

            $controller = new ProductController();
            echo $controller->update($id);
        }

        // JIKA REQUEST METHOD DELETE DAN PATH SAMA DENGAN '/api/product/{id}'
        if ($method == "DELETE" && strpos($path, "/api/product/") === 0) {
            $pathParts = explode("/", $path);
            $id = $pathParts[count($pathParts) - 1];

            $controller = new ProductController();
            echo $controller->delete($id);
        }
    }
}

// Panggil handler setelah kelas didefinisikan
$productRoutes = new ProductRoutes();
$productRoutes->handle($method, $path);
