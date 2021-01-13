

//--------------------------


var ray = (function(){ //this is a module function

    var DEFAULT = { //This helps your function to always return something.
        say: 'Hi!',
        speed: 'normal'
    }
    return { 
        speak: function(){
            var visitation = arguments[0] || "" ;
            var greetings = visitation.say || DEFAULT.say;
            console.log(greetings);
            return this; /*This allows you to reuse the Speak object
            multiple times in your your script section on the html.*/
        },
        run: function(){//Plus this Run element, it's called Chaining.
            var visitation = arguments[0] || "" ;
            var running = visitation.speed || DEFAULT.speed;
            console.log('running ....' + running);
            return this; /*This allows you to reuse the Run object
            multiple times in your your script section on the html.*/
        }
    }
})();