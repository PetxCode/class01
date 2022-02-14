import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [getData, setGetData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:3000/api/photo");
    if (res) {
      setGetData(res.data.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Container>
        <Wrapper>
          {getData.map(({ _id, userName, course, image }) => (
            <Card key={_id}>
              <Image src={image} alt="image" />
              <Display>
                <Name>{userName}</Name>
                <Name>{course}</Name>
              </Display>
              <But>
                <Button onClick={() => {}}>Delete</Button>

                <Nav>Enter</Nav>
              </But>
            </Card>
          ))}
        </Wrapper>
      </Container>
    </div>
  );
};

export default Home;

const But = styled.div`
  display: flex;
`;

const Nav = styled.div`
  text-decoration: none;
  border-radius: 5px;
  padding: 20px 40px;
  background: #004080;
  color: white;
  font-weight: bold;
  transition: all 350ms;
  transform: scale(1);
  margin-bottom: 20px;
  margin: 10px;

  :hover {
    cursor: pointer;
    transform: scale(0l97);
  }
`;

const Button = styled.div`
  border-radius: 5px;
  padding: 20px 40px;
  background: #004080;
  color: white;
  font-weight: bold;
  transition: all 350ms;
  transform: scale(1);
  margin-bottom: 20px;
  margin: 10px;

  :hover {
    cursor: pointer;
    transform: scale(0l97);
  }
`;

const Card = styled.div`
  margin: 20px;
  width: 300px;
  background: white;
  border-radius: 5px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
`;
const Name = styled.div``;

const Display = styled.div``;

const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  object-fit: cover;
  background: orange;
  margin-top: -30px;
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 50px;
`;

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  height: 100%;
  background-color: lightgray;
`;
