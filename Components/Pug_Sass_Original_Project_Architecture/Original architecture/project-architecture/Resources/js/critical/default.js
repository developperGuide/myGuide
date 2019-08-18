const loadDeferredStyles = () => {
	const addStylesNode = document.getElementById("deferred-styles");
  const replacement = document.createElement("div");
  replacement.innerHTML = addStylesNode.textContent;
  document.body.appendChild(replacement);
  addStylesNode.parentElement.removeChild(addStylesNode);
};
const raf = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame;
if(raf){
  raf(() => {
      window.setTimeout(loadDeferredStyles, 0);
  });
} else {
  window.addEventListener('load', loadDeferredStyles);
}

function imageLoad() {
    const imgDefer = document.getElementsByTagName('img');
    for (let i=0; i<imgDefer.length; i++) {
        if(imgDefer[i].getAttribute('data-src')) {
            imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
        }
    }
}

window.onload = imageLoad;
