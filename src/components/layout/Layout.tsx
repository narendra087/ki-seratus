import React, { ReactText } from 'react';
import { Outlet } from 'react-router-dom';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import {
  BiHomeAlt,
  BiCalendar,
  BiSitemap,
  BiSpreadsheet,
  BiCalculator,
  BiRocket,
  BiTable,
  BiInfoCircle,
  BiLaptop,
  BiMenu,
  BiChevronDown,
} from 'react-icons/bi'

import {
  Link as RouteLink,
  useLocation,
} from 'react-router-dom'

import { IconType } from 'react-icons';

import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../redux/slices/userSlice';

interface LinkItemProps {
  name: string;
  icon: IconType;
  href: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Dashboard', icon: BiHomeAlt, href: 'dashboard' },
  { name: 'Jadwal 4.0', icon: BiCalendar, href: 'schedule' },
  { name: 'Silsilah Keluarga', icon: BiSitemap, href: 'family' },
  { name: 'Form Unik', icon: BiSpreadsheet, href: 'unique-form' },
  { name: 'Formula Generator', icon: BiCalculator, href: 'formula' },
  { name: 'Form Canggih', icon: BiRocket, href: 'advanced-form' },
  { name: 'Tabel 4.0', icon: BiTable, href: 'table' },
  { name: 'Informasi', icon: BiInfoCircle, href: 'information' },
  { name: 'Dewa Tukang', icon: BiLaptop, href: 'superadmin' },
];

const Layout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        <Outlet />
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const location = useLocation()
  const pathName = location?.pathname || null
  
  let activePath = 'dashboard'
  if (pathName) {
    const splitPath = pathName.split('/')
    activePath = splitPath[1]
  }
  
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Q100+
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} href={link.href} path={activePath}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  href: string;
  path: string;
  children: ReactText;
}
const NavItem = ({ icon, children, href, path, ...rest }: NavItemProps) => {
  return (
    <Link
      className={path === href ? 'active' : ''}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
      as={RouteLink}
      to={href}
      cursor={path === href ? 'default' : 'pointer'}
      mb='5px'
      display={'block'}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor={path === href ? 'default' : 'pointer'}
        pointerEvents={path === href ? 'none' : 'auto'}
        bg={path === href ? 'primary.400' : ''}
        color={path === href ? 'white' : ''}
        _hover={{
          bg: 'primary.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const dispatch = useDispatch()
  const user = useSelector((state:any) => state.user.userData)
  
  const handleLogout = () => {
    dispatch(removeUser())
  }
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<BiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        Q100+
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">{ user.name || '-' }</Text>
                  <Text fontSize="xs" color="gray.600">
                    { user?.roleName || '-' }
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <BiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem onClick={() => handleLogout()} >Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default Layout