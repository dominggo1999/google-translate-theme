import tw, { styled } from 'twin.macro';

import {
  Tab as UnstyledTab,
  TabList as UnstyledTabList,
  Tabs as UnstyledTabs,
  TabPanel as UnstyledTabPanel,
} from 'react-tabs';

export const PopupWrapper = styled.div`
  ${tw`
    w-[345px]
    h-[340px]
  `}
`;

export const ItemWrapper = styled.div`
  ${tw`
    flex 
    w-full
    justify-between
  `}
`;

export const Title = styled.p`
  ${tw`
    text-2xl
  `}
`;

export const SearchField = styled.div`
  ${tw`
    pl-2
  `}
  
  padding-right : calc(16px + 0.5rem);

  input{
    ${tw`
      w-full
      rounded-2xl 
      py-2 
      mb-2 
      font-semibold 
      text-lg 
      text-black 
      border-2 
      border-black 
      px-3
    `}
  }
`;

export const Tabs = styled(UnstyledTabs)`
  ${tw` 
    h-full 
    flex-col
    justify-between  
  `} 
`;

export const Tab = styled(UnstyledTab).attrs({
  selectedClassName: 'selected',
  disabledClassName: 'disabled',
})`

  ${tw`
    font-semibold 
    cursor-pointer 
    py-2
    px-3 
    rounded-full 
    font-bold
  `}
  
  &.selected {
    ${tw`
      text-red-500 
    `}
  }
`;

export const TabList = styled(UnstyledTabList)`
  ${tw`   
    flex   
    md:pt-0  
    gap-x-3 
    mb-3 
    py-3  
    px-2
  `}

  background-color : ${({ bg }) => bg};


  ${Tab} {
    color : ${({ color }) => color};
    background: rgba(0,0,0,.1);
  } 

  ${Tab}.selected {
    color : ${({ bg }) => bg};
    background :  ${({ main }) => main};
  }
`;

export const TabPanel = styled(UnstyledTabPanel).attrs({ selectedClassName: 'selected' })`
  ${tw`
    hidden 
    h-full 
    p-2
  `}

  &.selected {
    ${tw` 
      block  
      overflow-y-auto
    `}
  }
`;

Tab.tabsRole = 'Tab';
Tabs.tabsRole = 'Tabs';
TabPanel.tabsRole = 'TabPanel';
TabList.tabsRole = 'TabList';

export const ThemeList = styled.div`
  ${tw`
    flex 
    flex-col
  `}
`;

export const ThemeButton = styled.button`
  ${tw`
    rounded-2xl 
    py-2 
    mb-2 
    font-semibold 
    text-lg
  `}
`;
