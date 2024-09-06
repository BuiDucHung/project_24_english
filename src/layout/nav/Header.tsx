import React, { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { Button, FormControl, InputAdornment, SvgIcon, TextField, useMediaQuery, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { BtnLoginStyle, BtnregisterStyle } from './style';
import PopupAuth from 'components/popup/PopupAuth';

type DataProps = {
  data: {
    header: boolean,
    nav: boolean,
    content: boolean,
    footer: boolean
  }
  setIsOpen: (f: boolean) => void
}

const Header: React.FC<DataProps> = ({ setIsOpen }) => {

  const theme = useTheme();
  const breackpoin = useMediaQuery(theme.breakpoints.down("md"));
  const breackpoin_mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState<boolean>(false);

  const [num, setNum] = useState<number | null>(null);


  return (
    <div className='navigation-bar'>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {breackpoin ? (
          <React.Fragment>
            <div className='action-button' aria-aria-label='Xem thêm' onClick={() => setIsOpen(true)}>
              <MenuIcon style={{ color: '#f40c44' }} />
            </div>
            <Link href={'/'}>
              <a>
                {breackpoin_mobile ? (
                  <div className='logo'>
                    <Image src={'/svg/logo.svg'} className='logo_mobile' width={90} height={32} alt='logo' />
                  </div>
                ) : (
                  <div className='logo'>
                    <Image src={'/svg/logo.svg'} className='logo_mobile' width={120} height={43} alt='logo' />
                  </div>
                )}
              </a>
            </Link>
          </React.Fragment>
        ) : <SearchComponent />}
      </div>
      <div className='categories'>
        <Link href={'/'}>
          <a style={{ textDecoration: 'none', color: 'inherit', }}>
            <div className='categories-item'>
              <span>
                <Image className='icon_header' src={'/svg/course.svg'} width={20} height={20} />
              </span>
              <span className='text'>
                Khóa học
              </span>
            </div>
          </a>
        </Link>
        <Link href={'/'}>
          <a style={{ textDecoration: 'none', color: 'inherit', }}>
            <div className='categories-item'>
              <span>
                <Image className='icon_header' src={'/svg/fire_gif.gif'} width={20} height={20} />
              </span>
              <span className='text'>
                Hot combo
              </span>
            </div>
          </a>
        </Link>
        <Link href={'/'}>
          <a style={{ textDecoration: 'none', color: 'inherit', }}>
            <div className='categories-item'>
              <span>
                <Image className='icon_header' src={'/svg/document.svg'} width={20} height={20} />
              </span>
              <span className='text'>
                Tài liệu
              </span>
            </div>
          </a>
        </Link>
      </div>
      <div className='action'>
        <StoryComponent />
        <div className='action-button' aria-label="Giỏ hàng">
          <Link href={'/'}>
            <a style={{ textDecoration: 'none', color: 'inherit' }}>
              <span className="MuiBadge-root cart">
                <Image src={'/svg/cart.svg'} width={18} height={18} style={{ marginTop: 1 }} />
                {/* <span className="MuiBadge-badge ">
                  0
                </span> */}
              </span>
            </a>
          </Link>
        </div>
        { breackpoin_mobile ? (
          <div className='icon_login_mobile' onClick={() => {
            setOpen(true);
            setNum(0);
          }}>
            <span>
              <Image src={'/svg/login.svg'} width={18} height={18} style={{ marginTop: 1 }} />
            </span>
          </div>
        ) : (
          <React.Fragment >
            <BtnLoginStyle variant="outlined" color="primary" size="medium" onClick={() => {
              setOpen(true);
              setNum(0);
            }}>
              Đăng nhập
            </BtnLoginStyle>
            <BtnregisterStyle variant="outlined" color="primary" size="medium"
              onClick={() => {
                setOpen(true);
                setNum(1);
              }}
            >
              Đăng ký
            </BtnregisterStyle>
          </React.Fragment>
        )}
      </div>
      <PopupAuth open={open} setOPen={setOpen} num={num} setNum={setNum} />
    </div>
  )
}

export const SearchComponent = () => {
  return (
    <div className='search'>
      <form>
        <FormControl>
          <TextField
            id="textfield"
            placeholder="Tìm kiếm"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Button type="submit" sx={{ minWidth: 0, maxWidth: 0 }}>
                    <SvgIcon component={SearchIcon} sx={{ color: 'rgb(194, 198, 211)' }} />
                  </Button>
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                maxWidth: { xs: '100%', md: 100, xl: 240 },
                height: 30,
                borderRadius: '50px',
                boxShadow: '0 4px 8px 0 rgba(219, 201, 206, .4)',
                backgroundColor: '#fff',
                '& fieldset': {
                  border: 'none', // Remove the border
                },
              },
              '& .MuiInputBase-input': {
                fontSize: 12,
                fontWeight: 500,
                color: '#7a7c8b',
                padding: '4px 0 5px',
                paddingLeft: 0,
                '&::placeholder': {
                  fontSize: '0.75rem', // Adjust the font size of the placeholder text
                },
              },
            }}
          />
        </FormControl>
      </form>
    </div>
  )
}

export const StoryComponent = () => {

  return (
    <Link href={'/'}>
      <a style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className='story story_mob'>
          <span>
            <Image src={'/svg/story.svg'} width={26} height={26} />
          </span>
          <span>&nbsp;Story</span>
        </div>
      </a>
    </Link>
  )
}

export default Header