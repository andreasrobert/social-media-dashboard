import { Button } from "@chakra-ui/react";

export default function ButtonComponent({act, loading}){
    return(
        <Button
            _hover={{ bg: "black", color: "rgb(224, 224, 0) !important" }}
            _active={{
              bg: "black",
              color: "rgb(224, 224, 0) !important",
            }}
            _focus={{
              boxShadow: "none",
            }}
            alignSelf="flex-end"
            border="2px solid black"
            color="black !important"
            bg="rgb(224, 224, 0)"
            fontWeight="700"
            my="40px"
            type="submit"
            isDisabled={loading ? true : false}
            isLoading={loading ? true : false}
          >
            {act}
          </Button>
    )
}