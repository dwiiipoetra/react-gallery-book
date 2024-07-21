import { ExternalLinkIcon, ViewIcon } from "@chakra-ui/icons";
import { Flex, Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const BookCard = ( { smallThumbnail, title, subtitle, publisher, authors, previewLink } ) => {
  let avatarStr = ''
  if (authors.length === 1) {
    avatarStr = authors.toString().split(' ')
  } else {
    avatarStr = authors[0].toString().split(' ')
  }
  console.log(avatarStr,authors);
  
  return (
    <Card borderTop='4px' borderColor='purple.400'>
      <CardBody align='center'>
        <Image
          src={smallThumbnail}
          alt={title}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{title}</Heading>
          <Flex alignItems="center">
            <Box minW='50px' minH='50px' alignContent="center" mr="10px" p="4px" rounded="50%" color="white" bg="purple.400" fontWeight="bold">
              <Text>
                {authors.length === 1 ? avatarStr[0][0] + avatarStr[1][0] : avatarStr[0][0] + avatarStr[1][0]}
              </Text>
            </Box>
            <Box>
              <Heading size='xs' textAlign="left">{authors.join(', ')}</Heading>
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
