import './App.css'
import './style/colors.scss'
import './style/fonts.scss'

import QR from './components/common/QR/QR'
import qrImg from './assets/images/image-qr-code.png'

function App() {
  return (
    <div className="App">
      <QR
      img={qrImg}

      title={`Improve your front-end\n
      skills by building projects`}

      description={`Scan the QR code to visit Frontend\n
      Mentor and take your coding skills to\n
      the next level`}
      />
    </div>
  )
}

export default App
