import cx from 'classnames';
import { FC } from 'react';

import type { IconProps } from './types';

export const Icon: FC<IconProps> = ({ icon, className = 'w-5 h-5', style }: IconProps) => (
  <svg
    className={cx({
      'fill-current': true,
      [className]: className,
    })}
    viewBox={icon?.viewBox || '0 0 32 32'}
    style={style}
  >
    <use xlinkHref={`#${icon?.id || icon}`} />
  </svg>
);

export default Icon;
