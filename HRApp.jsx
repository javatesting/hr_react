import React, {Component} from 'react';
import TopNavBar from './components/TopNavBar.jsx';
import SideNavBar from './components/SideNavBar.jsx';
import MainContent from './components/MainContent.jsx'

class HR extends Component {

   constructor () {
      super ();
    }

   render() {
      return (
         <div>
             <TopNavBar />
             <div className="container-fluid">
                 <div className="row">
                     <div className="col-md-2 sidebar">
                         <SideNavBar />
                     </div>

                     <div className="col-md-10 col-md-offset-2 main">
                         <MainContent/>
                     </div>
                 </div>
             </div>

         </div>
      );
   }
}



class Content extends Component {

    render () {
        return (
            <div>
                <h1>Content</h1>
            </div>
        );
    }
}
export default HR;