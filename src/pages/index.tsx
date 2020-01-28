import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { Link as GatsbyLink } from "gatsby";
import Link from "@material-ui/core/Link";
import { grey } from "@material-ui/core/colors";

const MyApp: React.FC = () => {

  return (
    <>
      <Grid container alignContent="center" alignItems="center" justify="center" direction="column">
        {/* <img className="logo" alt="logo" src={"https://user-images.githubusercontent.com/450283/63640209-85cb3c00-c66b-11e9-9610-0c339ae66ac7.png"} style={{ paddingTop: "10%" }} /> */}
        <Typography variant="h1">EVM-LLVM</Typography>
        <Typography gutterBottom style={{ paddingTop: "100px", paddingBottom: "20px" }} variant="inherit">
        The EVM-LLVM project is bringing LLVM infrastructure to the EthereumStack.
        </Typography>
        <br />
        <br />
        <br />
        <Grid container justify="space-between" style={{ marginBottom: "85px" }}>
          <Grid item container direction="column" style={{ width: "230px" }}>
            <Link
              component={(props: { children: any }) => (
                <GatsbyLink to={"/introduction"} style={{ textDecoration: "none", color: grey[500] }} activeStyle={{ color: grey[500] }}>
                  {props.children}
                </GatsbyLink>
              )}>
              <Grid>
                <Box>
                  <Typography variant="h6" gutterBottom color="primary">→ Beginners</Typography>
                </Box>
                <Box>
                  <Typography variant="caption" color="secondary">- New to EVM-LLVM?</Typography>
                </Box>
                <Box>
                  <Typography variant="caption">- What is EVM-LLVM?</Typography>
                </Box>
                <Box>
                  <Typography variant="caption">- Why should I care?</Typography>
                </Box>
              </Grid>
            </Link>
          </Grid>
          <Grid item container direction="column" style={{ width: "230px" }}>
            <Link
              component={(props: { children: any }) => (
                <GatsbyLink
                  to={"/building-evm-llvm"}
                  style={{ textDecoration: "none", color: grey[500] }}
                  activeStyle={{ color: grey[500] }}
                >
                  {props.children}
                </GatsbyLink>
              )}>
              <Grid>
                <Box>
                  <Typography variant="h6" gutterBottom color="primary">→ Learn</Typography>
                </Box>
                <Box>
                  <Typography variant="caption">- Building EVM-LLVM</Typography>
                </Box>
              </Grid>
            </Link>
          </Grid>
          <Grid item container direction="column" style={{ width: "230px" }}>
            <Link
              component={(props: { children: any }) => (
                <GatsbyLink to={"/developers"}
                  style={{ textDecoration: "none", color: grey[500] }}
                  activeStyle={{ color: grey[500] }}
                >
                  {props.children}
                </GatsbyLink>
              )}>
              <Grid>
                <Box>
                  <Typography variant="h6" gutterBottom color="primary">→ Developers</Typography>
                </Box>
                <Box>
                  <Typography variant="caption">- Repository Links</Typography>
                </Box>
                <Box>
                  <Typography variant="caption">- Find the latest dev tools</Typography>
                </Box>
              </Grid>
            </Link>
          </Grid>
          <Grid container justify="space-between" style={{ marginTop: "85px" }}>
          <Box>
          <Typography variant="h2">Contributors</Typography>
            <img src="https://www.secondstate.io/assets/img/logo.png"/>
            <img height="90px" src="https://i.imgur.com/7leVbsW.png"/>
          </Box>
        </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default MyApp;