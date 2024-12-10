
import { RootLayout } from '@/modules/layout';
import MyRouter from './my-router';


export function App() {
  return (
    <div>
     <RootLayout>
     <MyRouter />
     </RootLayout> 
    </div>
  );
}

export default App;
