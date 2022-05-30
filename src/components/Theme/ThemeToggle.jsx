import { useContext } from 'react';
import ThemeContext from './ThemeContext';
import Tooltip from '../UI/Tooltip/Tooltip';
import IconButton from '../UI/Buttons/IconButton';

export default function ThemeToggle(properties) {
  const { theme, setTheme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const themeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div {...properties}>
      <Tooltip className="bottom-[40px] left-[-80%]" tooltip={t('Theme')}>
        <IconButton id="theme-toggle-button" onClick={themeToggle}>
          {theme === 'light' ? <IconCarbonLight /> : <IconCarbonMoon />}
        </IconButton>
      </Tooltip>
    </div>
  );
}
