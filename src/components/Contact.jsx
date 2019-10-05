import React from "react";
import { Box, Text, Anchor } from "grommet";
import { MailOption } from "grommet-icons";
import Fade from "react-reveal/Fade";

function Contact() {
  return (
    <Fade bottom>
      <Box height={{ min: "80vh" }} id="contact">
        <div className="container">
          <Box direction="column" justify="center" pad={{ top: "48px" }}>
            <Fade bottom>
              <Box direction="row" justify="center">
                <Text textAlign="center" size="48px">
                  Let's connect
                </Text>
              </Box>
            </Fade>
            <Fade bottom>
              <Box
                margin={{ vertical: "medium" }}
                direction="row"
                justify="center"
              >
                <Text textAlign="center" size="24px">
                  Although I'm not currently looking for freelance
                  opportunities, my inbox is always open. Feel free to connect
                  with me. I'll try my best to answer your email!
                </Text>
              </Box>
            </Fade>

            <Fade bottom>
              <Box pad={{ vertical: "large" }} justify="center" direction="row">
                <Anchor
                  icon={<MailOption />}
                  label="Get in touch"
                  href="mailto:qson.ng@gmail.com"
                  size="large"
                />
              </Box>
            </Fade>
          </Box>
        </div>
      </Box>
    </Fade>
  );
}

export default Contact;
