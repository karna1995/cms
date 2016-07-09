<?php

namespace App\Data\Transformers;

use App\Models\Campaign;
use League\Fractal\TransformerAbstract;

class Campaign extends TransformerAbstract
{
    public function transform(Campaign $campaign)
    {
        return [
            'script' => $campaign->script,
            'name' => $campaign->name,
            'rebuttals' => $campaign->rebuttals()->count(),
            'promos' => $campaign->promos()->count(),
            'timestamp' => $campaign->created_at->diffForHumans()
        ];
    }
}