window.onload = function() {
    var dictionary = {
        'hello':{
            'name':'hello',
            'type':'video'
        },
        'hi':{
            'name':'hello',
            'type':'video'
        },
        'goodbye':{
            'name':'goodbye',
            'type':'video'
        },
        
        'a':{'name':'a','type':'image'},'b':{'name':'b','type':'image'},'c':{'name':'c','type':'image'},'d':{'name':'d','type':'image'},
        'e':{'name':'e','type':'image'},'f':{'name':'f','type':'image'},'g':{'name':'g','type':'image'},'h':{'name':'h','type':'image'},
        'i':{'name':'i','type':'image'},'j':{'name':'j','type':'image'},'k':{'name':'k','type':'image'},'l':{'name':'l','type':'image'},
        'm':{'name':'m','type':'image'},'n':{'name':'n','type':'image'},'o':{'name':'o','type':'image'},'p':{'name':'p','type':'image'},
        'q':{'name':'q','type':'image'},'r':{'name':'r','type':'image'},'s':{'name':'s','type':'image'},'t':{'name':'t','type':'image'},
        'u':{'name':'u','type':'image'},'v':{'name':'v','type':'image'},'w':{'name':'w','type':'image'},'x':{'name':'x','type':'image'},
        'y':{'name':'y','type':'image'},'z':{'name':'z','type':'image'},
        
        '0':{'name':'0','type':'image'},'1':{'name':'1','type':'image'},'2':{'name':'2','type':'image'},'3':{'name':'3','type':'image'},
        '4':{'name':'4','type':'image'},'5':{'name':'5','type':'image'},'6':{'name':'6','type':'image'},'7':{'name':'7','type':'image'},
        '8':{'name':'8','type':'image'},'9':{'name':'9','type':'image'}
    };
    
    document.getElementById('search').onkeydown = function(e) {
        if(e.keyCode === 13) {
            e.preventDefault();
            var value = document.getElementById('search').value;
            value = value.toLowerCase();
            value = value.replace(/\s/g,' ');
            value = value.replace(',','');
            value = value.replace('!','');
            value = value.replace('?','');
            value = value.replace('.','');
            var words = value.split(' ');
            var first = true;
            var ul = document.getElementById('results-list');
            var video = document.getElementById('output');
            
            for(var i=0;i<words.length;i++) {
                if(first) {
                    first = false;
                    while(ul.firstChild) { ul.removeChild(ul.firstChild); }
                }
                if(typeof dictionary[words[i]] === 'undefined') {
                    for(var j=0;j<words[i].length;j++) {
                        if(typeof dictionary[words[i].charAt(j)] !== 'undefined') {
                            var li = document.createElement('li');
                            li.innerHTML = dictionary[words[i].charAt(j)].name;
                            if(dictionary[words[i].charAt(j)].type === 'image') {
                                li.onclick = function(event) { video.src = '';video.poster = 'res/images/' + event.target.innerHTML + '.png'; }
                            }
                            else {
                                li.onclick = function(event) { video.poster = '';video.src = 'res/videos/' + event.target.innerHTML + '.mp4'; }   
                            }
                            ul.appendChild(li);
                        }
                    }
                }
                else {
                    var li = document.createElement('li');
                    li.innerHTML = dictionary[words[i]].name;
                    if(dictionary[words[i]].type === 'image') {
                        li.onclick = function(event) { video.src = '';video.poster = 'res/images/' + event.target.innerHTML + '.png'; }
                    }
                    else {
                        li.onclick = function(event) { video.poster = '';video.src = 'res/videos/' + event.target.innerHTML + '.mp4'; }   
                    }
                    ul.appendChild(li);
                }
            }
        }
    }
}