import logo from './Symbol_DarkBlue_Transparent.svg';
import './App.css';
import { useFlag } from '@unleash/proxy-client-react';
import { useVariant } from '@unleash/proxy-client-react';

function App({userId}) {
  const enabled = useFlag('AwsomeDemo');
  const variant = useVariant('AwsomeDemo');

  const color = enabled ? variant.name : 'silver';
  

  return (
    <div className="App">
      <header className="App-header" style={{background: color}}>
        {enabled ? <img src={logo} className="App-logo" alt="logo" /> : <p>Disabled</p>}
        <h3>
          UserId: <strong>{userId}</strong>
        </h3>
      </header>
    </div>
  );
}

export default App;
