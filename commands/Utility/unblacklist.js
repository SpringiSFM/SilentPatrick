function _0x3111(_0x29ffd1,_0x3acfdc){const _0x1c8f46=_0x22d9();return _0x3111=function(_0x400088,_0x5549ef){_0x400088=_0x400088-0x1e7;let _0x22d9d9=_0x1c8f46[_0x400088];return _0x22d9d9;},_0x3111(_0x29ffd1,_0x3acfdc);}const _0x1bc75f=_0x3111;function _0x22d9(){const _0x14d1c5=['load','tag','zqLnn','blacklisted','has','Xscdz','150HdcSoA','mentions','users','20EIUyuB','527376UsoktP','replace','21tpryLK','22934ivUATz','Enabled','unblacklist','8916498OUvOeV','get','run','NoPermsMessage','apply','Too\x20few\x20arguments\x20given\x0a\x0aUsage:\x0a``unblacklist\x20<@user>``','search','reply','15981180xewpTu','send','Red','1085841flgnvB','1680248bCShoX','./commands.yml','blacklistedUsers','channel','Unblacklist','utf8','EmbedBuilder','1026580AqlliC','member','permissions','Locale','set','setDescription','toString','./config.yml','(((.+)+)+)+$','successfullyUnblacklisted','notBlacklisted','setColor'];_0x22d9=function(){return _0x14d1c5;};return _0x22d9();}(function(_0x48cfa9,_0x2f194c){const _0x5c8e30=_0x3111,_0x308b0f=_0x48cfa9();while(!![]){try{const _0x252f9c=-parseInt(_0x5c8e30(0x204))/0x1+parseInt(_0x5c8e30(0x1f6))/0x2*(-parseInt(_0x5c8e30(0x1ef))/0x3)+-parseInt(_0x5c8e30(0x1f2))/0x4*(parseInt(_0x5c8e30(0x20c))/0x5)+parseInt(_0x5c8e30(0x1f3))/0x6+-parseInt(_0x5c8e30(0x1f5))/0x7*(-parseInt(_0x5c8e30(0x205))/0x8)+parseInt(_0x5c8e30(0x1f9))/0x9+parseInt(_0x5c8e30(0x201))/0xa;if(_0x252f9c===_0x2f194c)break;else _0x308b0f['push'](_0x308b0f['shift']());}catch(_0x313752){_0x308b0f['push'](_0x308b0f['shift']());}}}(_0x22d9,0x97a02));const _0x5549ef=(function(){let _0x3a4157=!![];return function(_0x29c7f8,_0x58e19c){const _0x11e7d9=_0x3a4157?function(){const _0x172412=_0x3111;if(_0x172412(0x1ee)!==_0x172412(0x1eb)){if(_0x58e19c){const _0x2dfcac=_0x58e19c[_0x172412(0x1fd)](_0x29c7f8,arguments);return _0x58e19c=null,_0x2dfcac;}}else{if(_0x56b016){const _0x215123=_0x1c0ff3[_0x172412(0x1fd)](_0x4c9858,arguments);return _0x3e13ea=null,_0x215123;}}}:function(){};return _0x3a4157=![],_0x11e7d9;};}()),_0x400088=_0x5549ef(this,function(){const _0x4b61ee=_0x3111;return _0x400088[_0x4b61ee(0x212)]()['search'](_0x4b61ee(0x214))[_0x4b61ee(0x212)]()['constructor'](_0x400088)[_0x4b61ee(0x1ff)]('(((.+)+)+)+$');});_0x400088();const Discord=require('discord.js'),fs=require('fs'),yaml=require('js-yaml'),config=yaml[_0x1bc75f(0x1e9)](fs['readFileSync'](_0x1bc75f(0x213),_0x1bc75f(0x20a))),commands=yaml[_0x1bc75f(0x1e9)](fs['readFileSync'](_0x1bc75f(0x206),'utf8'));exports[_0x1bc75f(0x1fb)]=async(_0xcc5d5f,_0x1f52ab,_0x246b58)=>{const _0x450e9c=_0x1bc75f;if(!_0x1f52ab[_0x450e9c(0x20d)][_0x450e9c(0x20e)][_0x450e9c(0x1ed)]('ManageChannels'))return _0x1f52ab['reply'](config['Locale'][_0x450e9c(0x1fc)]);let _0x22be27=new Discord['EmbedBuilder']()[_0x450e9c(0x1e8)](_0x450e9c(0x203))[_0x450e9c(0x211)](_0x450e9c(0x1fe)),_0x46dc48=_0x1f52ab[_0x450e9c(0x1f0)][_0x450e9c(0x1f1)]['first']();if(!_0x46dc48)return _0x1f52ab[_0x450e9c(0x200)]({'embeds':[_0x22be27]});let _0x2cb4bd=config[_0x450e9c(0x20f)][_0x450e9c(0x1e7)][_0x450e9c(0x1f4)](/{user}/g,'<@!'+_0x46dc48['id']+'>')[_0x450e9c(0x1f4)](/{user-tag}/g,''+_0x46dc48[_0x450e9c(0x1ea)]);const _0x4c02d8=new Discord['EmbedBuilder']()[_0x450e9c(0x1e8)](_0x450e9c(0x203))[_0x450e9c(0x211)](_0x2cb4bd);if(_0xcc5d5f[_0x450e9c(0x207)][_0x450e9c(0x1ed)](''+_0x46dc48['id'])&&_0xcc5d5f['blacklistedUsers'][_0x450e9c(0x1fa)](''+_0x46dc48['id'],_0x450e9c(0x1ec))===![])return _0x1f52ab[_0x450e9c(0x208)][_0x450e9c(0x202)]({'embeds':[_0x4c02d8]});let _0xe8cb23=config[_0x450e9c(0x20f)][_0x450e9c(0x215)][_0x450e9c(0x1f4)](/{user}/g,'<@!'+_0x46dc48['id']+'>')['replace'](/{user-tag}/g,''+_0x46dc48[_0x450e9c(0x1ea)]);const _0x5acf54=new Discord[(_0x450e9c(0x20b))]()[_0x450e9c(0x1e8)]('Green')[_0x450e9c(0x211)](_0xe8cb23);_0x1f52ab[_0x450e9c(0x208)]['send']({'embeds':[_0x5acf54]}),_0xcc5d5f[_0x450e9c(0x207)][_0x450e9c(0x210)](''+_0x46dc48['id'],![],_0x450e9c(0x1ec));},module['exports']['help']={'name':_0x1bc75f(0x1f8),'enabled':commands['Utility'][_0x1bc75f(0x209)][_0x1bc75f(0x1f7)]};