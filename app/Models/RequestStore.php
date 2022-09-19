<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RequestStore extends Model
{
    use HasFactory;
    protected $fillable = [
        'status',
        'isaccepted',
        'store_id',
        'user_id'
    ];

    protected $hidden = [
        'store_id',
        'user_id'
    ];

    public function users(){
        return $this->belongsTo(User::class,'user_id');
    }

    public function stores(){
        return $this->belongsTo(Store::class,'store_id');
    }

}
