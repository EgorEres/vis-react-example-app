import './style.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import Graph from 'vis-react'
import data from './data'

class App extends React.Component {
  render () {
    return (
      <div className='main-app'>
        <Graph
          graph={data.graph}
          options={data.options}
        />
      </div>
    )
  }
}

const parentElement = document.createElement('div')
document.body.appendChild(parentElement)

ReactDOM.render(<App />, parentElement)
