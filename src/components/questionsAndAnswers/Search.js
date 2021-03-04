import React from 'react';
import QuestionsList from './QuestionsList.js';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        'Where is my dog?',
        'Whose cat is that?',
        'What do they do with my tuition money?',
        'When will I be hired?',
        'Why do I trip so much when I am sober?',
        'How am I even surviving this camp?'
      ],
      searchTerm: ''
    };
  };

  editSearchTerm (e) {
    this.setState({searchTerm: e.target.value});
  };

  dynamicSearch() {
    return this.state.questions.filter(question => question.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
  }

  render() {
    return (
      <div>
        <form>
          <input type='text' value={this.state.searchTerm} onChange={this.editSearchTerm} placeholder='Have a question? Search for answers'/>
        </form>
        <br></br>
        <h6>questions list</h6>
        <QuestionsList question={this.dynamicSearch()}/>
      </div>
    );
  }
}

export default Search