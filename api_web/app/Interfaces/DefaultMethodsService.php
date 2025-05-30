<?php

namespace App\Interfaces;

use Illuminate\Foundation\Http\FormRequest;

interface DefaultMethodsService
{
   
    public function store(FormRequest $request);
    public function show($id);
    public function update(FormRequest $request, $id);
    public function destroy(FormRequest $request);   
    
}
