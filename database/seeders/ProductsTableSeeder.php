<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = [
            [
                'name' => 'TV Samsung', 
                'price' => '10.00',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'TV LG',
                'price' => '20.00',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Laptop HP 1tb SSD',
                'price' => '30.00',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Laptop Dell',
                'price' => '40.00',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'ASUS Zenphone 5',
                'price' => '50.00',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Iphone X 64GB',
                'price' => '60.00',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ];

        DB::table('products')->insert($products);
    }
}
