<?php

namespace Franzl\Flarum\BattleForTheNet\Listener;

use DateTime;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Event\PrepareApiAttributes;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;

class ExposeSettings
{
    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        if (! $this->showWidget()) {
            return;
        }

        $events->listen(PrepareApiAttributes::class, [$this, 'addAttributes']);
    }

    /**
     * @param PrepareApiAttributes $event
     */
    public function addAttributes(PrepareApiAttributes $event)
    {
        if ($event->isSerializer(ForumSerializer::class)) {
            $event->attributes['btfnWidgetShow'] = true;
            $event->attributes['btfnWidgetTheme'] = $this->settings->get('franzl-battleforthenet.theme');
        }
    }

    private function showWidget()
    {
        // Allow manual override (mostly for demo purposes)
        if (isset($_GET['always_show_bftn_widget'])) {
            return true;
        }

        // Otherwise, load the widget on July 12, 2017 and the surrounding days.
        // This allows the client code to take care of timezone resolution.
        $today = new DateTime();
        $begin = new DateTime('2017-07-11');
        $end   = new DateTime('2017-07-13');
        return $today > $begin && $today < $end;
    }
}
