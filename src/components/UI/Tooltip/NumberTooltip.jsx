import NumberFormat from 'react-number-format';
import millify from 'millify';
import Tooltip from './Tooltip';
import { convertToElId as convertToElementId } from '~/modules/utils/common';


export default function NumberTooltip(properties) {
  const {
		      number,
		      id,
	      } = properties;

  if (number && number > 1000) {
    return (
      <Tooltip
        className="top-[5px] left-[110%]"
        id={convertToElementId(`${id}-tooltip`)}
        tooltip={(
          <NumberFormat
            value={number}
            displayType="text"
            thousandSeparator
          />
        )}
      >
        <h2 className="text-4xl w-fit cursor-default" id={convertToElementId(`${id}-number`)}>
          {millify(number)}
        </h2>
      </Tooltip>
    );
  }

  return (
    <h2 className="text-4xl w-fit">
      {millify(number)}
    </h2>
  );
}
