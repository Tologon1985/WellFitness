import {BrowserRouter as Router, Route} from "react-router-dom";
import Layout from "./component/Layout";
import Blog from "./views/Blog/index";

function App() {
    return (
   <Router>
       <Layout>
           {/*<Route exact path='/' component={Blog}/>*/}
       </Layout>
   </Router>
    );
}

export default App;
