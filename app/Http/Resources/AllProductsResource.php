<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AllProductsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'type' => 'product',
            'id' => $this->id,
            'attributes' => [
                'id' => $this->id,
                'title' => $this->title,
                'price' => $this->price,
                'description' => $this->description,
                'category' => $this->category,
                'image' => $this->image
            ],
            'links' => [
                'self' => null,
            ]
        ];;
    }
}
