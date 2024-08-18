import { Box, CircularProgress } from '@mui/material';
import React from 'react';

interface LoadingContainerProps {
  isLoading: boolean;
  children: React.ReactNode;
}
export const LoadingContainer: React.FC<LoadingContainerProps> = (props) => {
  if (props.isLoading) {
    return (
      <Box
        width="100%"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="fixed"
      >
        <CircularProgress />
      </Box>
    );
  }
  return props.children;
};

