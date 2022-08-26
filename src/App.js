import React from 'react'
import JokeItem from './components/JokeItem'
import LoadProcess from './components/LoadProcess'

class App extends React.Component {

  constructor() {
    super()
    this.url = 'https://api.chucknorris.io/jokes/search?query=some' 
    this.state = {
      jokes: [],
      loading: false,
    }
    this.handleRead = this.handleRead.bind(this)
  }

  handleRead(id) {
    this.setState(prev => {
      const updatedJokes = prev.jokes.map(joke => {
        if (joke.id === id) {
          joke.isRead = !joke.isRead
        }
        return joke
      })
      return {
        jokes: updatedJokes
      }
      
    })
  }

  componentDidMount() {
    this.setState({ loading: true })
    fetch(this.url)
      .then(res => res.json())
      .then(data => {
        const jokes = data.result.map(joke => {
          joke['isRead'] = false
          return joke
        })
        this.setState({ 
          jokes: jokes,
          loading: false 
        }) 
    }) 
  }

  render() {

    const jokesList = this.state.jokes.map(joke => 
      <JokeItem joke={joke} key={joke.id} handleRead={this.handleRead} />
    )

    return (
      <div>
        <h1>{this.props.title}</h1>
        <div>{this.state.loading ? 
          <LoadProcess title="Loading..." /> : 
          jokesList}
        </div>
      </div>
    )

  }  
}

export default App
