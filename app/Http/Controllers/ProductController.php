<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    /**
     * It returns a JSON object of all the products in the database
     * 
     * @return A JSON object containing all the products in the database.
     */
    public function getProducts()
    {
        $products = Product::all();
        return json_encode($products);
    }
}
