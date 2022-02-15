import React, { Suspense } from "react";
import { Fragment } from "react/cjs/react.production.min";
import MainNavigation from "./components/layout/MainNavigation";
import { Redirect, Route, Switch } from "react-router-dom";

import LoadingSpinner from "./components/UI/LoadingSpinner";
import Layout from './components/layout/Layout'
// import AllQuotes from './pages/AllQuotes';
// import QuotesDetail from './pages/QuotesDetail'
// import NewQuotes from "./pages/NewQuotes";
// import NotFound from './pages/NotFound';

const AllQuotes = React.lazy(() => import('./pages/AllQuotes'));
const QuotesDetail = React.lazy(() => import('./pages/QuotesDetail'));
const NewQuotes = React.lazy(() => import("./pages/NewQuotes"));
const NotFound = React.lazy(() => import('./pages/NotFound'));


function App() {
  return (

    <Layout>
      <Suspense fallback={<div className="centered">
        <LoadingSpinner />
      </div>}>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/quotes'></Redirect>
          </Route>
          <Route exact path='/quotes'>
            <AllQuotes />
          </Route>

          <Route path='/quotes/:id'>
            <QuotesDetail />
          </Route>

          <Route path='/new-quotes'>
            <NewQuotes />
          </Route>

          <Route patch='*'>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>

  );
}

export default App;
