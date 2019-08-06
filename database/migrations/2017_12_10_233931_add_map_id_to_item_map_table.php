<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddMapIdToItemMapTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('item_map', function (Blueprint $table) {
            $table->integer('map_id')->unsigned();

            $table->foreign('map_id')
                  ->references('id')->on('maps')
                  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('item_map', function (Blueprint $table) {
            $table->dropForeign('item_map_map_id_foreign');

            $table->dropColumn('map_id');
        });
    }
}
