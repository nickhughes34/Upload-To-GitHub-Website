import React, { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Search( {setTop10, top10, setFinalSearch} ) {
  const resultsRef = React.useRef(null);
  const [currentSearch, setCurrentSearch] = useState("");

  const searchResults = [""]

  function getResults(){
    let temp = resultsRef.current.value.toUpperCase();

    if (temp !== ""){
      if (temp.length >= 1){
        if (top10.includes(temp) === false){

          if (top10.length <= 9){
            setTop10( top10 => [temp, ...top10]);
          }

          if (top10.length >= 10){
            top10.pop()
            setTop10( top10 => [temp, ...top10]);
          }

        }
        setFinalSearch(temp);
      }
    }

    resultsRef.current.value = "";
    setCurrentSearch("");
  }

  function setCurrent(){
    setCurrentSearch(resultsRef.current.value);
  }

  function setResults(item) {
    //resultsRef.current.value = item;
    //setCurrentSearch(resultsRef.current.value);
    item = item.toUpperCase();
    resultsRef.current.value = "";
    setCurrentSearch("");
    setFinalSearch(item);

    if (top10.includes(item) === false){

      if (top10.length <= 4){
        setTop10( top10 => [item, ...top10]);
      }

      if (top10.length >= 5){
        top10.pop()
        setTop10( top10 => [item, ...top10]);
      }

    }

  }

  return (
    <Form className='' onSubmit={e => { e.preventDefault(); getResults();}}>
      <Form.Label>Search Stock</Form.Label>
      <InputGroup className="" controlid="formBasicEmail">
        <Form.Control type="text" placeholder="Enter stock" ref={resultsRef} onChange = {setCurrent} style={{textTransform: "uppercase", borderRadius: "0px"}} />
        <Button variant="secondary" onClick = {() => {getResults();}} style={{borderRadius: "0px"}}>
          Search
        </Button>
      </InputGroup>

      {/* https://www.youtube.com/watch?v=Jd7s7egjt30&ab_channel=ProgrammingwithMasoud */}
      <div className="customDropdown">
          {searchResults
            .filter((item) => {
              const searchTerm = currentSearch.toLowerCase();
              const fullName = item.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div onClick={() => {setResults(item);}} className="dropdown-row" key={item}>
                {item}
              </div>
            ))}
        </div>

    </Form>
  );
}

export default Search;
