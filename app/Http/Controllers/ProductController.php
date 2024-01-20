<?php

namespace App\Http\Controllers;

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
            return [
                'type' => 'product',
                'id' => $product->id,
                'attributes' => [
                    'id' => $product->id,
                    'title' => $product->title,
                    'price' => $product->price,
                    'description' => $product->description,
                    'category' => $product->category,
                    'image' => $product->image,
                ],
                'links' => [
                    'self' => null,
                ],
            ];
        });

        return ['data' => $formattedProducts];
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
        
        return response()->json([
            'status' => "success",
            'message' => 'successfully created product'], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = Product::find($id);
        
        return response()->json([
            'data' => [
                'type' => 'product',
                'id' => $product->id,
                'attributes' => [
                    'id' => $product->id,
                    'title' => $product->title,
                    'price' => $product->price,
                    'description' => $product->description,
                    'category' => $product->category,
                    'image' => $product->image
                ],
                'links' => [
                    'self' => null,
                ],
            ]
        ], 200);
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
        
        return response()->json([
            'status' => "success",
            'message' => 'successfully updated product'], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $product = Product::destroy($id);
        
        return response()->json([
            'status' => "success",
            'message' => 'successfully deleted product'], 201);
    }
}
