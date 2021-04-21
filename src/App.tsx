import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import { CommentsPage } from './pages/Comments.page';
import { HomePage } from './pages/Home.page';
import { FormComment } from './pages/FormComment.page';

function App() {
  return (
    <Router>
      <div className="ui container">
        <div className="ui one item menu">
          <Link to="/" className="active item">Posts</Link>
        </div>
        <Switch>
          <Route path="/add-comment/:postId">
            <FormComment />
          </Route>
          <Route path="/comments/:postId">
            <CommentsPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
