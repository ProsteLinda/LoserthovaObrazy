import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";

import { Title, Button, Section, Box, Text } from "../../components/Core";

import imgL from "../../assets/images/1_Uvodni.png";

const ImgRight = styled.img`
  max-width: 100%;
`;

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section hero className="position-relative">
        <Container>
          <Row className="align-items-center">
            <Col lg="8" className="mb-5 mt-2 mb-lg-0">
              <Box mt="120px" mb="120px">
                <Title variant="hero">
                  Ráda Vás zde vítám!
                </Title>
                <Text
                  variant="tag"
                  mb={4}
                  color="heading"
                  mb="40px"
                  mt="40px"
                >
                 Jmenuji se Pavla Loserthová, jsem rodačka z Teplic n. B. - Zbrašova, dnes žiji nedaleko svého rodiště. Stále se ráda toulám přírodou, pozoruji a obdivuji rostliny všeho druhu, kterými se obklopuji doma, v zahradě. Jsou pro mne velkou inspirací. Kresbou, malbou se snažím zachytit i to, co mě zaujme v mém okolí nebo na cestách. Tvoření je moje celoživotní velká radost...
                </Text>
                <Box mt="52px" className="text-center">
                  <Link
                    to="works"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={1000}
                  >
                    <Button variant="success">
                      <div>Prohlédněte si moji tvorbu</div>
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Col>
            <Col lg="4" md="8" sm="9">
              <div className="text-center text-lg-right position-relative">
                <div className="img-main">
                  <ImgRight src={imgL} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Hero;
