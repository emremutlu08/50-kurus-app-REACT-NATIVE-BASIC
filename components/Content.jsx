import React, { useContext, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { makeStyles, Text, Button, useThemeMode } from '@rneui/themed';
import { Image } from '@rneui/themed';
import { LanguageContext } from '../contexts/LanguageContext';

const TITLE = '50 KURUŞ';
const SWITCH_THEME_TEXT = 'Tema Değiştir';

const HEADS_TEXT = 'YAZI';
const TAILS_TEXT = 'TURA';

const LIGHT_MODE_TEXT = 'light';
const DARK_MODE_TEXT = 'dark';

const COIN_FRONT_PATH = './../assets/50_Kurus-on.png';
const COIN_BACK_PATH = './../assets/50_Kurus-arka.png';

export default function Content() {
  const styles = useStyles();
  const { setMode, mode } = useThemeMode();
  const [headsOrTails, setHeadsOrTails] = useState(HEADS_TEXT);
  const [counter, setCounter] = useState({
    heads: 0,
    tails: 0,
  });
  const { selectedLanguage } = useContext(LanguageContext);

  const handleThemeChange = () => {
    setMode(mode === DARK_MODE_TEXT ? LIGHT_MODE_TEXT : DARK_MODE_TEXT);
  };

  const handleHeadsOrTails = () => {
    const isHead = Math.random() < 0.5;

    if (isHead) {
      setHeadsOrTails(HEADS_TEXT);
      setCounter({
        ...counter,
        heads: counter.heads + 1,
      });
    } else {
      setHeadsOrTails(TAILS_TEXT);
      setCounter({
        ...counter,
        tails: counter.tails + 1,
      });
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
      <Text h3>{TITLE}</Text>
      <Text>
        <Text style={styles.coinFaceText}>{HEADS_TEXT}:</Text>
        <Text>{counter.heads}</Text>
      </Text>
      <Text>
        <Text style={styles.coinFaceText}>{TAILS_TEXT}:</Text>
        <Text>{counter.tails}</Text>
      </Text>
      <TouchableOpacity onPress={handleHeadsOrTails}>
        <Image {...imageProps} containerStyle={styles.image} />
      </TouchableOpacity>
      <Button style={styles.themeChange} onPress={handleThemeChange}>
        <Text>{SWITCH_THEME_TEXT}</Text>
      </Button>
      <Text>{selectedLanguage}</Text>
    </View>
  );
}

const useStyles = makeStyles((theme) => {
  return {
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      marginVertical: theme.spacing.lg,
    },
    image: {
      // aspectRatio: 1,
      // flex: 1,
      width: 200,
      height: 200,
    },
    themeChange: {
      marginVertical: theme.spacing.lg,
    },
    coinFaceText: {
      fontWeight: 'bold',
    },
  };
});
