import React from "react";
import { Box, Text, ResponsiveContext } from "grommet";
import { Terminal } from "grommet-icons";

const SectionTitle = title => {
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box
          direction="row"
          gap="medium"
          align="start"
          pad={{ vertical: "medium" }}
        >
          <Terminal color="brand" size="large" />
          <Text color="brand" size={size === "small" ? "24px" : "36px"}>{title}</Text>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default SectionTitle;
