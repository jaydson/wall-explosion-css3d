window.addEventListener('DOMContentLoaded',function () {
    (function() {
        var wall = {
                addClass : function (element, value) {
                    if(!element.className) {
                        element.className = value;
                    } else {
                        newClassName = element.className;
                        newClassName+= " ";
                        newClassName+= value;
                        element.className = newClassName;
                    }
                },

                explode : function () {
                    var itens = document.querySelectorAll('.brick_container'),
                        intenslen = itens.length;
                    
                    for (var i=0; i < intenslen; i++) {
                        wall.randomEffect(itens[i]);
                    }
                    document.querySelector('.detonator').style.zIndex = 0;
                    document.querySelector('.explosion').style.display = 'block';
                    setTimeout(function(){
                        document.querySelector('.explosion').style.display = 'none';
                    },550);
                },

                getRandomNumber : function () {
                    return Math.floor(Math.random() * (2000 - 1) + 1);
                },

                randomEffect : function (element) {
                    setTimeout(function(){
                        element.style.webkitTransform   = 'rotateX(' + wall.getRandomNumber() + 'deg) rotateY(' + wall.getRandomNumber() + 'deg) rotateZ(' + wall.getRandomNumber() + 'deg) translateY('+ wall.getRandomNumber() +'px)';
                        element.style.MozTransform      = 'rotateX(' + wall.getRandomNumber() + 'deg) rotateY(' + wall.getRandomNumber() + 'deg) rotateZ(' + wall.getRandomNumber() + 'deg) translateY('+ wall.getRandomNumber() +'px)';
                        element.style.OTransform        = 'rotateX(' + wall.getRandomNumber() + 'deg) rotateY(' + wall.getRandomNumber() + 'deg) rotateZ(' + wall.getRandomNumber() + 'deg) translateY('+ wall.getRandomNumber() +'px)';
                        element.style.MSTransform       = 'rotateX(' + wall.getRandomNumber() + 'deg) rotateY(' + wall.getRandomNumber() + 'deg) rotateZ(' + wall.getRandomNumber() + 'deg) translateY('+ wall.getRandomNumber() +'px)';
                        element.style.transform         = 'rotateX(' + wall.getRandomNumber() + 'deg) rotateY(' + wall.getRandomNumber() + 'deg) rotateZ(' + wall.getRandomNumber() + 'deg) translateY('+ wall.getRandomNumber() +'px)';
                    },200);
                }
            },
            settings = {
            brick : {
                width : 20,
                height : 10,
                htmlTemplate : '<div class="brick"><div></div><div></div><div></div><div></div><div></div><div></div></div>'
            },
            wall : {
                bricksX : 12,
                bricksY : 12,
                bricks  : 20
            }
        },
        container = document.querySelector('.wall'),
        i = 0,
        y = 0,
        x = 0,
        bricksX = settings.wall.bricksX,
        bricksY = settings.wall.bricksY,        
        translateX = 0,
        translateY = 0,
        brick_element = null,
        brick_element_face = null,
        bricks = settings.wall.bricks;

        for (var x=0; x < bricksX; x++) {
            for(var y=0; y < bricksY; y++) {
                brick_element = document.createElement('div');
                brick_element.setAttribute('class','brick_container');
                brick_element.innerHTML = settings.brick.htmlTemplate;
                container.appendChild(brick_element);
                brick_element.style.webkitTransform   = 'rotateX(0deg) rotateY(0deg) translateX('+ translateX +'px) translateY(' + translateY +'px)';
                brick_element.style.MozTransform      = 'rotateX(0deg) rotateY(0deg) translateX('+ translateX +'px) translateY(' + translateY +'px)';
                brick_element.style.OTransform        = 'rotateX(0deg) rotateY(0deg) translateX('+ translateX +'px) translateY(' + translateY +'px)';
                brick_element.style.MSTransform       = 'rotateX(0deg) rotateY(0deg) translateX('+ translateX +'px) translateY(' + translateY +'px)';
                brick_element.style.transform         = 'rotateX(0deg) rotateY(0deg) translateX('+ translateX +'px) translateY(' + translateY +'px)';
            }
            translateX = translateX + 20;
            translateY = translateY - 120;
        }
        window.wall = wall;
        document.querySelector('.detonator').addEventListener('click',function () {
            wall.explode();
        }, false);
    }());
}, false);