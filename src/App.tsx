import React from 'react';
import './utils/styles/App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import Main from './pages';

interface AppProps {}

const App = ({}: AppProps) => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <Main/>
    </QueryClientProvider>
  );
}

export default App;
