import { Flex, Heading, Input } from "@chakra-ui/react";

export default function InputComponent({value, setValue, name, width}){
    return(
        <Flex
              alignItems={{ xl: "center" }}
              flexDir="column"
              pos="relative"
              my="30px"
            >
              <Heading
                pos={{ xl: "absolute" }}
                textAlign={{xl:"end"}}
                right="103%"
                top="-6px"
                mb="10px"
                w={width}
                
              >
                {name} :
              </Heading>
              <Input
                placeholder=". . ."
                _placeholder={{
                  color: "black",
                }}
                border="2px solid black !important"
                focusBorderColor="none"
                required
                value={value}
                onChange={(e) => setValue(e.target.value)}
              ></Input>
            </Flex>
    )
}