
import { createRoot } from 'react-dom/client';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {BrowserRouter as Router} from "react-router-dom";

import './index.css'
import App from './App.jsx';
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <Router>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>

  </Router>
  
)
