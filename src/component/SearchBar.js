import { useEffect, useState } from "react";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import  {useHistory}  from "react-router-dom";

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useHistory();

  const searchMember = (event) => {
    event.preventDefault();
    if(keyword === ""){
      navigate("/members");
    }else{
      navigate(`/members/${keyword}`);
    }
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <Form className="search" noValidate onSubmit={searchMember}>
      <InputGroup className="search-form">
        <FormControl type="text"
          placeholder="Look for members"
          name="keyword"
          value={keyword}
          onChange={handleKeywordChange} />
        <Button variant="success" type="submit">Search</Button>
      </InputGroup>
    </Form>
  );
};

export default SearchBar;
