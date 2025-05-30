<?php

namespace App\Services;

use App\Interfaces\DefaultMethodsDataBase;
use App\Interfaces\DefaultMethodsService;
use App\Models\Login;
use App\Repository\LoginRepository;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class LoginService implements DefaultMethodsService
{
    /**
     * Create a new class instance.
     */
    public function __construct(protected LoginRepository $loginRepository)
    {
        //
    }
    private static function validStore($payload){
        foreach($payload as $key){
            if($key == ""){
                return false;
            }
        }
        return true;
    }

    public function store(FormRequest $request){
         
       $payload = [
            'username' => $request['username'],
            'password' => $request['password'],
            'email' => $request['email'],
            'valid' => true,
        ];

        $valid = LoginService::validStore($payload);

        if($valid){
          $data = $this->loginRepository->store($payload);
          return Response($data, 201);
        }

       return Response("Dados Incompletos", 400);
    }
    public function show($id){

    }
    public function update(FormRequest $request, $id){

    }
    public function destroy(FormRequest $request){

    }
}
