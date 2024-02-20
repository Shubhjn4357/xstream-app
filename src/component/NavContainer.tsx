import authenticator from "../utils/fireApi";
import { NavLink, Outlet } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { Flex, Avatar, Button, Tooltip, ActionIcon,Drawer, Text, Stack, Menu, Kbd, Modal, AppShell, useComputedColorScheme, useMantineColorScheme, Title, CloseButton, Box } from "@mantine/core";
import {IconArrowBack, IconCategory2, IconCodeCircle2, IconDeviceFloppy, IconHome, IconLayoutList, IconMoonFilled, IconSearch, IconSettings, IconSunFilled, IconUserHexagon} from "@tabler/icons-react";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import { ScrollToTop } from ".";

const NavFlex=()=>{
    const [LogOut,setLogOut]=useState<boolean>(false);
    
    const [SideBar,setSideBar]=useState<boolean>(false);
    const [largeScreen,setLargeScreen]=useState<boolean>(false);
    const {user}=authenticator.useUser()
    const { setColorScheme } = useMantineColorScheme({
        keepTransitions: true,
      });
      const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
    const signOut=()=>{
        authenticator.useLogOut()
    }
    const SideBarFeature=[
        {
            icon:<IconHome/>,
            text:"Home",
            link:"/"

        },
        {
            icon:<IconPlayerPlayFilled/>,
            text:"Watch Anime",
            link:"/watchanime"
        },
        {
            icon:<IconSearch/>,
            text:"Search",
            link:"/search"
        },
        {
            icon:<IconDeviceFloppy/>,
            text:"Bookmark",
            link:"/bookmark"
        },
        {
            icon:<IconSettings/>,
            text:"Setting",
            link:"/setting"

        },
        {
            icon:<IconUserHexagon/>,
            text:"User",
            link:"/userprofile"
        },
        {
            icon:<IconLayoutList/>,
            text:"Anime List",
            link:"/animelist"
        },

    ]
    const ToggleTheme=useCallback(()=>{
        setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
      },[computedColorScheme, setColorScheme])
    useEffect(() => {
        const ctrl1 = (e: KeyboardEvent) => e.ctrlKey && e.key === "x"; 
        const ctrl2 = (e: KeyboardEvent) => e.ctrlKey && e.key === "z"; 
        const handler = (e: KeyboardEvent) => {
          if (ctrl1(e)) {
            setLogOut(true)
          }
          else if (ctrl2(e)) {
            ToggleTheme()
          }
        };
        const ignore = (e: KeyboardEvent) => {
          if (ctrl1(e)) {
            e.preventDefault();
          }
          if (ctrl2(e)) {
            ToggleTheme()
          }
        };
        window.addEventListener("keyup", handler);
        window.addEventListener("keydown", ignore);
    
        return () => {
          window.removeEventListener("keyup", handler);
          window.removeEventListener("keydown", ignore);
        };
      }, [ToggleTheme]);

  useEffect(() => {
    // Function to handle screen size changes
    function handleResize() {
      const isLargeScreen = window.innerWidth > 768;
      setLargeScreen(isLargeScreen);
    }
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
      const SidebarToggle=()=>{
        setSideBar(!SideBar)
      }
      
      const userProfileSection=(
            <Stack gap={1} align="end" justify="center" w={100}>           
                <Text fw="bolder" size="md" >{user?.displayName}</Text>  
                <Box w={100}>
                    <Tooltip label={user?.email}>
                        <Text size="sm" fw="bold" truncate="end">{user?.email}</Text>
                    </Tooltip>
                </Box>
            </Stack> 
      )
    return (<AppShell  className=" w-full">
                            {/* <!-- Header --> */}
                            <AppShell.Header  className="flex sticky top-0 flex-shrink items-center justify-between bg-transparent px-3">
                               <Flex gap="3" align="center">
                                    {/*Toggle button*/}
                                        <ActionIcon variant="subtle" radius="lg" onClick={SidebarToggle} aria-label="Menu">
                                            {SideBar?<IconArrowBack className="h-5 w-5"/>:<IconCategory2 className="h-5 w-5"/>}
                                        </ActionIcon>
                                    
                                    {/* logo */}
                                    <NavLink to="/" style={{color:"inherit"}} className="flex text-xl text-decoration-none items-center justify-center">
                                        <IconCodeCircle2/>
                                        <Text >XStream</Text>
                                    </NavLink>
                               </Flex>
                                
                                
                                {/* <!-- AvatarInfo--> */}
                                <div className="flex items-center gap-2 justify-evenly py-2"> 
                                    <div className={`items-center gap-2  justify-evenly flex ${!largeScreen?"d-none":""}`}>
                                    <ActionIcon variant="transparent" radius="xl" onClick={ToggleTheme}  aria-label="Toggle color scheme">{computedColorScheme==='dark'?<IconMoonFilled/>:<IconSunFilled/>}</ActionIcon>                
                                        {/* <!-- User Info --> */}
                                        {userProfileSection}
                                    </div>
                                    <Menu>
                                        <Menu.Target >
                                            {/* <!-- Avatar --> */}
                                            <Avatar src={user?.photoURL} radius="full" alt="no image found"/>
                                        </Menu.Target>  
                                        <Menu.Dropdown className="dark:bg-dark" w={300}>
                                                <Flex className="flex gap-2 p-2 sm:hidden dark:dark">
                                                {/* <DropdownMenu.Item> */}
                                                        <Avatar src={user?.photoURL} radius="xl" alt="no image found"/>
                                                        {userProfileSection}
                                                    </Flex>
                                                <Menu.Item onClick={ToggleTheme} leftSection={computedColorScheme==='dark'?<IconMoonFilled/>:<IconSunFilled/>}>
                                                    <Kbd>CTRL</Kbd> + <Kbd>Z</Kbd> {computedColorScheme==='dark'?"Dark":"Light"} Theme
                                                </Menu.Item>
                                                <Menu.Item c="red"  onClick={()=>setLogOut(!LogOut)} leftSection={<IconArrowBack/>}>
                                                    <Flex gap={5}>
                                                        <Kbd>CTRL</Kbd> + <Kbd>X</Kbd> <Text>Log Out</Text>
                                                        </Flex>
                                                </Menu.Item>

                                        </Menu.Dropdown>  
                                    </Menu> 
                                    <Modal  opened={LogOut} onClose={()=>setLogOut(false)} withCloseButton={false} centered>
                                        <Flex justify="space-between" align="center">
                                            <Title order={3}>Are You Sure!</Title>
                                            <CloseButton onClick={()=>setLogOut(false)}/>                      
                                        </Flex>
                                            <Flex p={3} gap="5" mt="4" justify="end">
                                                    <Button variant="subtle"c="red" onClick={signOut}>
                                                        Sign Me Out
                                                    </Button>
                                                    <Button variant="light" c="cyan" onClick={()=>setLogOut(false)}>
                                                        Cancel
                                                    </Button>
                                            </Flex>
                                        
                                    </Modal>
                                </div>
                            </AppShell.Header>
                           
                            {/* <!-- Main --> */}
                            <AppShell.Main className="">
                                 {/* -- Sidebar -- */}
                                 <Drawer offset={8} radius="lg" size="17rem" opened={SideBar} withCloseButton={false} onClose={SidebarToggle} >
                                    {/* Drawer content */}
                                    <AppShell.Aside id="nav-drawer" className="py-4 flex flex-col justify-evenly">   
                                            {/* Nav icons */
                                                SideBarFeature.map((i,k)=>{
                                                    return <Tooltip key={k} label={i.text} withArrow openDelay={500}>
                                                            <NavLink to={i.link}
                                                                className={({ isActive, isPending, isTransitioning })=>
                                                                    [
                                                                        isPending ? "pending" : "",
                                                                        isActive ? "active" : "",
                                                                        isTransitioning ? "transitioning" : "",
                                                                    ].join(" ")
                                                                    +"pe-5"
                                                                    }
                                                                >
                                                                    <div className="flex gap-2 px-2">
                                                                        {i.icon}{i.text}
                                                                    </div>
                                                                </NavLink>
                                                            </Tooltip>

                                                })}
                                        </AppShell.Aside>
                                </Drawer>
                                        {/* <!-- Container --> */}
                                    
                                        <Outlet></Outlet>
                            </AppShell.Main>
                            <ScrollToTop/>
                        </AppShell>
    )
}
export default NavFlex;