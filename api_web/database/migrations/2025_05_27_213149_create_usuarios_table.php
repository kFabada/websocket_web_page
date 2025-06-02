<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('usuario', function (Blueprint $table) {
            $table->id();
            $table->addColumn('string', 'name')->nullable(true);
            $table->addColumn('date', 'date')->nullable(true);
            $table->addColumn('string', 'adress')->nullable(true);
            $table->addColumn('string', 'cep')->nullable(true);
            $table->addColumn('string', 'state')->nullable(true);
             $table->addColumn('string', 'city')->nullable(true);
            $table->addColumn('string', 'cpf')->unique();
            $table->foreignId('id_login')->constrained('login', 'id')->unique();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuario');
    }
};
