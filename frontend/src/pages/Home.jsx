import {
  Alert,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Heading,
  Link,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  AlertIcon,
  useToast
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaPowerOff,
} from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import useLogout from "../hooks/useLogout";

const Home = () => {
  const { user } = useAuth();
  const { logout } = useLogout();
  const toast = useToast();

  const handleClick = async () => {
    logout();
    toast({
      title: "Logged out successfully",
      status: "success",
    });
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          padding: "10px",
        }}
      >
        <Text fontSize="sm">Made with ❤️ by Ashish Vaidya (Calm Person)</Text>
      </Box>
      <Tabs
        variant="soft-rounded"
        colorScheme="blue"
        width="100%"
        height="fit-content"
        padding="10px"
        isFitted
      >
        <TabList padding="10px" justifyContent="center">
          <Tab
            sx={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            Welcome
          </Tab>
          <Tab
            sx={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            About
          </Tab>
          <Tab
            sx={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            Your Account
          </Tab>
          <Tab
            sx={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            Contact Me
          </Tab>
        </TabList>

        <Divider orientation="horizontal" border="2px" opacity=".1" />
        <TabPanels>
          <TabPanel>
            <Container>
              <Text>
                Welcome to my project. This is a full-stack application for user
                authentication and thank you for visiting my project. I hope you
                like it. I have tried to make it as simple as possible.
              </Text>
            </Container>
          </TabPanel>

          <TabPanel>
            <Container display="flex" flexDirection="column" gap={4}>
              <Box>
                <Heading size="md">Project Overview</Heading>
                <Text>
                  This project is a full-stack application for user
                  authentication, built with React, TypeScript, Express, and
                  MongoDB. It's divided into two main parts: the frontend and
                  the backend. You can locally run the app by running the
                  following commands:
                </Text>
                <br />
                <br />
                <Text fontWeight="bold">Frontend</Text>
                <Text>cd frontend</Text>
                <Text>yarn</Text>
                <Text>yarn dev</Text>
                <br />
                <Text fontWeight="bold">Backend</Text>
                <Text>cd backend</Text>
                <Text>yarn</Text>
                <Text>yarn dev</Text>
                <br />
                <br />
                <Text>
                  Or yarn install for installing app and yarn dev in the root
                  directory to run frontend and backend at once.
                </Text>
              </Box>
              <Box>
                <Heading size="md">Frontend</Heading>
                <Text>
                  The frontend is a React app built with TypeScript and Chakra
                  UI. It uses React Router to manage navigation The frontend is
                  deployed to Netlify. Contains four main folders: components,
                  context,hooks, and pages. App.tsx is the entry point of the
                  app and contains all the routes.
                </Text>
              </Box>
              <Box>
                <Heading size="md">Backend</Heading>
                <Text>
                  The backend is a Node.js app built with Express and MongoDB.
                  It's deployed to <strong>Render web service</strong>. Contains
                  three main folders: controllers, models, and routes. server.ts
                  is the entry point of the app.
                </Text>
              </Box>

              <Box>
                <Heading size="md">Authentication</Heading>
                <Text>
                  The app uses JSON Web Tokens (JWTs) to authenticate users.
                  When a user logs in, a JWT is generated and stored in local
                  storage. The backend uses the JWT to authenticate the user. No
                  full usage of JWT yet, true use will be when we are protecting
                  services(Chat data, Cart data, etc) GET routes which are not
                  accessible to unauthorized users.
                </Text>
              </Box>
            </Container>
          </TabPanel>
          <TabPanel>
            <Container display="flex" flexDirection="column" gap={4}>
              <Heading size="md" textAlign="center">
                Account Details
              </Heading>
              <Box>
                <Text>Email: {user?.email}</Text>
                <Text marginTop="10px">Token: {user?.token}</Text>
              </Box>
              <Button
                colorScheme="red"
                w="100%"
                onClick={handleClick}
                leftIcon={<FaPowerOff />}
              >
                Logout
              </Button>
              <Alert status="warning">
                <AlertIcon />
                <Text fontSize="sm">Never share your token with anyone.</Text>
              </Alert>
            </Container>
          </TabPanel>

          <TabPanel>
            <Container display="flex" flexDirection="column" gap={4}>
              <Box>
                <Heading size="md">About Me</Heading>
                <Text>
                  My name is Ashish Vaidya, I am a Full Stack Developer with a
                  passion for learning new technologies and building web
                  applications that solve real world problems. I have experience
                  working with React, Node, Express, MongoDB, TypeScript,
                  JavaScript, HTML and CSS.
                </Text>
              </Box>
              <Box>
                <Heading size="md" marginBottom={2}>
                  Contact Me
                </Heading>

                <Grid gap={2}>
                  <Button
                    as="a"
                    href="mailto:ashuvaidya2003@gmail.com"
                    leftIcon={<FaEnvelope />}
                    colorScheme="red"
                    target="_blank"
                  >
                    Email
                  </Button>

                  <Button
                    as={Link}
                    href="https://www.linkedin.com/in/ashish-vaidya-78682a234/"
                    leftIcon={<FaLinkedin />}
                    colorScheme="linkedin"
                    target="_blank"
                  >
                    LinkedIn
                  </Button>

                  <Button
                    as={Link}
                    href="https://github.com/Ashish-Sunil-Vaidya"
                    leftIcon={<FaGithub />}
                    target="_blank"
                  >
                    GitHub
                  </Button>

                  <Button
                    as={Link}
                    href="https://wa.me/00000000000000"
                    leftIcon={<FaWhatsapp />}
                    colorScheme="whatsapp"
                    target="_blank"
                  >
                    Whatsapp
                  </Button>
                </Grid>
              </Box>
            </Container>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};
export default Home;
