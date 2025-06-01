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
    public function __construct(
       protected DefaultMethodsDataBase $loginRepository, protected Login $loginMethods){}
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

        $existEmail = $this->loginMethods->verifyExistEmail($payload['email']);
        $existUsername = $this->loginMethods->verifyExistUsername($payload['username']);

        if($existEmail){
            return Response("Email ja existe", 400);
        }

        if($existUsername){
            return Response("Username ja existe", 400);
        }

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
