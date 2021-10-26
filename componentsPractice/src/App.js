import logo from './logo.svg';
import './App.css';
import './components/Greet'
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './components/myStyles.css'
import styles from './components/myStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import Table from './components/Table';
import Parent from './components/Parent'
import HookCounter from './components/HookCounter';
import HookSetObject from './components/HookSetObject';
import HookSetArray from './components/HookSetArray';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import C from './components/C'
import React from 'react';

export const UserContext = React.createContext()
export const SkillContext = React.createContext()
function App() {
  return (
    <div className="App">
      {/* <UserContext.Provider value='Thrisha'>
        <SkillContext.Provider value='REACT'>
          <C />
        </SkillContext.Provider>
      </UserContext.Provider> */}

      <MouseContainer />
      {/* <HookMouse /> */}
      {/* <HookSetArray /> */}
      {/* <HookSetObject /> */}
      {/* <HookCounter /> */}
      {/* <Parent /> */}
    
    {/* <Table/> */}
      {/* <LifecycleA/> */}

      {/* <Form></Form> */}

      {/* <h2 className='error'>Error</h2>
      <h2 className={styles.success}>Success</h2>


      <Inline /> */}
      {/* <Stylesheet primary={false}/> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/>
      <ClassClick/>
      <FunctionClick/>
      <Counter/>
    <Message/>
      <Greet name='Thrisha' age='21'>
        <button>Click me</button>
      </Greet>
      <Greet name='Sravani' age='20'/>

      <Welcome name='Thrisha' age='21'>
        <button>Click me</button>
      </Welcome>

      <Welcome name='Sravani' age='20'/>
      <Hello /> */}
    </div>
  );
}

export default App;
