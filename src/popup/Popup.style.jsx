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
    h-[520px]
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
    flex
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
    pt-3  
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
    p-2 
    h-full 
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

export const CurrentThemeName = styled.div`
  ${tw`
    text-xl 
    text-center 
    py-3  
    mb-2
    font-bold
  `} 

  background :  ${({ bg }) => bg};
  color : ${({ color }) => color};
`;

export const CustomtSettingsWrapper = styled.div`
  ${tw`
    flex 
    flex-col
  `}
`;

export const UseCustomMessage = styled.div`
  ${tw`
    flex 
    justify-between 
    items-center 
    mb-2
  `}
`;

export const Label = styled.label`
  ${tw`
    font-semibold 
    text-lg
  `}
`;

const trackWidth = 38;
const trackHeight = 22;
const borderWidth = 2;

export const SwitchButtonTrack = styled.button`
  ${tw`
    rounded-full 
    border-black 
    relative 
  `}

  width : ${trackWidth}px;
  height : ${trackHeight}px;
  border-width : ${borderWidth}px;
`;

export const SwitchButton = styled.div`
  ${tw` 
    bg-blue-500 
    rounded-full 
    absolute 
  `}

  width : ${trackHeight - 5}px;
  height : ${trackHeight - 5}px;
  top : 50%;
  transform : translateY(-50%);

  left:${({ useCustom }) => (useCustom ? `${trackWidth - trackHeight + 1}px` : '1px')};

  transition : left ease-in-out 100ms;
`;

export const LoadFromButton = styled(ThemeButton)`
  ${tw`
    w-full
  `}
`;

export const Colors = styled.div`
  ${tw`
    flex 
    flex-col  
    relative 
  `}
`;

export const ColorPickerWrapper = styled.div`
  ${tw`
    flex 
    justify-between  
    items-center
    mb-3 
  `}
`;

export const ColorInput = styled.div`
  ${tw` 
    flex  
    items-center
    justify-between
  `}

  .react-colorful{
    ${tw`
      absolute 
      left-0 
      z-[50] 
      top-full
      w-2/3
      h-[110px]
    `}
  }
`;

export const InputField = styled.div`
   ${tw` 
      relative
      flex  
      items-center
      justify-between
    `}

  input {
    ${tw` 
      w-[130px]
      border-2 
      border-black 
      pr-2
      pl-5 
      rounded-full
      py-1 
      lowercase
    `}
  }

  span{
    ${tw`
      absolute 
      left-2 
    `}

    top : 50%;
    transform : translateY(-50%);
  }
`;

export const ToggleButton = styled.button`
  ${tw`
    h-full
    w-[30px] 
    flex
    items-center 
    justify-end 
    text-2xl
  `}
`;
