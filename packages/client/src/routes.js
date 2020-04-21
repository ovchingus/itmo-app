import React from 'react'
import Cookies from 'js-cookie'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/core/styles'

import Layout from './components/Layout'
import getTheme from './theme'
import store from './store'

import WatchersPage from './modules/watchers'
import HomePage from './modules/home'
import AnswersPage from './modules/answers'
import ScoresPage from './modules/scores'
import SchedulePage from './modules/schedule'
import LoginPage from './modules/login'
import WipPage from './modules/wip'


const theme = getTheme(Cookies.get('theme'))

const Routes = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/watchers' component={WatchersPage} />
            <Route path='/answers' component={AnswersPage} />
            <Route path='/scores' component={ScoresPage} />
            <Route path='/schedule' component={SchedulePage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/wip' component={WipPage} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
)

export default Routes
