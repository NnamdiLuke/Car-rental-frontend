import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      <Router>
        {/* <Navbar/> */}
          <Routes>
            <Route path='/' element={
              <Provider store={store}>
                <Home/>
              </Provider>
            }/>
          </Routes>
      </Router>
    </div>
  )
}

export default App
