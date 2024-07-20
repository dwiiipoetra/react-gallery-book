import { ExternalLinkIcon, ViewIcon } from "@chakra-ui/icons";
import { Flex, Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const BookCard = ({
  smallThumbnail,
  title,
  subtitle,
  publisher,
  authors,
  previewLink,
}) => {
  return (
    // <Box bg="white" h="200px" border="1px solid">
    //   <p></p>
    //   <p>{}</p>
    //   <p>{}</p>
    //   <p>{}</p>
    //   <p>{}</p>
    // </Box>
    <Card borderTop='4px' borderColor='purple.400'>
      <CardBody align='center'>
        <Image
          src={smallThumbnail}
          alt={title}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{title}</Heading>
          <Flex>
            <Box w='50px' h='50px'>
              <Text>AV</Text>
            </Box>
            <Box>
              <Heading size='s'>{authors}</Heading>
            </Box>
          </Flex>
          <Text align='left'>
            {subtitle ? subtitle : 'No subtitle'}
          </Text>
          <Text align='left' color='purple' fontWeight="medium">
            Publisher : {publisher ? publisher : 'Unknown'}
          </Text>
        </Stack>
      </CardBody>
    
    <Divider borderColor="gray.400"/>
    
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Button variant='outline' colorScheme='purple' leftIcon={<ViewIcon/>}>
          Open Here
        </Button>
        <Button variant='solid' colorScheme='purple' leftIcon={<ExternalLinkIcon/>}>
          <NavLink to={previewLink}>Read More</NavLink>
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
  );
};

export default BookCard;
