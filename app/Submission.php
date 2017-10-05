<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Submission extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
     protected $table = 'submissions';

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
     public $timestamps = true;

     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'author_cht',
        'author_eng',
        'title_cht',
        'title_eng',
        'co_author1',
        'co_author2',
        'co_author3',
        'co_author4',
        'co_author5',
        'co_author6',
        'co_author7',
        'co_author8',
        'affiliation_cht',
        'affiliation_eng',
        'position_cht',
        'position_eng',
        'specialized_areas',
        'address',
        'phone_office',
        'phone_home',
        'phone_mobile',
        'fax',
        'email',
        'name',
        'path',
    ];
}
