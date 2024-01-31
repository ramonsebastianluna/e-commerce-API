<?php

namespace App\Http\Resources;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductErrorResource extends JsonResource
{   

    /**
     * This method implement a custom response.
     */ 
    public function toResponse($request)
    {
        return parent::toResponse($request)->setData([
            'error' => [
                'message' => 'Product not found',
                'status-code' => 404
            ]
        ]);
    }
}
