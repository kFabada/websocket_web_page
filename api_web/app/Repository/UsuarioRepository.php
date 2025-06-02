<?php

namespace App\Repository;

use App\Interfaces\DefaultMethodsDataBase;
use App\Models\Usuario;

class UsuarioRepository implements DefaultMethodsDataBase
{
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        //
    }
    public function store($request){
        return Usuario::create($request);
    }
    public function show($id){

    }
    public function update($request, $id){

    }
    public function destroy($request){
        
    }
}
