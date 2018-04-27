import React, { Component } from 'react'
import ListConstacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'
import { Route } from 'react-router-dom'

class App extends Component {
  state = {
      contacts : []
  }

  componentDidMount() {
    ContactsAPI.getAll()
      .then((contacts) => {
        this.setState(() => ({
          contacts
        }))
      })
  }

  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id
      })
    }))

    ContactsAPI.remove(contact)
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <ListConstacts 
              contacts={this.state.contacts} 
              onDeleteContact={this.removeContact}
            />
        )} />
        <Route path='/create' component={CreateContact} />
      </div>
    )
  }
}

export default App
