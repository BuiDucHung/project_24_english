import React, { useState } from 'react'
import { Header, Root, getContentBasedScheme, getCozyScheme, getFixedScheme, getStandardScheme } from '@mui-treasury/layout';

import dynamic from 'next/dynamic';
import { Drawer, Grid } from '@mui/material';
import { styled } from '@mui/styles';

const DynamicHeader = dynamic(() => import('./nav/Header'));
const DynamicSideBar = dynamic(() => import('./sidebar/SideBar'), { ssr: false });


type ChidrenProps = {
  children: React.ReactNode
}

type DataProps = {
  header: boolean,
  nav: boolean,
  content: boolean,
  footer: boolean
}

const presets: any = {
  createStandardLayout: getStandardScheme(),
  createFixedLayout: getFixedScheme(),
  createContentBasedLayout: getContentBasedScheme(),
  createCozyLayout: getCozyScheme()
};


const CustomDrawer = styled(Drawer)(() => ({
  width: '40%',
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: '40%',
    borderTopRightRadius: 40,
  },
  '@media (max-width:600px)': {
    width: '70%',
    '& .MuiDrawer-paper': {
      width: '70%',
    },
  },
}));

const Main: React.FC<ChidrenProps> = ({children}) => {

  const [preset] = useState<string>("createStandardLayout");
  const [data] = useState<DataProps>({
    header: true,
    nav: true,
    content: true,
    footer: true
  });
  const [ isOpen, setIsOpen ] = useState<boolean>(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setIsOpen(newOpen);
  };


  return (
    <Root scheme={presets[preset]}>
      <Grid container>
        <Grid
          item
          xs={12}
          md={3.3}
          xl={2.5}
          sx={{
            display: { xs: 'none', md: 'block' },
          }}
        >
          <DynamicSideBar/>
        </Grid>
        <Grid
          item
          xs={12}
          md={8.7}
          xl={9.5}
        >
          <Header className='head'>
            <DynamicHeader data={data} setIsOpen={setIsOpen}/>
          </Header>
          <div className='content-panel'>
            {children}
          </div>
        </Grid>
      </Grid>
      <CustomDrawer style={{maxWidth: '40%'}} open={isOpen} onClose={toggleDrawer(false)}>
        <DynamicSideBar/>
      </CustomDrawer>
    </Root>
  )
}

export default Main