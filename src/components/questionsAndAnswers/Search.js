import React from 'react';
import QuestionsList from './QuestionsList.js';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const searchIcon = <FontAwesomeIcon icon={faSearch} />

class Search extends React.Component {

  render() {
    return(
      <Container>
         <div class="input-group mb-5">
        <input type="text" class="form-control py-2 border-right-0 border" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
      <div class="input-group-append">
        <button class="btn btn-outline-secondary border-left-0 border" type="button">{searchIcon}</button>
         </div>
        </div>
      </Container>
    )
  }
}

export default Search;

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     questions: [
  //       'Where is my dog?',
  //       'Whose cat is that?',
  //       'What do they do with my tuition money?',
  //       'When will I be hired?',
  //       'Why do I trip so much when I am sober?',
  //       'How am I even surviving this camp?'
  //     ],
  //     searchTerm: ''
  //   };
  // };

  // editSearchTerm (e) {
  //   this.setState({searchTerm: e.target.value});
  // };

  // dynamicSearch() {
  //   return this.state.questions.filter(question => question.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
  // }

  // render() {
  //   return (
  //     <div>
  //       <form>
  //         <input type='text' value={this.state.searchTerm} onChange={this.editSearchTerm} placeholder='Have a question? Search for answers'/>
  //       </form>
  //       <br></br>
  //       <h6>questions list from dummy data</h6>
  //       <QuestionsList question={this.dynamicSearch()}/>
  //     </div>
  //   );
  // }