<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddItemIdToItemMapTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('item_map', function (Blueprint $table) {
            $table->integer('item_id')->unsigned();

            $table->foreign('item_id')
                  ->references('id')->on('items')
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
            $table->dropForeign('item_map_item_id_foreign');

            $table->dropColumn('item_id');
        });
    }
}
