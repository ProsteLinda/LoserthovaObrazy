import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "../../components/ContactForm";

import GlobalContext from "../../context/GlobalContext";
import { Section, Title, ButtonIcon } from "../../components/Core";

const Hero = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      <Section>
        <Container>
          <Row className="text-center justify-content-center">
            <Col lg="10" xl="7">
              <div className="text-center my-5">
                <Title variant="logo">Děkuji Vám za návštěvu!</Title>
              </div>
              <div className="text-center">
                <ButtonIcon
                  onClick={(e) => {
                    e.preventDefault();
                    gContext.toggleContact();
                  }}
                >
                  Kontaktujte mě zde (ve vývoji)
                </ButtonIcon>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Hero;
