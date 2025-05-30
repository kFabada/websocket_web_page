<?php

namespace App\Repository;

use App\Interfaces\DefaultMethodsDataBase;
use App\Models\Login;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Http\FormRequest;

class LoginRepository implements DefaultMethodsDataBase
{
    /**
     * Create a new class instance.
     */
     public function store($request){
         return Login::create($request);
    }
    public function show($id){

    }
    public function update($request, $id){

    }
    public function destroy($request){

    }
}
