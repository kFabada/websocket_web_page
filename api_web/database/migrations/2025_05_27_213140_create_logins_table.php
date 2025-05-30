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
        Schema::create('login', function (Blueprint $table) {
            $table->id();
            $table->addColumn('string', 'username')->unique();
            $table->addColumn('string', 'password');
            $table->addColumn('string', 'email')->unique();
            $table->addColumn('boolean', 'valid');
            $table->addColumn('string', 'token')->nullable(true);
            $table->addColumn('dateTime', 'valid_token')->nullable(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('login');
    }
};
