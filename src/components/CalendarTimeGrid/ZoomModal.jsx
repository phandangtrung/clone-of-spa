import { useState } from 'react';
import useOnClickOutside from '~/hooks/useOnClickOutside';
import { usePopper } from 'react-popper';
import LineIcon from '~/assets/icons/Line.svg';

const ZoomModal = (props) => {
  const { t } = useTranslation();
  const { id = '', container, show, onShow, zoomRange, onChangeZoom } = props;
  const [popperElement, setPopperElement] = useState(null);

  useOnClickOutside(popperElement, () => {
    if (show) {
      onShow(false);
    }
  });

  const popper = usePopper(container, popperElement, {
    placement: 'bottom-end',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [112, 20],
        },
      },
    ],
  });

  if (!show || !container) return null;

  return (
    <div
      id={id}
      tabIndex={-1}
      style={popper.styles.popper}
      className="bg-white text-center rounded shadow z-999 border border-neutral-200 p-4"
      {...popper.attributes.popper}
      ref={setPopperElement}
      role="dialog"
    >
      <div>
        <label htmlFor="steps-range" className="block mb-2 text-base font-medium text-gray-900">
          {t('Calendar Zoom')}
        </label>
        <div className="flex flex-col space-y-2 p-2 w-64">
          <input type="range" className="w-full" min="1" max="4" step="1" value={zoomRange} onChange={onChangeZoom} />
          <ul className="flex justify-between w-full px-[20px] pt-4">
            <li className="flex items-center justify-center relative">
              <span className="absolute">{t('Large')}</span>
            </li>
            <li className="flex items-center justify-center relative w-8">
              <span className="absolute">
                <img src={LineIcon} alt="range" />
              </span>
            </li>
            <li className="flex items-center justify-center relative w-8">
              <span className="absolute">
                <img src={LineIcon} alt="range" />
              </span>
            </li>
            <li className="flex items-center justify-center relative">
              <span className="absolute">{t('Small')}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ZoomModal;
