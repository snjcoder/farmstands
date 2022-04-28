import React from "react";
import {
  AppBar,
  Container,
  ImageList,
  ImageListItem,
  Toolbar,
  Typography,
} from "@material-ui/core";

const Aboutus = () => {
  return (
    <div>
      <Container style={{ marginTop: "100px", textAlign: "center" }}>
        <Typography varient="h2">ABOUT US</Typography>
        <br />
        <Typography paragraph>
          Bringing it to the Table: On Farming and Food
        </Typography>
        <Typography paragraph>
          “Why do farmers farm, given their economic adversities on top of the
          many frustrations and difficulties normal to farming? And always the
          answer is: "Love. They must do it for love." Farmers farm for the love
          of farming. They love to watch and nurture the growth of plants. They
          love to live in the presence of animals. They love to work outdoors.
          They love the weather, maybe even when it is making them miserable.
          They love to live where they work and to work where they live. If the
          scale of their farming is small enough, they like to work in the
          company of their children and with the help of their children. They
          love the measure of independence that farm life can still provide. I
          have an idea that a lot of farmers have gone to a lot of trouble
          merely to be self-employed to live at least a part of their lives
          without a boss.” - Wendell Berry
        </Typography>
      </Container>
    </div>
  );
};

export default Aboutus;
