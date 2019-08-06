<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddParentItemIdToItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('items', function (Blueprint $table) {
            $table->integer('parent_item_id')->unsigned()->nullable();

            $table->foreign('parent_item_id')
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
        Schema::table('items', function (Blueprint $table) {
            $table->dropForeign('items_parent_item_id_foreign');

            $table->dropColumn('parent_item_id');
        });
    }
}
