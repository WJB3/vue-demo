function triggerWindowResizeEvent(){
    const event=document.createEvent('HTMLEvents');
    event.initEvent('resize',true,true);
    event.eventType="messgae";
    window.dispatchEvent(event);
}

export {
    triggerWindowResizeEvent
}