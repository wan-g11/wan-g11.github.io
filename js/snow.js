// 互动落雪特效（带开关）
var snowContainer, snowflakes = [], animationId, isSnowActive = false;

function createSnowContainer() {
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

function createStars() {
    for (var i = 0; i < 80; i++) {
        var star = document.createElement('div');
        star.className = 'snow-star';
        star.style.cssText = 'position:absolute;width:2px;height:2px;background:#fff;border-radius:50%;opacity:' + Math.random() + ';animation:twinkle ' + (Math.random() * 3 + 2) + 's infinite;';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 60 + '%';
        snowContainer.appendChild(star);
    }
}

function startSnow() {
    if (!snowContainer) createSnowContainer();
    snowContainer.style.display = 'block';
    createStars();
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
    isSnowActive = true;
}

function stopSnow() {
    if (snowContainer) snowContainer.style.display = 'none';
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
    if (snowContainer) snowContainer.innerHTML = '';
    snowflakes = [];
    isSnowActive = false;
}

function toggleSnow() {
    if (isSnowActive) {
        stopSnow();
    } else {
        startSnow();
    }
}

window.toggleSnow = toggleSnow;