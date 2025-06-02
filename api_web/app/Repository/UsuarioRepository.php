<?php

namespace App\Repository;

use App\Interfaces\DefaultMethodsDataBase;
use App\Models\Login;
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

     public function index(){
      $user = Usuario::all();

      foreach($user as $data){
        $id =  $data['id_login'];
        $data['id_login'] = Login::find($id);
      }

      return $user;
    }
    public function show($id){

    }
    public function update($request, $id){

    }
    public function destroy($request){
        
    }
}
