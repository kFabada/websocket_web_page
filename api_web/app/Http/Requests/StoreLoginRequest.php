<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreLoginRequest extends FormRequest 
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    // public function rules(): array
    // {
    //     return [
            
    //         'username' => ['required', 'string'],
    //         'email' => ['required', 'string'],
    //         'password' => ['required', 'string'] 
    //     ];
    // }

    // public function messages(){
    //     return [
    //         'username.required' => 'username é requerido',
    //         'email.required' => 'email é requerido',
    //         'password.required' => 'password é requerido'
    //     ];
    // }
}
