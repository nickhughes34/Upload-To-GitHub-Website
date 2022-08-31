import React, { useState } from "react"
import NavBar from "./components/Navbar.js"
import Footer from "./components/Footer.js"
import Search from "./components/Search.js"
import Graph from "./components/Graph.js"
import History from "./components/History.js"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {

  const [top10, setTop10] = useState(["AAPL"]);
  const [finalSearch, setFinalSearch] = useState("AAPL");
  const [color, setcolor] = useState("light");
  const btn ={backgroundColor: '#E1D9D1'};

  return (
    <div id = "App" style={{overflowX: 'hidden'}}>
    <NavBar color={color} setcolor={setcolor} />
    <Row className="p-4" style={btn}>

    {/*Search Bar*/}
    <Col md='12' lg='2'>
    <Search setTop10={setTop10} top10={top10} setFinalSearch={setFinalSearch}/>
    </Col>

    {/*Graph*/}
    <Col md='12' lg='9'>
    <Graph finalSearch = {finalSearch} color={color}/>
    </Col>

    {/*History*/}
    <Col md='12' lg='1' className="d-none d-sm-block">
    <History top10={top10} setFinalSearch={setFinalSearch} />
    </Col>

    </Row>
    <Footer color={color}/>
    </div>
  );
}

export default App;
