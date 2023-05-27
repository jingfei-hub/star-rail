threads.start(function(){sleep(300);click(783,1805);})
requestScreenCapture();
launchApp("崩坏：星穹铁道");
sleep(500);

while(1){
img=captureScreen();
var s1 = images.detectsColor(img,"#EBD599",1721,80);
var s2 = images.detectsColor(img, "#EBD599",1596,80);
if((!s1)&&s2){
    click(1721,60);
}
sleep(2000);}