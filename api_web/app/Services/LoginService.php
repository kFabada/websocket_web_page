<?php

namespace App\Services;


use App\Interfaces\DefaultMethodsDataBase;
use App\Interfaces\DefaultMethodsService;
use App\Models\Login;
use App\Models\Usuario;
use App\Repository\UsuarioRepository;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Hash;
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

    public function store(FormRequest $request)
    {

        $payload = [
            'username' => $request['username'],
            'password' => Hash::make($request['password']),
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
            return Response()->json(["message" => "Email ja existe", 'status' => 400], 400);
        }

        if ($existUsername) {
            return Response()->json(["message" =>  "Username ja existe", 'status' => 400], 400);
        }

        if($existCpf){
            return Response()->json(["message" =>  "Cpf ja existe", 'status' => 400], 400);
        }

        // $valid = LoginService::validStore($payload);
        
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
                    return Response()->json(['message' => "Dados Cadastrados", 'status' => 201], 201);
                    // return Response()->json(['login' => $data, 'usuario' => $user], 201);
                } else {
                    return Response()->json(['message' => 'Sem id do usuario falha no cadastro', 'status' => 400], 400);
                }
            } else {
                return Response()->json(['message' => 'sem id do login', 'status' => 400], 400);
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
