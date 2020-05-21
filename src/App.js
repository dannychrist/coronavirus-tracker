import React from 'react';
import styled from 'styled-components';
import { 
  Cards, 
  Chart, 
  CountryPicker, 
  GlobalStyles 
} from './components';
import { fetchData } from './api';


class App extends React.Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData })
  }

  handleCountryChange = async (country) => {
    console.log(country)
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country })
    console.log(fetchedData)
  }

  render() {
    const { data, country } = this.state;
    return (
      <Wrapper>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
        <GlobalStyles />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  @media (max-width: 770px) {
    margin: 0 10%;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default App;