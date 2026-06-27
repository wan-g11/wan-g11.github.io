// 互动落雪特效 - 优化版
(function() {
    var snowContainer, snowflakes = [], animationId;
    // 状态直接从 localStorage 读取，避免变量被 PJAX 重置
    var getSnowStatus = () => localStorage.getItem('snow') === 'on';

    function createSnowContainer() {
        if (document.getElementById('snow-container')) {
            snowContainer = document.getElementById('snow-container');
            return;
        }
        snowContainer = document.createElement('div');
        snowContainer.id = 'snow-container';
        snowContainer.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;overflow:hidden;display:none;';
        document.body.appendChild(snowContainer);
    }

    function Snowflake() {
        this.element = document.createElement('div');
        this.element.textContent = '❆';
        this.element.style.cssText = 'position:absolute;color:#fff;font-size:' + (Math.random() * 10 + 10) + 'px;opacity:' + Math.random() + ';user-select:none;';
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * -window.innerHeight;
        this.speed = Math.random() * 2 + 1;
        this.wind = Math.random() * 1 - 0.5;
        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';
        snowContainer.appendChild(this.element);
    }

    Snowflake.prototype.update = function() {
        this.y += this.speed;
        this.x += this.wind + Math.sin(this.y / 30) * 0.5;
        if (this.y > window.innerHeight) {
            this.y = -20;
            this.x = Math.random() * window.innerWidth;
        }
        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';
    };

    function startSnow() {
        if (!snowContainer) createSnowContainer();
        if (animationId) return; // 防止重复启动

        snowContainer.style.display = 'block';
        snowContainer.innerHTML = ''; // 清空旧星星
        snowflakes = [];
        
        // 创建星星
        for (var i = 0; i < 80; i++) {
            var star = document.createElement('div');
            star.style.cssText = 'position:absolute;width:2px;height:2px;background:#fff;border-radius:50%;opacity:' + Math.random() + ';animation:twinkle ' + (Math.random() * 3 + 2)+ 's infinite;';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 60 + '%';
            snowContainer.appendChild(star);
        }
        // 创建雪花
        for (var i = 0; i < 50; i++) {
            snowflakes.push(new Snowflake());
        }
        
        function animate() {
            for (var i = 0; i < snowflakes.length; i++) {
                snowflakes[i].update();
            }
            animationId = requestAnimationFrame(animate);
        }
        animate();
        localStorage.setItem('snow', 'on');
    }

    function stopSnow() {
        if (snowContainer) snowContainer.style.display = 'none';
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
        snowflakes = [];
        localStorage.setItem('snow', 'off');
    }

    window.toggleSnow = function() {
        getSnowStatus() ? stopSnow() : startSnow();
    };

    window.initSnow = function() {
        createSnowContainer();
        if (getSnowStatus()) {
            startSnow();
        } else {
            stopSnow();
        }
    };
})();
