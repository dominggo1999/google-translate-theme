window.addEventListener('load', () => {
  const inputArea = document.querySelector('textarea');

  window.addEventListener('keydown', (e) => {
    const ttsSource = document.querySelector('div.r375lc > div > div:nth-child(3) > div:nth-child(1) > span > button');

    const ttsTarget = document.querySelector('.BdDRKe > .aJIq1d.DSmisd div:nth-child(3) > div:nth-child(1) > span > button');

    const key = e.key;

    if(key === 'q' && e.ctrlKey) {
      inputArea && inputArea.focus();
    }

    if(key === 'm' && e.ctrlKey) {
      ttsSource && ttsSource.click();
      setTimeout(() => {
        inputArea.focus();
      }, 500);
    }

    if(key === ',' && e.ctrlKey) {
      ttsTarget && ttsTarget.click();
      setTimeout(() => {
        inputArea.focus();
      }, 600);
    }
  });
});
