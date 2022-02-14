(() => {
  const runtime = chrome ? chrome.runtime : browser.runtime;

  const messageToBackground = async (message) => {
    await runtime?.sendMessage(message);
  };

  const targetNode = document.querySelectorAll('#gb > div.gb_Jd.gb_0d.gb_Pd.gb_Od > div.gb_Td.gb_Va.gb_Id > div:not(.gb_Pe)');

  // Options for the observer (which mutations to observe)

  const config = { childList: true, subTree: true, attributes: true };

  // Callback function to execute when mutations are observed
  const callback = (mutationsList, observer) => {
    for (let i = 0; i < mutationsList.length; i += 1) {
      const googleAccountIframe = mutationsList[i].target.querySelector('iframe');
      const src = googleAccountIframe.src;
      const isApp = src.match('app');

      if(googleAccountIframe) {
        messageToBackground({
          message: 'inject css to iframe',
          frameType: isApp ? 'app' : 'account',
        });

        observer.disconnect();

        return;
      }
    }
  };

  // Start observing the target node for configured mutations
  if(targetNode) {
    for (let i = 0; i < targetNode.length; i += 1) {
    // Create an observer instance linked to the callback function
      const observer = new MutationObserver(callback);
      observer.observe(targetNode[i], config);
    }
  }
})();
