import React from 'react'
import {Heading,Avatar,Button,Container,Input,Text,VStack} from "@chakra-ui/react";
import {Link} from "react-router-dom"

const Signup = () => {
  return (
    <Container w={'container.x1'} h={'100vh'} p={'16'}>
      <form>
        <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
          <Heading>
            DIB RAJ
          </Heading>
          <Avatar alignSelf={'center'} boxSize={'32'}/>
            
            <Input placeholder={'Email'}
            type={'email'}
            required
            focusBorderColor='purple.500'/>

            <Input placeholder={'Password'}
            type='password'
            required
            focusBorderColor='purple.500'/>

            <Button colorScheme='purple' type='submit'>
              Sign Up
            </Button>
            <Text textAlign={'right'}>
            Already Signed Up?{' '}
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to={'/login'}>Login In</Link>
            </Button>
          </Text>

    
       

         




   





        </VStack>
      </form>


    </Container>

  )
}

export default Signup