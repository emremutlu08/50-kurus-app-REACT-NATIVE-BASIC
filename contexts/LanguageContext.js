import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

export const DEFAULT_LANGUAGE = 'en';
export const LANGUAGES = ['en', 'tr'];
export const LanguageContext = React.createContext(null);

export default function LanguageProvider(props) {
  const [selectedLanguage, setSelectedLanguage] = useState(DEFAULT_LANGUAGE);

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
}

LanguageProvider.propTypes = {
  children: PropTypes.node,
};
