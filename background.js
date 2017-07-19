(function () {
    'use strict';

    var currentHost = window.location.host;
    var forbiddenHosts = [
        'facebook',
        'twitter',
        'linkedin',
        'myspace',
        'whatsapp',
        'telegram',
        'youtube',
        'vimeo',
        'vine',
        'spotify',
        'deezer',
        'flickr',
        'instagram',
        'pinterest',
        'tumblr'
    ];

    var createmandarator = function(keyword) {
        switch(keyword) {
            case "linkedin":
                var msg = 'Procurando emprego né, fudidoooo?';
                break;
            case "instagram":
            case "pinterest":
            case "flickr":
                var msg = 'Fica vendo fotinha por aí né, fudidoooo?';
                break;
            case "whatsapp":
            case "telegram":
                var msg = 'Só na conversa fiada aí né, fudidoooo?';
                break;
            default:
                var msg = 'Entrando no <span id="mandarator-host" style="text-transform: capitalize; color: #434358; font-weight: bold">' + keyword + '</span> né fudidoooo?<br>tá sem trampo?';
        }

        var d = document.createElement('DIV'); 
        d.id = 'mandarator';
        d.style.width = '800px';
        d.style.height = '600px';
        d.style.marginLeft = '-400px';
        d.style.marginTop = '-300px';
        d.style.left = '50%';
        d.style.top = '50%';
        d.style.position = 'fixed';
        d.style.backgroundColor = '#1D8FCE';
        d.style.border = '2px #434358 solid';
        d.style.zIndex = '999999999999';
        d.innerHTML += '<div style="width: 395px; height: 600px; float: left; text-align: center; background: #1D8FCE"><img src="' + chrome.extension.getURL('images/big-head.png') + '"></div>';
        d.innerHTML += '<div style="width: 400px; height: 600px; float: right; text-align: left; background: #1D8FCE; font: 40pt Arial; color: #000000"><br><br>' + msg + '<br><br><a href="javascript:void(0)" id="mandarator-close" style="font: 25pt Arial; color: lightblue; text-decoration: underline">Sim, fechar o mandarator!</a></div>';
        return d;
    };

    var removemandarator = function() {
        document.body.removeChild(document.getElementById('mandarator'));
    };

    forbiddenHosts.forEach(function (invalid) {
        if (currentHost.search(invalid) !== -1) {
            document.body.insertBefore(createmandarator(invalid), document.body.firstChild);
            document.getElementById('mandarator-close').addEventListener('click', removemandarator);
        };
    });

}());
