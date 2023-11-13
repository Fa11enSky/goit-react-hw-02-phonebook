import { nanoid } from 'nanoid';
import { Component } from 'react';
import css from './contactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleInput = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    const { name } = newContact;
    if (this.props.check(name)) {
      alert(` ${name} is already in contacts`);
      return;
    }
    this.props.update(newContact);
  };
  render() {
    return (
      <form className={css.main_form} onSubmit={this.handleSubmit}>
        <label className={css.label}>
          Name
          <input
            className={css.contact_input}
            onInput={this.handleInput}
            type="text"
            name="name"
            required
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.contact_input}
            type="tel"
            name="number"
            required
            onInput={this.handleInput}
          />
        </label>

        <button className={css.contact_btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
