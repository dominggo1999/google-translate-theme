window.addEventListener('load', () => {
  const inputArea = document.querySelector('textarea');

  window.addEventListener('keydown', (e) => {
    const ttsSource = document.querySelector('div.r375lc > div > div:nth-child(3) > div:nth-child(1) > span > button');

    const ttsTarget = document.querySelector('.BdDRKe > .aJIq1d.DSmisd div:nth-child(3) > div:nth-child(1) > span > button');

    const selectSource = document.querySelector('#yDmH0d > c-wiz > div > div.WFnNle > c-wiz > div.OlSOob > c-wiz > div.ccvoYb > div.aCQag > c-wiz > div.zXU7Rb > c-wiz > div:nth-child(2) > button > div.VfPpkd-Bz112c-RLmnJb');

    const selectTarget = document.querySelector('#yDmH0d > c-wiz > div > div.WFnNle > c-wiz > div.OlSOob > c-wiz > div.ccvoYb > div.aCQag > c-wiz > div.zXU7Rb > c-wiz > div:nth-child(5) > button > div.VfPpkd-Bz112c-RLmnJb');

    const key = e.key;

    if(key === 'q' && e.ctrlKey) {
      inputArea && inputArea.focus();
    }

    if(key === ',' && e.ctrlKey) {
      ttsSource && ttsSource.click();
      setTimeout(() => {
        inputArea.focus();
      }, 500);
    }

    if(key === '.' && e.ctrlKey) {
      ttsTarget && ttsTarget.click();
      setTimeout(() => {
        inputArea.focus();
      }, 600);
    }

    if(key === ';' && e.ctrlKey) {
      selectSource && selectSource.click();
    }

    if(key === "'" && e.ctrlKey) {
      selectTarget && selectTarget.click();
    }
  });
});
