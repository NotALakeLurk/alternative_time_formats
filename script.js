const my_event = new MessageEvent("message", { data: { color: "#00dd00", backgroundColor: "dd00dd"} });

setTimeout(() => {
    alert("tet")
    document.querySelector("iframe").contentWindow.postMessage({
        color: "#00dd00", 
        backgroundColor: "#dd00dd"
    });
    alert("tet1")
}, 1000)