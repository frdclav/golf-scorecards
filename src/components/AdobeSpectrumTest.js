import * as React from "react"
import {Provider, defaultTheme, Button} from '@adobe/react-spectrum'


const AdobeSpectrumTest = () => {
    return (
      <Provider theme={defaultTheme}>
        <Button variant="cta" onPress={() => alert('Hey there!')}>
          Hello React Spectrum!
        </Button>
      </Provider>
    );
  }

  export default AdobeSpectrumTest