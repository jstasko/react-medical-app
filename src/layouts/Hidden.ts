import PropTypes from 'prop-types';
// material
import {Theme, useMediaQuery} from '@mui/material';

// ----------------------------------------------------------------------

Hidden.propTypes = {
  children: PropTypes.node,
  width: PropTypes.oneOf([
    'xsDown',
    'smDown',
    'mdDown',
    'lgDown',
    'xlDown',
    'xsUp',
    'smUp',
    'mdUp',
    'lgUp',
    'xlUp'
  ]).isRequired
};

export default function Hidden({ width, children }) {
  const breakpoint = width.substring(0, 2);

  const hiddenUp = useMediaQuery((theme: Theme) => {
    return theme.breakpoints.up(breakpoint)
  });
  const hiddenDown = useMediaQuery((theme: Theme) => theme.breakpoints.down(breakpoint));

  if (width.includes('Down')) {
    return hiddenDown ? null : children;
  }

  if (width.includes('Up')) {
    return hiddenUp ? null : children;
  }

  return null;
}
