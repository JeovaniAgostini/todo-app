import Home from "./pages/Home/Home";
import './global.scss'
import store from "./redux/store"
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default App
