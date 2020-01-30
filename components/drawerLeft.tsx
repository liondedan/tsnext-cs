import React from 'react';
import Drawer from '@material-ui/core/Drawer';

interface DrawerProp {
  status: boolean;
}

const DrawerLeft: React.SFC<DrawerProp> = ({ status }) => {
  const [state, setState] = React.useState({
    open: false,
  });

  React.useEffect(() => {
    setState({ open: status });
  }, [status]);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, open });
  };

  return (
    <Drawer open={state.open} onClose={toggleDrawer(false)}>
      content
    </Drawer>
  );
};

export default DrawerLeft;
