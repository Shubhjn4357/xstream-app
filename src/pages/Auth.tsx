import GoogleIcon from "../utils/googleIcon";
import { Link, useNavigate } from "react-router-dom";
import authenticator from "../utils/fireApi";
import toast from "react-simple-toasts";
import { ActionIcon, Button, Card, Flex, Stack, Text, Title, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { IconCodeCircle2, IconMoonFilled, IconSunFilled } from "@tabler/icons-react";



const Auth=()=> {
    const { setColorScheme } = useMantineColorScheme({
        keepTransitions: true,
      });
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
   const navigate=useNavigate();
   const SignGoogle=async()=>{
      const {user,loading}=await authenticator.useGoogle()
      if(user && !loading){
         toast(`Welcome ${user?.displayName}`,{theme:"success"})
         return navigate("/")
      }
   }

   return <>
  <Card shadow="md" padding="lg" radius="md" withBorder >
      <Stack gap={2} >
        <Flex className="flex justify-between items-center py-2 px-2">
            <Link to="/" className="flex text-decoration-none items-center text-yellow-500 text-2xl font-semibold hover:text-red-700 dark:xdark">
                <IconCodeCircle2/>
                Animax
            </Link>
            <ActionIcon variant="transparent"  radius="xl" onClick={()=>setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}  aria-label="Toggle color scheme">{computedColorScheme==='dark'?<IconMoonFilled/>:<IconSunFilled/>}</ActionIcon>
        </Flex>
          <Stack gap={2} justify="center" align="center">
              <Title order={3} className="font-bold leading-tight tracking-tight dark:xdark">
                  Sign in to your account
              </Title>
              <Button radius="lg" onClick={SignGoogle} variant="filled" mt={4} c="white"><GoogleIcon/> <Text size="lg" fw="bold" className="ms-2">Continue With Google</Text></Button>
          </Stack>
      </Stack>
  </Card>
   </>
}
export default Auth;


