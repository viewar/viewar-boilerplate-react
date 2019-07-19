import React from 'react';
import cx from 'classnames';

import styles from './text-button.scss';
import global from '../../css/global.scss'

export default ({
  label,
  hidden,
  selection,
  active,
  inActive,
  className,
  onClick,
  disabled,
}) => (
  <div
    className={cx(
      styles.TextButton,
      global.TextButtonColor,
      global.TextButtonBackgroundColor,
      hidden && styles.isHidden,
      selection && styles.isSelection,
      active && styles.isActive,
      inActive && styles.isInActive,
      disabled && styles.isDisabled,
      className
    )}
    onClick={() => onClick && !disabled && onClick()}
  >
    {label}
  </div>
);