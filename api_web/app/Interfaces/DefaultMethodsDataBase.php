<?php

namespace App\Interfaces;

use Illuminate\Foundation\Http\FormRequest;

interface DefaultMethodsDataBase
{
    //
    public function store($request);
    public function show($id);
    public function index();
    public function update($request, $id);
    public function destroy($request);
}
