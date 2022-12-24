import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PublishRouter } from './routes/router';
import { Fragment } from 'react';
import DefaultLayout from './layouts/defalutLayout/DefaultLayout';
function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            {PublishRouter.map((route,index)=>{
              let Layout = DefaultLayout;
              // if (route.layout) {
              //     Layout = route.layout
              // } else 
              if (route.layout === null) {
                  Layout = Fragment;
              }
              return(
                <Route key={index} path={route.path} element={
                <Layout>
                  <route.component />
                </Layout>
                }/>
              )
            })}
          </Routes>
        </div>
      </Router>
  );
}

export default App;
