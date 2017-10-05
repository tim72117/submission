<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSubmissionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('submissions', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->string('author_cht');
            $table->string('author_eng');
            $table->string('title_cht');
            $table->string('title_eng');
            $table->string('co_author1')->nullable();
            $table->string('co_author2')->nullable();
            $table->string('co_author3')->nullable();
            $table->string('co_author4')->nullable();
            $table->string('co_author5')->nullable();
            $table->string('co_author6')->nullable();
            $table->string('co_author7')->nullable();
            $table->string('co_author8')->nullable();
            $table->string('affiliation_cht');
            $table->string('affiliation_eng');
            $table->string('position_cht');
            $table->string('position_eng');
            $table->string('specialized_areas');
            $table->string('address');
            $table->string('phone_office');
            $table->string('phone_home');
            $table->string('phone_mobile');
            $table->string('fax');
            $table->string('email');
            $table->string('name');
            $table->string('path');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('submissions');
    }
}
