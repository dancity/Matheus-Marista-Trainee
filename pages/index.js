import Header from "../Components/Header";
import Section1 from "../Components/Section1";

import { Container } from './styles';

function Home() {
  return (
    <Container>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap"
          rel="stylesheet"
        />
      </head>
      <Header />
      <Section1 />
      <Section1 />
    </Container>
  );
}

export default Home;
