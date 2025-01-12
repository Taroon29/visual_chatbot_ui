// App.js
import React from 'react';
import './App.css';
import { DataProvider } from './Context/dataContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import 'simplebar-react/dist/simplebar.min.css';

import LayoutPage from './Components/Layoutpage/Layout';
import AllWorkspaces from './Components/AllWorkspaces/AllWorkspaces';

function App() {
  return (
    <DataProvider>
      <SnackbarProvider
        classes={{
          containerAnchorOriginTopRight: 'custom-snackbar-position',
        }}
        maxSnack={3}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        iconVariant={{
          success: '✅',
          error: '✖️',
          warning: '⚠️',
          info: 'ℹ️',
        }}
      >
        <Router>
          <div className="w-full h-screen">
            <Routes>
              <Route path="/" element={<LayoutPage />} />
              <Route path="/allworkspace" element={<AllWorkspaces />} />
              {/* Add additional routes here if needed */}
            </Routes>
          </div>
        </Router>
      </SnackbarProvider>
    </DataProvider>
  );
}

export default App;
