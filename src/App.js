import React, { Component } from 'react'
import ListConstacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'

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
      <ListConstacts 
        contacts={this.state.contacts} 
        onDeleteContact={this.removeContact}
      />
    )
  }
}

export default App
