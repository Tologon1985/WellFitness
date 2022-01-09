import {Route, Routes} from "react-router-dom";
import Layout from "./component/Layout";
import Blog from "./views/Blog/index";

function App() {
    return (
        <Layout>
            <Routes >
                    <Route path="/" element={<Blog/>}/>
            </Routes>
        </Layout>
    );
}

export default App;
