import Todo from './Components/Todo'
import TodoAdd from './Components/todoAdd'
import {Provider} from 'react-redux'
import { store } from './Todoslices/store'

function App() {

  return (
    <Provider store={store}>
      <div>
      <TodoAdd/>
      <Todo/>
      </div>
    </Provider>
  )
}

export default App
