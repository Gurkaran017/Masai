import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Flex, Link } from '@chakra-ui/react';

const navItems = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/contact", name: "Contact" },
  { path: "/services", name: "Services" },
];

const Navbar = () => {
  return (
    <Box bg="gray.100" p={4}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        gap={4}
        justify="center"
        align="center"
      >
        {navItems.map(({ path, name }) => (
          <NavLink
            to={path}
            key={path}
            style={({ isActive }) => ({
              color: isActive ? 'blue' : 'black',
              fontWeight: isActive ? 'bold' : 'normal',
              textDecoration: 'none',
            })}
          >
            {({ isActive }) => (
              <Link
                _hover={{ color: 'blue.500' }}
                color={isActive ? 'blue.500' : 'gray.800'}
              >
                {name}
              </Link>
            )}
          </NavLink>
        ))}
      </Flex>
    </Box>
  );
};

export default Navbar;
