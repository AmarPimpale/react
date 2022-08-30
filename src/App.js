// import logo from './logo.svg';
import './App.css';
// import Welcome from './component/Welcome';
// import Hello from './component/Hello';
// import Greet from './component/Greet';
// import Greet from './component/Greet';

// import Message from './component/Message';
import MessageOne from './component/MessageOne';
function App() {
  return (
    <div className="App">
      <MessageOne></MessageOne>
      {/* <Message></Message> */}
      {/* <Welcome/>
      <Hello name = "Amar" nameP = "Hulk">
        <button>Action</button>
      </Hello>
      <Hello name = "Chinmay" nameP = "batman"></Hello>
      <Hello name = "Deepak" nameP = "wonder women">
      </Hello> */}
      {/* <Greet name="Amar" nameP = "Hulk">
        {/* <p>This is child component</p> */}
      {/* </Greet> */}
      {/* <Greet name = "Chinmay" nameP = "superman"> */}
        {/* <button>Action</button> */}
      {/* </Greet> */}
      {/* // <Greet name   = "Deepak" nameP = "wonder women"/> */}

    {/* //    <header className="App-header">
    //      <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a 
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
      // </header>*/}
    </div>
  );
}

export default App;


// by props in not possible to change the text which is existing because props own the property so child can not access the property
