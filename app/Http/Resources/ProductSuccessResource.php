<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductSuccessResource extends JsonResource
{
    private $extraInfo;

    public function __construct($resource, $extraInfo)
    {
        parent::__construct($resource);
        $this->extraInfo = $extraInfo;
    }

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'status' => "success",
            'status-code' => 200, 
            'message' => $this->extraInfo
        ];
    }
}
