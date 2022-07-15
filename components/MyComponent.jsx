import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { makeStyles, Text, Button, useThemeMode } from '@rneui/themed';
import { Image } from '@rneui/themed';

const HEADS_TEXT = 'heads';
const TAILS_TEXT = 'tails';

const LIGHT_MODE_TEXT = 'light';
const DARK_MODE_TEXT = 'dark';

const COIN_FRONT_PATH = './../assets/50_Kurus-on.png';
const COIN_BACK_PATH = './../assets/50_Kurus-arka.png';

export default function App() {
  const styles = useStyles();
  const { setMode, mode } = useThemeMode();
  const [headsOrTails, setHeadsOrTails] = useState(HEADS_TEXT);
  const [counter, setCounter] = useState({ heads: 0, tails: 0 });

  const handleOnPress = () => {
    setMode(mode === DARK_MODE_TEXT ? LIGHT_MODE_TEXT : DARK_MODE_TEXT);
  };

  const handleHeadsOrTails = () => {
    const isHead = Math.random() < 0.5;

    if (isHead) {
      setHeadsOrTails(HEADS_TEXT);
      setCounter({ ...counter, heads: counter.heads + 1 });
    } else {
      setHeadsOrTails(TAILS_TEXT);
      setCounter({ ...counter, tails: counter.tails + 1 });
    }
  };

  const imageProps = {
    source:
      headsOrTails === HEADS_TEXT
        ? require(COIN_FRONT_PATH)
        : require(COIN_BACK_PATH),
  };

  return (
    <View style={styles.container}>
      <Text h3>50 KURUŞ</Text>
      <Text>YAZI: {counter.heads}</Text>
      <Text>TURA: {counter.tails}</Text>
      <TouchableOpacity onPress={handleHeadsOrTails}>
        <Image {...imageProps} containerStyle={styles.item} />
      </TouchableOpacity>
      <Button onPress={handleOnPress}>
        <Text>Switch Theme</Text>
      </Button>
    </View>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginVertical: theme.spacing.lg,
  },
  item: {
    // aspectRatio: 1,
    // flex: 1,
    width: 200,
    height: 200,
  },
}));
