<?php

namespace App\Repositories;

use App\Models\Song;
use App\Models\Album;
use App\Repositories\Traits\Searchable;

class ArtistRepository extends AbstractRepository
{
    use Searchable;

    /** @return array<int> */
    public function getNonEmptyArtistIds(): array
    {
        $albumArtists = Album::select('artist_id')
            ->groupBy('artist_id')
            ->get()
            ->pluck('artist_id')
            ->toArray();
        $songArtists = Song::select('artist_id')
            ->groupBy('artist_id')
            ->get()
            ->pluck('artist_id')
            ->toArray();

        // return array_unique($albumArtists + $songArtists);
        return array_unique(array_merge($albumArtists, $songArtists));
    }
}
