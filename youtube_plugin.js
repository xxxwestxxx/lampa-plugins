(function () {
    'use strict';

    if (!window.Lampa) return;

    const pluginName = 'YouTube';

    function startPlugin() {

        // додаємо пункт у головне меню
        Lampa.Listener.follow('app', function (e) {
            if (e.type === 'ready') {
                Lampa.Menu.add({
                    title: pluginName,
                    icon: 'youtube',
                    onSelect: openMain
                });
            }
        });
    }

    function openMain() {
        Lampa.Activity.push({
            title: pluginName,
            component: 'youtube_plugin',
            page: 1,
            onBack: () => Lampa.Activity.pop()
        });

        showList();
    }

    function showList() {
        const items = [
            {
                title: 'YouTube (відкрити)',
                onSelect: () => {
                    window.open('https://www.youtube.com', '_blank');
                }
            },
            {
                title: 'Rick Astley 😄',
                onSelect: () => {
                    Lampa.Player.play({
                        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                        title: 'Rick Astley - Never Gonna Give You Up'
                    });
                }
            }
        ];

        Lampa.Controller.clear();
        Lampa.Controller.add(items);
        Lampa.Controller.toggle('content');
    }

    startPlugin();
})();
