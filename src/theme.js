import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";

export const customTheme = deepMerge(grommet, {
  global: {
    colors: {
      brand: "#021c1e",
      background: "#feffff",
      "light-1": "#edf5e1",
      secondary: "#004445"
    }
  }
});
