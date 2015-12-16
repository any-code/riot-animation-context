describe('Application specs', function () {
    var element;

    function getEventListener(type, action){
        var el = document.createElement('no-el'),
            hash = {},
            i

        hash[type] = type + action
        hash['Moz' + type[0].toUpperCase() + type.slice(1)] = type + action
        hash['Webkit' + type[0].toUpperCase() + type.slice(1)] = 'webkit' + type[0].toUpperCase() +
            type.slice(1) + action[0].toUpperCase() + action.slice(1)
        hash['O' + type[0].toUpperCase() + type.slice(1)] = 'o' + type[0].toUpperCase() +
            type.slice(1) + action[0].toUpperCase() + action.slice(1)

        for(i in hash){
            if(el.style[i] !== undefined){ return hash[i] }
        }

        return 'fallback';
    }

    beforeEach(function () {
        element = document.createElement('animation-context');
        element.setAttribute("animate-in", "fadeIn")
        element.setAttribute("animate-out", "fadeOut")
        document.body.innerHTML = '';
        document.body.appendChild(element);
    })

    it('mounts the tag', function () {
        riot.mount('animation-context')
        expect(document.querySelector('div[name=context]').className)
            .to.be('not-ready')
    })

    it('mounts the tag and animates on mount', function (done) {
        element.setAttribute("animate-on-mount", "true")

        element.addEventListener(getEventListener('animation', 'start'), function() {
            expect(document.querySelector('div[name=context]').className)
                .to.be('animated fadeIn')
        });

        element.addEventListener(getEventListener('animation', 'end'), function() { done(); });

        riot.mount('animation-context')
    })

    it('unmounts the tag after animate out', function (done) {
        this.timeout(3000);
        element.setAttribute("animate-on-mount", "true")
        element.addEventListener(getEventListener('animation', 'start'), function() {
            if (out) {
                expect(document.querySelector('div[name=context]').className)
                    .to.be('animated fadeOut')

            } else {
                expect(document.querySelector('div[name=context]').className)
                    .to.be('animated fadeIn')
            }
        });

        element.addEventListener(getEventListener('animation', 'end'), function() {
            if (!out) {
                out = true;
                tag.out()
            }
        });

        var tag = riot.mount('animation-context')[0],
            out = false;

        tag.on('unmount', function(){
            expect(done).to.be.ok();
            done();
        });
    })

    it('triggers animation-in after animate in', function (done) {
        this.timeout(3000);
        element.setAttribute("animate-on-mount", "false")
        element.setAttribute("animate-auto-in-delay", "1000")
        var tag = riot.mount('animation-context')[0];

        tag.on('animation-in', function() {
            expect(document.querySelector('div[name=context]').className)
                .to.be('animated fadeIn')
            done()
        })
    })

})
