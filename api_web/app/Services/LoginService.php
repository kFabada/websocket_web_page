<?php

namespace App\Services;

use App\Exceptions\CreateAccoutException;
use App\Interfaces\DefaultMethodsDataBase;
use App\Interfaces\DefaultMethodsService;
use App\Models\Login;
use App\Models\Usuario;
use App\Repository\LoginRepository;
use App\Repository\UsuarioRepository;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use PhpParser\ErrorHandler\Throwing;

class LoginService implements DefaultMethodsService
{
    /**
     * Create a new class instance.
     */
    public function __construct(
        protected DefaultMethodsDataBase $loginRepository,
        protected Login $loginMethods,
        protected UsuarioRepository $usuarioRepository,
        protected Usuario $usuarioMethods
    ) {}
    private static function validStore($payload)
    {   
             $errors = 0;
             $keyPosition = 0; 
             $message = array([]);
             $key = array_keys($payload);

             foreach ($payload as $key) {
                if ($key == "") {
                    $errors++;
                    $value = $key[$keyPosition].":"."Valor vazio precisam ser diferente de null";
                    array_push($message, $value);
                    $keyPosition++;
                }
            }
             if($errors > 0){
                return response()->json(['mess' => $message], 400);
             }
             return true;
    }

    public function store(FormRequest $request)
    {

        $payload = [
            'username' => $request['username'],
            'password' => $request['password'],
            'email' => $request['email'],
            'valid' => true,
            "cpf" => $request['cpf'],
            "date" => $request['date'],
            "name" => $request['name'],
            "adress" => $request['adress'],
            "city" => $request['city'],
            "cep" => $request['cep'],
            "state" => $request['state'],
        ];

       
        $existEmail = $this->loginMethods->verifyExistEmail($payload['email']);
        $existUsername = $this->loginMethods->verifyExistUsername($payload['username']);
        $existCpf = $this->usuarioMethods->verifyExistCpf($request['cpf']);

        if ($existEmail) {
            return Response()->json(["message" => "Email ja existe"], 400);
        }

        if ($existUsername) {
            return Response()->json(["message" =>  "Username ja existe"], 400);
        }

        if($existCpf){
            return Response()->json(["message" =>  "Cpf ja existe"], 400);
        }

        $valid = LoginService::validStore($payload);

        if ($valid) {
            $data = $this->loginRepository->store($payload);
            $id = $data['id'];

            if ($id) {
                $payloadUsuario = [
                    "cpf" => $request['cpf'],
                    "date" => $request['date'],
                    "name" => $request['name'],
                    "adress" => $request['adress'],
                    "city" => $request['city'],
                    "cep" => $request['cep'],
                    "state" => $request['state'],
                    "id_login" => $id
                ];
                $user = $this->usuarioRepository->store($payloadUsuario);

                if ($user['id']) {
                    return Response()->json(['login' => $data, 'usuario' => $user], 201);
                } else {
                    return Response()->json(['message' => 'sem id do usuario falha no cadastro'], 400);
                }
            } else {
                return Response()->json(['message' => 'sem id do login'], 400);
            }
        }
        // return Response()->json(["message" => "Dados Incompletos"], 400);
    }

     public function index()
    {
        //
       
    }
    public function show($id) {}
    public function update(FormRequest $request, $id) {}
    public function destroy(FormRequest $request) {}
}
