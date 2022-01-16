const themes = [{
  name: '8008', bgColor: '#333a45', mainColor: '#f44c7f', subColor: '#939eae', textColor: '#e9ecf0',
},
{
  name: '80s_after_dark', bgColor: '#1b1d36', mainColor: '#fca6d1', subColor: '#99d6ea', textColor: '#fca6d1',
},
{
  name: '9009', bgColor: '#eeebe2', mainColor: '#080909', subColor: '#99947f', textColor: '#080909',
},
{
  name: 'alduin', bgColor: '#1c1c1c', mainColor: '#dfd7af', subColor: '#444444', textColor: '#f5f3ed',
},
{
  name: 'aether', bgColor: '#101820', mainColor: '#eedaea', subColor: '#cf6bdd', textColor: '#eedaea',
},
{
  name: 'alpine', bgColor: '#6c687f', mainColor: '#ffffff', subColor: '#9994b8', textColor: '#ffffff',
},
{
  name: 'arch', bgColor: '#0c0d11', mainColor: '#7ebab5', subColor: '#454864', textColor: '#f6f5f5',
},
{
  name: 'bento', bgColor: '#2d394d', mainColor: '#ff7a90', subColor: '#4a768d', textColor: '#fffaf8',
},
{
  name: 'bingsu', bgColor: '#b8a7aa', mainColor: '#83616e', subColor: '#48373d', textColor: '#ebe6ea',
},
{
  name: 'bliss', bgColor: '#262727', mainColor: '#f0d3c9', subColor: '#665957', textColor: '#fff',
},
{
  name: 'blueberry_dark', bgColor: '#212b42', mainColor: '#add7ff', subColor: '#5c7da5', textColor: '#91b4d5',
},
{
  name: 'blueberry_light', bgColor: '#dae0f5', mainColor: '#506477', subColor: '#92a4be', textColor: '#678198',
},
{
  name: 'botanical', bgColor: '#7b9c98', mainColor: '#eaf1f3', subColor: '#495755', textColor: '#eaf1f3',
},
{
  name: 'bouquet', bgColor: '#173f35', mainColor: '#eaa09c', subColor: '#408e7b', textColor: '#e9e0d2',
},
{
  name: 'bushido', bgColor: '#242933', mainColor: '#ec4c56', subColor: '#596172', textColor: '#f6f0e9',
},
{
  name: 'cafe', bgColor: '#ceb18d', mainColor: '#14120f', subColor: '#d4d2d1', textColor: '#14120f',
},
{
  name: 'camping', bgColor: '#faf1e4', mainColor: '#618c56', subColor: '#c2b8aa', textColor: '#3c403b',
},
{
  name: 'carbon', bgColor: '#313131', mainColor: '#f66e0d', subColor: '#616161', textColor: '#f5e6c8',
},
{
  name: 'chaos_theory', bgColor: '#141221', mainColor: '#fd77d7', subColor: '#676e8a', textColor: '#dde5ed',
},
{
  name: 'comfy', bgColor: '#4a5b6e', mainColor: '#f8cdc6', subColor: '#9ec1cc', textColor: '#f5efee',
},
{
  name: 'copper', bgColor: '#442f29', mainColor: '#b46a55', subColor: '#7ebab5', textColor: '#e7e0de',
},
{
  name: 'cyberspace', bgColor: '#181c18', mainColor: '#00ce7c', subColor: '#9578d3', textColor: '#c2fbe1',
},
{
  name: 'dark', bgColor: '#111', mainColor: '#eee', subColor: '#444', textColor: '#eee',
},
{
  name: 'dark_magic_girl', bgColor: '#091f2c', mainColor: '#f5b1cc', subColor: '#93e8d3', textColor: '#a288d9',
},
{
  name: 'darling', bgColor: '#fec8cd', mainColor: '#ffffff', subColor: '#a30000', textColor: '#ffffff',
},
{
  name: 'dev', bgColor: '#1b2028', mainColor: '#23a9d5', subColor: '#4b5975', textColor: '#ccccb5',
},
{
  name: 'deku', bgColor: '#058b8c', mainColor: '#b63530', subColor: '#255458', textColor: '#f7f2ea',
},
{
  name: 'diner', bgColor: '#537997', mainColor: '#c3af5b', subColor: '#445c7f', textColor: '#dfdbc8',
},
{
  name: 'dollar', bgColor: '#e4e4d4', mainColor: '#6b886b', subColor: '#8a9b69', textColor: '#555a56',
},
{
  name: 'dots', bgColor: '#121520', mainColor: '#fff', subColor: '#676e8a', textColor: '#fff',
},
{
  name: 'dracula', bgColor: '#282a36', mainColor: '#f2f2f2', subColor: '#bd93f9', textColor: '#f2f2f2',
},
{
  name: 'drowning', bgColor: '#191826', mainColor: '#4a6fb5', subColor: '#50688c', textColor: '#9393a7',
},
{
  name: 'dualshot', bgColor: '#737373', mainColor: '#212222', subColor: '#aaaaaa', textColor: '#212222',
},
{
  name: 'ez_mode', bgColor: '#0068c6', mainColor: '#fa62d5', subColor: '#f5f5f5', textColor: '#fa62d5',
},
{
  name: 'fledgling', bgColor: '#3b363f', mainColor: '#fc6e83', subColor: '#ead8d6', textColor: '#fc6e83',
},
{
  name: 'froyo', bgColor: '#e1dacb', mainColor: '#7b7d7d', subColor: '#b29c5e', textColor: '#7b7d7d',
},
{
  name: 'fundamentals', bgColor: '#727474', mainColor: '#7fa482', subColor: '#cac4be', textColor: '#131313',
},
{
  name: 'future_funk', bgColor: '#2e1a47', mainColor: '#f7f2ea', subColor: '#c18fff', textColor: '#f7f2ea',
},
{
  name: 'godspeed', bgColor: '#eae4cf', mainColor: '#9abbcd', subColor: '#c0bcab', textColor: '#646669',
},
{
  name: 'graen', bgColor: '#303c36', mainColor: '#a59682', subColor: '#181d1a', textColor: '#a59682',
},
{
  name: 'grand_prix', bgColor: '#36475c', mainColor: '#c0d036', subColor: '#5c6c80', textColor: '#c1c7d7',
},
{
  name: 'gruvbox_dark', bgColor: '#282828', mainColor: '#d79921', subColor: '#665c54', textColor: '#ebdbb2',
},
{
  name: 'gruvbox_light', bgColor: '#fbf1c7', mainColor: '#689d6a', subColor: '#a89984', textColor: '#3c3836',
},
{
  name: 'hanok', bgColor: '#d8d2c3', mainColor: '#513a2a', subColor: '#513a2a', textColor: '#393b3b',
},
{
  name: 'hammerhead', bgColor: '#030613', mainColor: '#4fcdb9', subColor: '#1e283a', textColor: '#e2f1f5',
},
{
  name: 'honey', bgColor: '#f2aa00', mainColor: '#fff546', subColor: '#a66b00', textColor: '#f3eecb',
},
{
  name: 'horizon', bgColor: '#1C1E26', mainColor: '#c4a88a', subColor: '#db886f', textColor: '#bbbbbb',
},
{
  name: 'iceberg_dark', bgColor: '#161821', mainColor: '#84a0c6', subColor: '#595e76', textColor: '#c6c8d1',
},
{
  name: 'iceberg_light', bgColor: '#e8e9ec', mainColor: '#2d539e', subColor: '#adb1c4', textColor: '#33374c',
},
{
  name: 'ishtar', bgColor: '#202020', mainColor: '#91170c', subColor: '#847869', textColor: '#fae1c3',
},
{
  name: 'joker', bgColor: '#1a0e25', mainColor: '#99de1e', subColor: '#7554a3', textColor: '#e9e2f5',
},
{
  name: 'laser', bgColor: '#221b44', mainColor: '#009eaf', subColor: '#b82356', textColor: '#dbe7e8',
},
{
  name: 'lavender', bgColor: '#ada6c2', mainColor: '#e4e3e9', subColor: '#e4e3e9', textColor: '#2f2a41',
},
{
  name: 'lil_dragon', bgColor: '#ebe1ef', mainColor: '#8a5bd6', subColor: '#ac76e5', textColor: '#212b43',
},
{
  name: 'lime', bgColor: '#7c878e', mainColor: '#93c247', subColor: '#4b5257', textColor: '#bfcfdc',
},
{
  name: 'luna', bgColor: '#221c35', mainColor: '#f67599', subColor: '#5a3a7e', textColor: '#ffe3eb',
},
{
  name: 'magic_girl', bgColor: '#ffffff', mainColor: '#f5b1cc', subColor: '#93e8d3', textColor: '#00ac8c',
},
{
  name: 'mashu', bgColor: '#2b2b2c', mainColor: '#76689a', subColor: '#d8a0a6', textColor: '#f1e2e4',
},
{
  name: 'matcha_moccha', bgColor: '#523525', mainColor: '#7ec160', subColor: '#9e6749', textColor: '#ecddcc',
},
{
  name: 'material', bgColor: '#263238', mainColor: '#80cbc4', subColor: '#4c6772', textColor: '#e6edf3',
},
{
  name: 'matrix', bgColor: '#000000', mainColor: '#15ff00', subColor: '#003B00', textColor: '#adffa7',
},
{
  name: 'menthol', bgColor: '#00c18c', mainColor: '#ffffff', subColor: '#186544', textColor: '#ffffff',
},
{
  name: 'metaverse', bgColor: '#232323', mainColor: '#d82934', subColor: '#5e5e5e', textColor: '#e8e8e8',
},
{
  name: 'metropolis', bgColor: '#0f1f2c', mainColor: '#56c3b7', subColor: '#326984', textColor: '#e4edf1',
},
{
  name: 'miami', bgColor: '#f35588', mainColor: '#05dfd7', subColor: '#94294c', textColor: '#f0e9ec',
},
{
  name: 'miami_nights', bgColor: '#18181a', mainColor: '#e4609b', subColor: '#47bac0', textColor: '#fff',
},
{
  name: 'midnight', bgColor: '#0b0e13', mainColor: '#60759f', subColor: '#394760', textColor: '#9fadc6',
},
{
  name: 'milkshake', bgColor: '#ffffff', mainColor: '#212b43', subColor: '#62cfe6', textColor: '#212b43',
},
{
  name: 'mint', bgColor: '#05385b', mainColor: '#5cdb95', subColor: '#20688a', textColor: '#edf5e1',
},
{
  name: 'mizu', bgColor: '#afcbdd', mainColor: '#fcfbf6', subColor: '#85a5bb', textColor: '#1a2633',
},
{
  name: 'modern_dolch', bgColor: '#2d2e30', mainColor: '#7eddd3', subColor: '#54585c', textColor: '#e3e6eb',
},
{
  name: 'modern_ink', bgColor: '#ffffff', mainColor: '#ff360d', subColor: '#b7b7b7', textColor: '#000000',
},
{
  name: 'monokai', bgColor: '#272822', mainColor: '#a6e22e', subColor: '#e6db74', textColor: '#e2e2dc',
},
{
  name: 'moonlight', bgColor: '#1f2730', mainColor: '#c69f68', subColor: '#4b5975', textColor: '#ccccb5',
},
{
  name: 'mr_sleeves', bgColor: '#d1d7da', mainColor: '#daa99b', subColor: '#9a9fa1', textColor: '#1d1d1d',
},
{
  name: 'mountain', bgColor: '#0f0f0f', mainColor: '#e7e7e7', subColor: '#4c4c4c', textColor: '#e7e7e7',
},
{
  name: 'ms_cupcakes', bgColor: '#ffffff', mainColor: '#5ed5f3', subColor: '#d64090', textColor: '#0a282f',
},
{
  name: 'muted', bgColor: '#525252', mainColor: '#C5B4E3', subColor: '#939eae', textColor: '#B1E4E3',
},
{
  name: 'nautilus', bgColor: '#132237', mainColor: '#ebb723', subColor: '#0b4c6c', textColor: '#1cbaac',
},
{
  name: 'nausea', bgColor: '#323437', mainColor: '#e2b714', subColor: '#646669', textColor: '#d1d0c5',
},
{
  name: 'night_runner', bgColor: '#212121', mainColor: '#feff04', subColor: '#5c4a9c', textColor: '#e8e8e8',
},
{
  name: 'nord', bgColor: '#242933', mainColor: '#d8dee9', subColor: '#617b94', textColor: '#d8dee9',
},
{
  name: 'norse', bgColor: '#242425', mainColor: '#2b5f6d', subColor: '#505b5e', textColor: '#ccc2b1',
},
{
  name: 'oblivion', bgColor: '#313231', mainColor: '#a5a096', subColor: '#5d6263', textColor: '#f7f5f1',
},
{
  name: 'olive', bgColor: '#e9e5cc', mainColor: '#92946f', subColor: '#b7b39e', textColor: '#373731',
},
{
  name: 'olivia', bgColor: '#1c1b1d', mainColor: '#deaf9d', subColor: '#4e3e3e', textColor: '#f2efed',
},
{
  name: 'onedark', bgColor: '#2f343f', mainColor: '#61afef', subColor: '#eceff4', textColor: '#98c379',
},
{
  name: 'paper', bgColor: '#eeeeee', mainColor: '#444444', subColor: '#b2b2b2', textColor: '#444444',
},
{
  name: 'our_theme', bgColor: '#ce1226', mainColor: '#fcd116', subColor: '#6d0f19', textColor: '#ffffff',
},
{
  name: 'pastel', bgColor: '#e0b2bd', mainColor: '#fbf4b6', subColor: '#b4e9ff', textColor: '#6d5c6f',
},
{
  name: 'peaches', bgColor: '#e0d7c1', mainColor: '#dd7a5f', subColor: '#e7b28e', textColor: '#5f4c41',
},
{
  name: 'pulse', bgColor: '#181818', mainColor: '#17b8bd', subColor: '#53565a', textColor: '#e5f4f4',
},
{
  name: 'red_samurai', bgColor: '#84202c', mainColor: '#c79e6e', subColor: '#55131b', textColor: '#e2dad0',
},
{
  name: 'nebula', bgColor: '#212135', mainColor: '#be3c88', subColor: '#19b3b8', textColor: '#838686',
},
{
  name: 'repose_dark', bgColor: '#2F3338', mainColor: '#D6D2BC', subColor: '#8F8E84', textColor: '#D6D2BC',
},
{
  name: 'repose_light', bgColor: '#EFEAD0', mainColor: '#5F605E', subColor: '#8F8E84', textColor: '#333538',
},
{
  name: 'retrocast', bgColor: '#07737a', mainColor: '#88dbdf', subColor: '#f3e03b', textColor: '#ffffff',
},
{
  name: 'rgb', bgColor: '#111', mainColor: '#eee', subColor: '#444', textColor: '#eee',
},
{
  name: 'rose_pine', bgColor: '#1f1d27', mainColor: '#9ccfd8', subColor: '#c4a7e7', textColor: '#e0def4',
},
{
  name: 'rose_pine_dawn', bgColor: '#fffaf3', mainColor: '#56949f', subColor: '#c4a7e7', textColor: '#286983',
},
{
  name: 'red_dragon', bgColor: '#1a0b0c', mainColor: '#ff3a32', subColor: '#e2a528', textColor: '#4a4d4e',
},
{
  name: 'rose_pine_moon', bgColor: '#2a273f', mainColor: '#9ccfd8', subColor: '#c4a7e7', textColor: '#e0def4',
},
{
  name: 'rudy', bgColor: '#1a2b3e', mainColor: '#af8f5c', subColor: '#3a506c', textColor: '#c9c8bf',
},
{
  name: 'serika_dark', bgColor: '#323437', mainColor: '#e2b714', subColor: '#646669', textColor: '#d1d0c5',
},
{
  name: 'sewing_tin', bgColor: '#241963', mainColor: '#f2ce83', subColor: '#446ad5', textColor: '#ffffff',
},
{
  name: 'serika', bgColor: '#e1e1e3', mainColor: '#e2b714', subColor: '#aaaeb3', textColor: '#323437',
},
{
  name: 'sewing_tin_light', bgColor: '#ffffff', mainColor: '#2d2076', subColor: '#385eca', textColor: '#2d2076',
},
{
  name: 'shadow', bgColor: '#000', mainColor: '#eee', subColor: '#444', textColor: '#eee',
},
{
  name: 'shoko', bgColor: '#ced7e0', mainColor: '#81c4dd', subColor: '#7599b1', textColor: '#3b4c58',
},
{
  name: 'retro', bgColor: '#dad3c1', mainColor: '#1d1b17', subColor: '#918b7d', textColor: '#1d1b17',
},
{
  name: 'soaring_skies', bgColor: '#fff9f2', mainColor: '#55c6f0', subColor: '#1e107a', textColor: '#1d1e1e',
},
{
  name: 'solarized_dark', bgColor: '#002b36', mainColor: '#859900', subColor: '#2aa198', textColor: '#268bd2',
},
{
  name: 'solarized_light', bgColor: '#fdf6e3', mainColor: '#859900', subColor: '#2aa198', textColor: '#181819',
},
{
  name: 'sonokai', bgColor: '#2c2e34', mainColor: '#9ed072', subColor: '#e7c664', textColor: '#e2e2e3',
},
{
  name: 'stealth', bgColor: '#010203', mainColor: '#383e42', subColor: '#5e676e', textColor: '#383e42',
},
{
  name: 'strawberry', bgColor: '#f37f83', mainColor: '#fcfcf8', subColor: '#e53c58', textColor: '#fcfcf8',
},
{
  name: 'superuser', bgColor: '#262a33', mainColor: '#43ffaf', subColor: '#526777', textColor: '#e5f7ef',
},
{
  name: 'striker', bgColor: '#124883', mainColor: '#d7dcda', subColor: '#0f2d4e', textColor: '#d6dbd9',
},
{
  name: 'sweden', bgColor: '#0058a3', mainColor: '#ffcc02', subColor: '#57abdb', textColor: '#ffffff',
},
{
  name: 'taro', bgColor: '#b3baff', mainColor: '#130f1a', subColor: '#6f6c91', textColor: '#130f1a',
},
{
  name: 'terminal', bgColor: '#191a1b', mainColor: '#79a617', subColor: '#48494b', textColor: '#e7eae0',
},
{
  name: 'terra', bgColor: '#0c100e', mainColor: '#89c559', subColor: '#436029', textColor: '#f0edd1',
},
{
  name: 'terror_below', bgColor: '#0b1e1a', mainColor: '#66ac92', subColor: '#015c53', textColor: '#dceae5',
},
{
  name: 'tiramisu', bgColor: '#cfc6b9', mainColor: '#c0976f', subColor: '#c0976f', textColor: '#7d5448',
},
{
  name: 'vaporwave', bgColor: '#a4a7ea', mainColor: '#e368da', subColor: '#7c7faf', textColor: '#f1ebf1',
},
{
  name: 'voc', bgColor: '#190618', mainColor: '#e0caac', subColor: '#4c1e48', textColor: '#eeeae4',
},
{
  name: 'vscode', bgColor: '#1e1e1e', mainColor: '#007acc', subColor: '#4d4d4d', textColor: '#d4d4d4',
},
{
  name: 'watermelon', bgColor: '#1f4437', mainColor: '#d6686f', subColor: '#3e7a65', textColor: '#cdc6bc',
},
{
  name: 'wavez', bgColor: '#1c292f', mainColor: '#6bde3b', subColor: '#1a454e', textColor: '#e9efe6',
},
{
  name: 'witch_girl', bgColor: '#f3dbda', mainColor: '#56786a', subColor: '#ddb4a7', textColor: '#56786a',
}];
