import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Grid from "../layouts/Grid";

export default {
  title: "Layouts/Grid",
  component: Grid,
  argTypes: {
    amount: { control: "number", defaultValue: 20 },
  },
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => (
  <Grid {...args}>
    {Array(args.amount)
      .fill(0)
      .map((_, i) => (
        <div
          key={i}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            borderRadius: "0.25rem",
            height: "80px",
            width: "100%",
          }}
        ></div>
      ))}
  </Grid>
);

export const Primary = Template.bind({});
Primary.args = {
  columns: 4,
};
