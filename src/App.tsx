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

function App() {
  return (
    <Router>
      <div>
        <Link to="/">POSTS</Link>
      </div>
      <Switch>
        <Route path="/comments/:postId">
          <CommentsPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
