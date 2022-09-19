<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    use HasFactory;
    protected $fillable = [
        'how_many',
        'material_id',
        'user_id'
    ];

    protected $hidden = [
        'material_id',
        'user_id'
    ];

    public function material(){
        return $this->belongsTo(RecyclableMaterial::class);
    }

    public function history(){
        return $this->hasMany(StoreHistory::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function requests()
    {
        return $this->hasMany(RequestStore::class,'store_id');
    }

}
