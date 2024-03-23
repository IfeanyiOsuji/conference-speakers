

import Header from '../src/components/Header';

import Speakers from '../src/components/Speakers';
import AuthProvider from '../src/contexts/AuthContext';
import Layout from './Layout';




 const App = () => {
    
  return (
    <AuthProvider initialloggedinUser='Ifeanyi'>
    <Layout startingTheme ='light'>
      <div>
      <Header />
        <Speakers /> 
      </div>
       
    </Layout>
    </AuthProvider>
  );
}
export default App;
