!function() {
    // Shizuku 模型 (modelId: 4)
    var modelId = 4;
    var script = document.createElement('script');
    script.src = 'https://fastly.jsdelivr.net/npm/live2d-widgets@1/dist/autoload.js';
    script.onload = function() {
        if (window.initWidget) {
            initWidget({
                waifuPath: 'https://fastly.jsdelivr.net/npm/live2d-widgets@1/dist/waifu-tips.json',
                cdnPath: 'https://fastly.jsdelivr.net/gh/fghrsh/live2d_api/',
                modelId: modelId,
                mobile: { show: false }
            });
        }
    };
    document.head.appendChild(script);
}();
