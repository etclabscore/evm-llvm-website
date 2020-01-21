import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { Link as GatsbyLink } from "gatsby";
import Link from "@material-ui/core/Link";
import { grey } from "@material-ui/core/colors";

const MyApp: React.FC = () => {

  return (
    <>
      <Grid container alignContent="center" alignItems="center" justify="center" direction="column">
        <img className="logo" alt="logo" src={"https://user-images.githubusercontent.com/10556209/72843303-db7a3380-3c5f-11ea-9053-ea4eb8e17f23.png"} style={{ paddingTop: "10%" }} />
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
                <GatsbyLink to={"/beginners"} style={{ textDecoration: "none", color: grey[500] }} activeStyle={{ color: grey[500] }}>
                  {props.children}
                </GatsbyLink>
              )}>
              <Grid>
                <Box>
                  <Typography variant="h6" gutterBottom color="primary">→ Beginners</Typography>
                </Box>
                <Box>
                  <Typography variant="caption" color="secondary">- New to OpenRPC?</Typography>
                </Box>
                <Box>
                  <Typography variant="caption">- What is OpenRPC?</Typography>
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
                  to={"/learn"}
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
                  <Typography variant="caption">- Beginner Resources</Typography>
                </Box>
                <Box>
                  <Typography variant="caption">- How OpenRPC works</Typography>
                </Box>
              </Grid>
            </Link>
          </Grid>
          <Grid item container direction="column" style={{ width: "230px" }}>
            <Link
              component={(props: { children: any }) => (
                <GatsbyLink to={"/learn"}
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
        </Grid>
        <Grid>
          <Box>
            <Typography>Contributors</Typography>
            <img src="https://www.secondstate.io/assets/img/logo.png"/>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cryptoninjas.net%2Fwp-content%2Fuploads%2Fethereic-classic-labs-cryptoninjas-750x375.jpg&f=1&nofb=1"/>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default MyApp;