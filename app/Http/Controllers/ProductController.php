<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Http\Resources\ProductErrorResource;
use App\Http\Resources\ProductSuccessResource;
use App\Http\Resources\AllProductsResource;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();

        $formattedProducts = $products->map(function ($product) {
            return new AllProductsResource($product);
        });

        return $formattedProducts;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $product = new Product();
        $product->title = $request->title;
        $product->price = $request->price;
        $product->description = $request->description;
        $product->category = $request->category;
        $product->image = $request->image;

        $product->save();
        
        return new ProductSuccessResource($product, $message = 'successfully created product');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = Product::find($id);
        if (!$product) {
            return new ProductErrorResource($product);
        } else {
            return new ProductResource($product);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $product = Product::findOrFail($id);
        $product->title = $request->title;
        $product->price = $request->price;
        $product->description = $request->description;
        $product->category = $request->category;
        $product->image = $request->image;

        $product->save();
        
        return new ProductSuccessResource($product, $message = 'successfully updated product');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {   
        if (!$product = Product::find($id)) {
            return new ProductErrorResource($product);
        } else {
            $product = Product::destroy($id);
            return new ProductSuccessResource($product, $message = 'successfully deleted product');
        }
    }
}
