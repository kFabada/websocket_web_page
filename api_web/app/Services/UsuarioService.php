<?php

namespace App\Services;

use App\Interfaces\DefaultMethodsDataBase;
use App\Interfaces\DefaultMethodsService;
use Illuminate\Foundation\Http\FormRequest;

class UsuarioService implements DefaultMethodsService
{
    /**
     * Create a new class instance.
     */
    public function __construct(protected DefaultMethodsDataBase $defaultMethodsDataBase){}

    public function store(FormRequest $request){

    }
    public function show($id){

    }
    public function update(FormRequest $request, $id){

    }
    public function destroy(FormRequest $request){

    } 
}
