<?php

namespace App\Http\Requests;
use Illuminate\Support\Facades\Validator;
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
    public function rules(): array
    {
        return [
           'username' => ['required', 'string', 'unique:login,login.username'],
            'email' => ['required', 'email', 'unique:login,login.email'],
            'password' => ['required', 'string', 'min:10'], 
            'cpf' => ['required', 'string', 'unique:usuario,usuario.cpf'],
            'date' => ['required', 'date'],
            'name' => ['required', 'string'],
            'adress' =>  ['required', 'string'] ,
            'city' =>  ['required', 'string'] ,
            'cep' =>  ['required', 'string'],
            'state' =>  ['required', 'string']
        ];
    }

    public function messages(){
        return [
          'username.required' => 'username é requerido',
            'email.required' => [
                'email é requerido',
            ],
            'password.required' => [
                'password é requerido', 
                'minimo de dez caracteres'
            ],
            'cpf.required' => 'cpf é requerido',
            'date.required' => 'date é requerido',
            'name.required' => 'name é requerido',
            'adress.required' => 'adress é requerido',
            'city.required' => 'city é requerido',
            'cep.required' => 'cep é requerido',
            'state.required' => 'state é requerido' 
        ];
    }
}
