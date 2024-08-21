import React from 'react'
import {HStack,Button,VStack,Container,Input} from "@chakra-ui/react";
import{AiOutlineUpload} from "react-icons/ai"

const Upload = () => {
  return (
    <Container maxW={'container.x1'} h={'100vh'} p={'16'}>
      <VStack color={'purple.500'} h={'full'} justifyContent={'center'}>
        <AiOutlineUpload size={'10vmax'}/>
      <form>
        <HStack>
          <Input
          required
          type={'file'}
          css={{'&::file-selector-button':{
            border: 'none',
            width: 'calc(100% + 36px)',
            height: '100%',
            marginLeft: '-18px',
            color: 'purple',
            backgroundColor: 'white',
            cursor: 'pointer',
          }}}/>
          <Button colorScheme='purple' type='submit'> Upload</Button>
        </HStack>

      
      </form>

      </VStack>

    </Container>

  )
}

export default Upload