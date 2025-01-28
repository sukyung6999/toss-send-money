import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main/Main';
import Amount from './pages/Amount/Amount';
import Receive from './pages/Receive/Receive';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Complete from './pages/Complete/Complete';
import CompleteCheck from './pages/Complete/CompleteCheck';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/amount" element={<Amount />} />
          <Route path="/receive" element={<Receive />} />
          <Route path="/completeCheck" element={<CompleteCheck />} />
          <Route path="/complete" element={<Complete />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
