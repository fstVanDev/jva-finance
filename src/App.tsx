import React, { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { useWallet } from 'use-wallet'
import { ResetCSS } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js'
import { useFetchPublicData } from 'state/hooks'
import GlobalStyle from './style/Global'
import NavBar from './components/NavBar'

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page'
const Home = lazy(() => import('./views/Home'))
const Farms = lazy(() => import('./views/Farms'))
const NotFound = lazy(() => import('./views/NotFound'))
const Referrals = lazy(() => import('./views/Referrals'))


// This config is required for number formating
BigNumber.config({
   EXPONENTIAL_AT: 1000, 
   DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
   const { account, connect } = useWallet()
   useEffect(() => {
      if (!account && window.localStorage.getItem('accountStatus')) {
         connect('injected')
      }
   }, [account, connect])

   useFetchPublicData()

   return (
      <Router>
         <ResetCSS />
         <GlobalStyle />
         <NavBar>
            .
         </NavBar>
         <Suspense fallback>
            <Switch>
               <Route path="/" exact>
                  <Home />
               </Route>
               <Route path="/farms">
                  <Farms />
               </Route>
               <Route path="/nests">
                  <Farms tokenMode />
               </Route>
               <Route path="/pools">
                  <Farms tokenMode />
               </Route>
               <Route path='/referrals'>
                  <Referrals />
               </Route>
               {/* <Route path="/ifo">
            <Ifos />
            </Route>
           <Route path="/nft">
           <Nft /> 
            </Route>  */}
               {/* Redirect */}
               <Route path="/staking">
                  <Redirect to="/pools" />
               </Route>
               <Route path="/syrup">
                  <Redirect to="/pools" />
               </Route>
               {/* 404 */}
               <Route component={NotFound} />
            </Switch>
         </Suspense>
      </Router>
   )
}

export default React.memo(App)
