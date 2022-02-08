import './App.css';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import SearchForm  from './SearchForm.jsx'
import Push from './Push'

function App() {
    return (
        <Router>
            <div className="App px-5">
                <header className="App-header h-40">
                    <a className="App-link text-3xl"
                       href="/"
                        /*/!*target="_blank"*!/
                        rel="noopener noreferrer"*/
                    >研究生入学考试初试成绩登记与排名系统</a>
                </header>
               {/* <nav>
                    <ul>
                        <li>
                            <Link to="/">Index</Link>
                        </li>
                    </ul>
                </nav>*/}
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch >
                    <Route path="/search" >
                        <SearchForm/>
                    </Route>
                    <Route exact path="/">
                        <Push />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}


/*class Children extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: 'World'
        }
    }

    handleClick = () => {
        this.setState({
            date: 'Redux'
        })
    }

    /!*  render() {
        return (
            <div>
              Hello,{this.state.date}
              <button onClick={this.handleClick}>更新</button>
            </div>
        )
      }*!/
    render() {
        return (
            <input type="text" onChange={(event => this.props.handleChange(event.target.value))} />
        )
    }
}*/

export default App;
