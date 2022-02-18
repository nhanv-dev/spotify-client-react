import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import useAuth from '../custom_hooks/useAuth'
import Home from '../pages/Home'
import Search from '../pages/Search'
import Playlist from '../pages/Playlist'
import Collection from '../pages/Collection'
import Layout from '../components/Layout'
const Routes = ({ code }) => {
    const accessToken = useAuth(code)
    return (
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route path='/' exact render={() => <Home />}></Route>
                    <Route path='/search' exact render={() => <Search accessToken={accessToken} />}></Route>
                    <Route path='/collection' exact exactcomponent={Collection}></Route>
                    <Route path='/playlist' exact component={Playlist}></Route>
                    <Route path='/collection/:slug' component={Playlist}></Route>
                </Layout>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes