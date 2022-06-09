<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    /* Telling Laravel that these are the only fields that can be mass assigned. */
    protected $fillable = ['name', 'price'];
    
}
