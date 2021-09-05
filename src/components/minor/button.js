import { Button } from "@chakra-ui/react";

export default function ButtonComponent({label, loading}){
    return(
        <Button
            _hover={{ bg: "black", color: "yellow !important" }}
            _active={{
              bg: "black",
              color: "yellow !important",
            }}
            _focus={{
              boxShadow: "none",
            }}
            alignSelf="flex-end"
            border="2px solid black"
            color="black !important"
            bg="yellow"
            fontWeight="700"
            my="40px"
            type="submit"
            isDisabled={loading ? true : false}
            isLoading={loading ? true : false}
          >
            {label}
          </Button>
    )
}