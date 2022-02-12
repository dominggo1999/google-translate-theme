(() => {
  const runtime = chrome ? chrome.runtime : browser.runtime;

  const messageToBackground = async (message) => {
    await runtime?.sendMessage(message);
  };

  const targetNode = document.querySelector('#gb > div.gb_Jd.gb_0d.gb_Pd.gb_Od > div.gb_Td.gb_Va.gb_Id > div:nth-child(2)');

  // Options for the observer (which mutations to observe)

  const config = { childList: true, subTree: true, attributes: true };

  // Callback function to execute when mutations are observed
  const callback = (mutationsList, observer) => {
    const googleAccountIframe = targetNode.querySelector('#gb > div.gb_Jd.gb_0d.gb_Pd.gb_Od > div.gb_Td.gb_Va.gb_Id > div:nth-child(2) > iframe');

    if(googleAccountIframe) {
      messageToBackground({
        message: 'inject css to iframe',
      });

      observer.disconnect();
    }
  };

  if(targetNode) {
    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
  }
})();
