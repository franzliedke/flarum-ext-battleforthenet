<?php

use Franzl\Flarum\BattleForTheNet\Listener;
use Illuminate\Contracts\Events\Dispatcher;

return function (Dispatcher $events) {
    $events->subscribe(Listener\AddClientAssets::class);
    $events->subscribe(Listener\ExposeSettings::class);
};
