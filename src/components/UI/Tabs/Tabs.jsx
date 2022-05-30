import { useEffect, useState, useRef } from 'react';


export default function Tabs(properties) {
  const [tabsIndex, setTabsIndex] = useState(1);
  const [style, setStyle] = useState({});
  const tabsReference = useRef(null);
  let tabs;

  useEffect(() => {
    if (tabsIndex && properties.children && tabsReference.current) {
      tabs = tabsReference.current.querySelectorAll('a');

      // eslint-disable-next-line no-unused-vars
      for (const [index, tab] of tabs.entries()) {
        tab.addEventListener('click', () => {
          setTabsIndex(index + 1);
        });
      }
    }
  }, []);

  useEffect(() => {
    if (tabsIndex && properties.children && tabsReference.current) {
      tabs = tabsReference.current.querySelectorAll('a');
      let distance = 0;

      // eslint-disable-next-line no-unused-vars
      for (const [index, tab] of tabs.entries()) {
        if (index < tabsIndex - 1) {
          distance += tab.offsetWidth;
        }
        tab.classList.remove('tab-active');
      }

      tabs[tabsIndex - 1].classList.add('tab-active');

      const newStyle = {
        width: tabs[tabsIndex - 1].clientWidth,
        transform: `translate(${distance}px)`,
      };
      setStyle(newStyle);
    }
  }, [tabsIndex]);

  return (
    <div className="tabs tabs-boxed inline-block z-1">
      <span
        className="absolute bg-sky-800 h-8 transform transition-all ease-in-out duration-400 transform rounded"
        style={style}
      />

      <div ref={tabsReference}>{properties.children}</div>
    </div>
  );
}
