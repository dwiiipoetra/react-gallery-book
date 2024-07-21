import { ExternalLinkIcon, ViewIcon } from "@chakra-ui/icons";
import { Flex, Avatar, Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const BookCard = ( { smallThumbnail, title, subtitle, publisher, authors, previewLink } ) => {
  let avatarStr = ''
  if (authors) authors.length === 1 ? avatarStr = authors.toString() : avatarStr = authors[0].toString()
  
  return (
    <Card borderTop='4px' borderColor='brand.base'>
      <CardBody align='center'>
        <Image
          minH="200px"
          src={smallThumbnail || '/default.png'}
          alt={title}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{title}</Heading>
          <Flex alignItems="center">
            <Avatar mr="10px" color="white" bg="brand.base" name={avatarStr}/>
            <Box>
              <Heading size='xs' textAlign="left">{authors.length > 1 ? authors.join(', ') : authors}</Heading>
            </Box>
          </Flex>
          <Text align='left'>
            {subtitle}
          </Text>
          <Text align='left' color='purple' fontWeight="medium">
            Publisher : {publisher}
          </Text>
        </Stack>
      </CardBody>
    
    <Divider borderColor="gray.400"/>
    
    <CardFooter>
      <ButtonGroup spacing='2'>
        <Button variant='outline' colorScheme='purple' leftIcon={<ViewIcon/>}>
          <Text
            fontSize={{ base: 'xs'}}
          >
            Open Here
          </Text>
        </Button>
        <Button variant='solid' colorScheme='purple' leftIcon={<ExternalLinkIcon/>}>
          <NavLink to={previewLink}>
            <Text
              fontSize={{ base: 'xs'}}
            >
              Read More
            </Text>
          </NavLink>
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
  );
};

export default BookCard;
