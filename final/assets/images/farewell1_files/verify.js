$dvbs.pubSub.subscribe('BeforeDecisionRender', '9b2a12b4a76f470297f5a8a26a1bcd11', 'ModifyAdTagWithBsImpId', function(){var impId = '9b2a12b4a76f470297f5a8a26a1bcd11';if($dvbs && $dvbs.tags[impId] && typeof($dvbs.tags[impId].tagAdtag) == 'string') {$dvbs.tags[impId].tagAdtag = $dvbs.tags[impId].tagAdtag.replace(/(?:\[url_encoded_publisher_data\]|%5Burl_encoded_publisher_data%5D|url_encoded_publisher_data|\[DV_IMP_ID\]|%5BDV_IMP_ID%5D|DV_IMP_ID)/g,encodeURIComponent('did9b2a12b4a76f470297f5a8a26a1bcd11did'));}});


try{__tagObject_callback_426295965035({ImpressionID:"9b2a12b4a76f470297f5a8a26a1bcd11", ServerPublicDns:"rtbc-uw2.doubleverify.com"});}catch(e){}
try{$dvbs.pubSub.publish('BeforeDecisionRender', "9b2a12b4a76f470297f5a8a26a1bcd11");}catch(e){}
try{__verify_callback_426295965035({
ResultID:2,
Passback:"",
AdWidth:320,
AdHeight:50});}catch(e){}
try{$dvbs.pubSub.publish('AfterDecisionRender', "9b2a12b4a76f470297f5a8a26a1bcd11");}catch(e){}
