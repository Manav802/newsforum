import React from 'react';
import Body from './components/Body';
import{ Business,World,Sports,Technology} from './components/DrawerComponents/Bussines';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Switch>
 <Route exact path='/' component={Body} />
 <Route path='/business' component={Business} />
 <Route path='/sports' component={Sports} />
 <Route path='/worldNews' component={World} />
 <Route path='/technology' component={Technology} />
 </Switch>
    </>
  );
}
export default App;
