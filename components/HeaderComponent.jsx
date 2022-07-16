import React from 'react';
import { Header, makeStyles } from '@rneui/themed';

const COMPONENT_NAME = 'HeaderComponent';
export default function HeaderComponent(props) {
  const styles = useStyles();

  return (
    <Header
      {...props}
      centerComponent={{ text: 'Header', style: styles.heading }}
      rightComponent={{ text: 'Right', style: styles.heading }}
    />
  );
}

const useStyles = makeStyles(() => {
  return {
    heading: {
      color: 'white',
      fontSize: 22,
      fontWeight: 'bold',
    },
  };
});

HeaderComponent.displayName = COMPONENT_NAME;
