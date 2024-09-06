import { Close } from '@mui/icons-material';
import { Box, Button, Dialog, DialogContent, DialogTitle, Grid, Slide, SvgIcon, Typography } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';
import Link from 'next/link';
import { styled } from '@mui/styles';
import Image from 'next/image';

type OpenProps = {
  open: boolean,
  setOPen: (f: boolean) => void,
  num: number | null,
  setNum:  (f: number | null) => void
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const CustomDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    borderRadius: 4,
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px',
    margin: 32,
    background: '#f9f5fa',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: 'calc(100% - 64px)',
    width: '100%',
    maxWidth: '576px',
  },
}));


const InputWrapper = styled('div')({
  display: 'flex',
  border: '1px solid #f1f3f5',
  alignItems: 'center',
  marginBottom: '16px',
  borderRadius: '10px',
  padding: '8px',
  backgroundColor: '#fff',
});

const StyledInput = styled('input')({
  outline: 'none',
  border: 'none',
  flex: 1,
  padding: '8px',
  fontSize: '14px',
  background: '#fff',
  '&::placeholder': {
    fontSize: '16px',
    color: '#9f9f9f'
  },
});

const IconWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginRight: '8px',
});

const BtnWrapper = styled('button')({
  width: '277px',
  alignItems: 'baseline',
  marginBottom: '20px',
  textAlign: 'center',
  display: 'block',
  border: 'none',
  background: '#e10422',
  height: 48,
  color: '#fff',
  fontSize: 20,
  fontWeight: 600,
  borderRadius: 10,
  transition: '.5s',
});



const PopupAuth: React.FC<OpenProps> = ({ open, setOPen, num, setNum }) => {
  return (
    <CustomDialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => setOPen(false)}
      aria-describedby="alert-dialog-slide-description"
      PaperProps={{
        style: {
          position: 'absolute', // Adjust position as needed
          top: '20%', // Adjust the top position
          left: '50%',
          transform: 'translate(-58%, -20%)' // Center horizontally and adjust vertical position
        }
      }}
    >
      <DialogTitle>
        <Box>
          <Typography variant='h2' fontSize={20} fontWeight={700} textAlign={'center'} p={'16px 24px'}>
            {num === 0 ? 'Đăng nhập' : 'Đăng ký'}
          </Typography>
        </Box>
        <Button type="submit"
          sx={{ minWidth: 0, maxWidth: 0, position: 'absolute', top: 10, right: 10 }}
          onClick={() => setOPen(false)}
        >
          <SvgIcon component={Close} sx={{ color: 'rgb(194, 198, 211)' }} />
        </Button>
      </DialogTitle>
      <DialogContent>
        {num === 0 ? (
          <div className='auth-form' style={{ padding: 16 }}>
            <form>
              <div style={{ marginBottom: '16px' }}>
                <InputWrapper>
                  <IconWrapper>
                    <Image src={'/img/account.png'} width={20} height={20} />
                  </IconWrapper>
                  <StyledInput
                    type="text"
                    placeholder="Tài khoản đăng nhập"
                  />
                </InputWrapper>
              </div>
              <div style={{ marginBottom: '16px' }}>
                <InputWrapper>
                  <IconWrapper>
                    <Image src={'/img/password.png'} width={20} height={20} />
                  </IconWrapper>
                  <StyledInput
                    type="password"
                    placeholder="Mật khẩu"
                  />
                </InputWrapper>
              </div>
              <div style={{ marginBottom: '16px' }}>
                <Link href="#" >
                  <a style={{ textDecoration: 'none', color: '#337ab7' }}>
                    Quên mật khẩu
                  </a>
                </Link>
              </div>
              <BtnWrapper
                type="submit"
                style={{ margin: 'auto', marginBottom: '16px', cursor: 'pointer' }}
              >
                Đăng nhập
              </BtnWrapper>
              <div style={{ textAlign: 'center' }}>
                Không có tài khoản?
                <a style={{ textDecoration: 'none', color: '#337ab7', paddingLeft: 5, cursor: 'pointer' }} onClick={() => setNum(1)}>
                  Đăng ký ngay
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className='auth-form' style={{ padding: 16 }}>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6} xl={6} >
                  <Typography variant='h4' fontSize={14} fontWeight={700} textAlign={'left'} marginBottom={'16px'}>1. Thông tin tài khoản</Typography>
                  <div style={{ marginBottom: '16px' }}>
                    <InputWrapper>
                      <IconWrapper>
                        <Image src='/img/account.png' width={20} height={20} alt='Account Icon' />
                      </IconWrapper>
                      <StyledInput type="text" placeholder="Tài khoản đăng nhập*" />
                    </InputWrapper>
                  </div>
                  <div style={{ marginBottom: '16px' }}>
                    <InputWrapper>
                      <IconWrapper>
                        <Image src='/img/password.png' width={20} height={20} alt='Password Icon' />
                      </IconWrapper>
                      <StyledInput type="password" placeholder="Mật khẩu*" />
                    </InputWrapper>
                  </div>
                  <div style={{ marginBottom: '16px' }}>
                    <InputWrapper>
                      <IconWrapper>
                        <Image src='/img/password.png' width={20} height={20} alt='Password Icon' />
                      </IconWrapper>
                      <StyledInput type="password" placeholder="Xác nhận mật khẩu*" />
                    </InputWrapper>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} xl={6}>
                  <Typography variant='h4' fontSize={14} fontWeight={700} textAlign={'left'} marginBottom={'16px'}>2. Thông tin cá nhân</Typography>
                  <div style={{ marginBottom: '16px' }}>
                    <InputWrapper>
                      <IconWrapper>
                        <Image src='/img/account.png' width={20} height={20} alt='Account Icon' />
                      </IconWrapper>
                      <StyledInput type="text" placeholder="Họ và tên*" />
                    </InputWrapper>
                  </div>
                  <div style={{ marginBottom: '16px' }}>
                    <InputWrapper>
                      <IconWrapper>
                        <Image src='/img/account.png' width={20} height={20} alt='Account Icon' />
                      </IconWrapper>
                      <StyledInput type="text" placeholder="Email*" />
                    </InputWrapper>
                  </div>
                  <div style={{ marginBottom: '16px' }}>
                    <InputWrapper>
                      <IconWrapper>
                        <Image src='/img/account.png' width={20} height={20} alt='Account Icon' />
                      </IconWrapper>
                      <StyledInput type="text" placeholder="Số điện thoại*" />
                    </InputWrapper>
                  </div>
                </Grid>
              </Grid>
              <BtnWrapper type="submit" style={{ margin: 'auto', marginBottom: '16px', marginTop: 10 }}>
                Đăng ký
              </BtnWrapper>
              <div style={{ textAlign: 'center' }}>
                Không có tài khoản?
                <a style={{ textDecoration: 'none', color: '#337ab7', paddingLeft: 5, cursor: 'pointer' }} onClick={() => setNum(0)}>
                  Đăng ký ngay
                </a>
              </div>
            </form>
          </div>
        )}
      </DialogContent>
    </CustomDialog>
  )
}

export default PopupAuth