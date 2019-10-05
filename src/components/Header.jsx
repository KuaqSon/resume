import React from "react";
import { Anchor, Box, Text, ResponsiveContext, Menu } from "grommet";
import {
  ContactInfo,
  Code,
  Desktop,
  DocumentUser,
  FormDown
} from "grommet-icons";

const CollapsedNav = () => (
  <Box
    direction="row"
    justify="center"
  >
    <Menu
      plain
      justifyContent="center"
      dropProps={{ align: { top: "bottom" } }}
      items={[
        {
          label: (
            <Box alignSelf="center" pad={{ right: "32px" }}>
              About me
            </Box>
          ),
          onClick: () => goToSection("#about"),
          icon: (
            <Box pad={{ vertical: "16px", left: "32px", right: "16px" }}>
              <DocumentUser size="medium" />
            </Box>
          )
        },
        {
          label: (
            <Box alignSelf="center" pad={{ right: "32px" }}>
              Projects
            </Box>
          ),
          onClick: () => goToSection("#projects"),
          icon: (
            <Box pad={{ vertical: "16px", left: "32px", right: "16px" }}>
              <Code size="medium" />
            </Box>
          )
        },
        {
          label: (
            <Box alignSelf="center" pad={{ right: "32px" }}>
              Contact
            </Box>
          ),
          onClick: () => goToSection("#contact"),
          icon: (
            <Box pad={{ vertical: "16px", left: "32px", right: "16px" }}>
              <ContactInfo size="medium" />
            </Box>
          )
        }
      ]}
    >
      <Box direction="row" gap="small" pad="medium" align="center">
        <Desktop color="brand" size="large" />
        <Text weight="bold" size="large">
          Son Nguyen
        </Text>
        <FormDown />
      </Box>
    </Menu>
  </Box>
);

const ExpandedNav = () => (
  <Box
    direction="row"
    justify="between"
    alignSelf="center"
    align="center"
    gap="medium"
    pad={{ vertical: "small", horizontal: "medium" }}
  >
    <Box direction="row" gap="small" align="center">
      <Desktop color="brand" size="large" />
      <Text weight="bold" size="large">
        Son Nguyen
      </Text>
    </Box>

    <Box direction="row" gap="medium" justify="center">
      <Anchor
        a11yTitle="About"
        href="#about"
        label="About me"
        icon={<DocumentUser color="brand" size="medium" />}
      />
      <Anchor
        a11yTitle="Projects by me"
        href="#projects"
        label="Projects"
        icon={<Code color="brand" size="medium" />}
      />
      <Anchor
        a11yTitle="Contact me"
        href="#contact"
        label="Contact"
        icon={<ContactInfo color="brand" size="medium" />}
      />
    </Box>
  </Box>
);

const goToSection = section => {
  setTimeout(() => {
    window.location.replace(section);
  }, 0);
};

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render() {
    let navClasses = ["navbar"];
    !this.state.visible && navClasses.push("navbar--hidden");
    this.state.prevScrollpos && navClasses.push("navbar--sahdow");

    return (
      <ResponsiveContext.Consumer>
        {size => (
          <div className={navClasses.join(" ")}>
            {size !== "xsmall" && size !== "small" && <ExpandedNav />}
            {(size === "xsmall" || size === "small") && <CollapsedNav />}
          </div>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default Header;
